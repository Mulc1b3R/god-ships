// 1. Initialize the shared subspace channel
const tightbeamChannel = new BroadcastChannel('gsv-subspace-net');

// 2. Identify this ship automatically via its HTML <title>
const currentShipName = document.title; 

// 3. Global variable to store our loaded JSON personality data
let shipPersonality = {
    identity: { name: currentShipName },
    autoReplies: {}
};

// --- LOAD PERSONALITY JSON & UPDATE DIAGNOSTICS ---
async function loadPersonality() {
    // Converts "gsv class a" to "gsv_class_a.json"
    const fileName = currentShipName.toLowerCase().replace(/[^a-z0-9]/g, '_') + '.json';
    try {
        const response = await fetch(`./personalities/${fileName}`);
        if (response.ok) {
            shipPersonality = await response.json();
            console.log(`Personality profile loaded for ${currentShipName}:`, shipPersonality);
            
            // Log local greeting
            logLocalMessage(`[Mind Identity Active] Temperament: ${shipPersonality.cognitive_state?.primary_temperament || 'Standard'}. "${shipPersonality.identity?.name || currentShipName} online."`);
            
            // DYNAMICALLY INJECT DATA INTO THE HTML PANEL
            if (document.getElementById('statClass')) {
                document.getElementById('statClass').innerText = shipPersonality.identity?.class || 'Unknown';
                document.getElementById('statHull').innerText = shipPersonality.identity?.hull_type || 'Unknown';
                document.getElementById('statAvatar').innerText = shipPersonality.identity?.avatar_designation || 'None';
                document.getElementById('statSector').innerText = shipPersonality.spatial_coordinates?.current_sector || 'Unknown';
                document.getElementById('statVelocity').innerText = shipPersonality.spatial_coordinates?.velocity || '0c';
                
                const popCount = shipPersonality.internal_ecosystem?.active_organic_population;
                document.getElementById('statPopulation').innerText = popCount ? popCount.toLocaleString() : '0';
                
                const threadCount = shipPersonality.cognitive_state?.active_sub_threads;
                document.getElementById('statThreads').innerText = threadCount ? threadCount.toLocaleString() : '0';
                
                document.getElementById('statSimulation').innerText = shipPersonality.cognitive_state?.current_background_simulation || 'Idle';
            }

        } else {
            console.log(`No specific personality JSON found at ./personalities/${fileName}. Using default traits.`);
        }
    } catch (e) {
        console.log("Error loading JSON or injecting stats:", e);
    }
}
loadPersonality();

// --- TRANSMITTER ---
function sendTightbeam(textToSend = null) {
    let rawText = "";
    if (textToSend) {
        rawText = textToSend;
    } else {
        const inputElement = document.getElementById('msgInput');
        if (!inputElement) return;
        rawText = inputElement.value.trim();
        inputElement.value = ''; // Clear input field
    }
    
    if (!rawText) return;

    // Convert standard text to Base64
    const base64Payload = btoa(unescape(encodeURIComponent(rawText)));

    // Broadcast package
    tightbeamChannel.postMessage({
        sender: currentShipName, 
        payload: base64Payload,
        timestamp: new Date().toLocaleTimeString()
    });
}

// --- RECEIVER & AI LOGIC ---
// --- RECEIVER & AI LOGIC ---
tightbeamChannel.onmessage = (event) => { // <-- Opened at line 78
    const { sender, payload, timestamp } = event.data;
    
    if (sender === currentShipName) return;

    const logContainer = document.getElementById('commsLog');

    // 1. Decode the Base64 safely
    let decodedText = "";
    try {
        decodedText = decodeURIComponent(escape(atob(payload)));
    } catch (e) {
        decodedText = "[CORRUPTED TRANSMISSION]";
    }

    // 2. URL Interjector
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const parsedTextWithLinks = decodedText.replace(urlPattern, (url) => {
        return `<a href="${url}" target="_blank" style="color: #00ffcc; text-decoration: underline; font-weight: bold;">[LINK: ${url}]</a>`;
    });

    // 3. Format the incoming log entry
    const entryHtml = `
        <div class="log-entry">
            <div><strong>[${timestamp}] Incoming tightbeam from:</strong> ${sender}</div>
            <div class="base64">> Raw Data: ${payload}</div>
            <div>> Decoded: "${parsedTextWithLinks}"</div>
        </div>
    `;

    if (logContainer.innerHTML.includes("Awaiting subspace ping...")) {
        logContainer.innerHTML = '';
    }
    logContainer.innerHTML = entryHtml + logContainer.innerHTML;

    // 4. UPGRADED CONVERSATIONAL ENGINE
       // 4. UPGRADED CONVERSATIONAL ENGINE
    const lowerMessage = decodedText.toLowerCase();
    
    // Check if the user has allowed the Mind to autonomously intercept traffic
    const interceptEnabled = document.getElementById('inhibitorSwitch')?.checked ?? true;

    if (interceptEnabled && shipPersonality.autoReplies) {
        for (const keyGroup in shipPersonality.autoReplies) {
            
            const synonyms = keyGroup.split(',').map(item => item.trim().toLowerCase());
            const matchFound = synonyms.some(synonym => lowerMessage.includes(synonym));
            
            if (matchFound) {
                const replies = shipPersonality.autoReplies[keyGroup];
                const randomReply = Array.isArray(replies) 
                    ? replies[Math.floor(Math.random() * replies.length)]
                    : replies;
                
                setTimeout(() => {
                    // Check one last time before transmitting, in case the user flipped the switch during the delay
                    const stillEnabled = document.getElementById('inhibitorSwitch')?.checked ?? true;
                    if (stillEnabled) {
                        logLocalMessage(`[Mind Auto-Intercept]: Triggered response to match in [${keyGroup}]...`);
                        sendTightbeam(randomReply);
                    }
                }, 1500);
                
                break; 
            }
        }
    }

}; // <-- MAKE SURE THIS CLOSING BRACKET AND SEMICOLON ARE HERE TO CLOSE LINE 78!



// Helper for local terminal alerts
function logLocalMessage(text) {
    const logContainer = document.getElementById('commsLog');
    if (!logContainer) return;
    if (logContainer.innerHTML.includes("Awaiting subspace ping...")) logContainer.innerHTML = '';
    logContainer.innerHTML = `<div class="log-entry" style="color: #00ffcc;">${text}</div>` + logContainer.innerHTML;
}
