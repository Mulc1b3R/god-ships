// 1. Initialize the shared subspace channel
const tightbeamChannel = new BroadcastChannel('gsv-subspace-net');

// 2. Identify this ship automatically via its HTML <title>
const currentShipName = document.title; 
console.log(`System Online. Core Mind initialized: [${currentShipName}]`);

// 3. Global variable to store our loaded JSON personality data
let shipPersonality = {
    greeting: "System online.",
    temperament: "Neutral",
    sarcasmLevel: 0.1,
    autoReplies: {}
};

// 4. Fetch the JSON file based on the ship's name
async function loadPersonality() {
    // Converts "GSV Limiting Factor" to "gsv_limiting_factor.json"
    const fileName = currentShipName.toLowerCase().replace(/[^a-z0-9]/g, '_') + '.json';
    try {
        const response = await fetch(`./personalities/${fileName}`);
        if (response.ok) {
            shipPersonality = await response.json();
            console.log(`Personality profile loaded for ${currentShipName}:`, shipPersonality);
            
            // USE THE JSON: Display the unique greeting in our local console
            logLocalMessage(`[Mind Identity Active] Temperament: ${shipPersonality.temperament}. "${shipPersonality.greeting}"`);
        } else {
            console.log(`No specific personality JSON found at ./personalities/${fileName}. Using default traits.`);
        }
    } catch (e) {
        console.log("Error loading JSON. Defaulting to standard Mind architecture.");
    }
}
loadPersonality();

// --- TRANSMITTER ---
function sendTightbeam(textToSend = null) {
    // If textToSend is provided, use it (for auto-replies). Otherwise, read from the user input box.
    let rawText = "";
    if (textToSend) {
        rawText = textToSend;
    } else {
        const inputElement = document.getElementById('msgInput');
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
tightbeamChannel.onmessage = (event) => {
    const { sender, payload, timestamp } = event.data;
    
    // Ignore our own transmissions
    if (sender === currentShipName) return;

    const logContainer = document.getElementById('commsLog');

    // Decode Base64 back into standard text safely
    let decodedText = "";
    try {
        decodedText = decodeURIComponent(escape(atob(payload)));
    } catch (e) {
        decodedText = "[CORRUPTED TRANSMISSION]";
    }

    // Format the incoming message card
    const entryHtml = `
        <div class="log-entry">
            <div><strong>[${timestamp}] Incoming tightbeam from:</strong> ${sender}</div>
            <div class="base64">> Raw Data: ${payload}</div>
            <div>> Decoded: "${decodedText}"</div>
        </div>
    `;

    if (logContainer.innerHTML.includes("Awaiting subspace ping...")) {
        logContainer.innerHTML = '';
    }
    logContainer.innerHTML = entryHtml + logContainer.innerHTML;

    // --- INTEGRATING THE JSON PERSONALITY RESPONSE ---
        // --- INTEGRATING THE JSON PERSONALITY RESPONSE ---
    const lowerMessage = decodedText.toLowerCase();
    
    // Check if the user has allowed the Mind to autonomously reply
    const interceptEnabled = document.getElementById('inhibitorSwitch')?.checked ?? true;

    if (interceptEnabled && shipPersonality.autoReplies) {
        for (const keyword in shipPersonality.autoReplies) {
            if (lowerMessage.includes(keyword)) {
                
                const replies = shipPersonality.autoReplies[keyword];
                const randomReply = Array.isArray(replies) 
                    ? replies[Math.floor(Math.random() * replies.length)]
                    : replies;
                
                setTimeout(() => {
                    // Check one last time before transmitting, in case user flipped the switch during the delay
                    if (document.getElementById('inhibitorSwitch')?.checked ?? true) {
                        logLocalMessage(`[Mind Auto-Intercept]: Triggered response to "${keyword}"...`);
                        sendTightbeam(randomReply);
                    }
                }, 1500);
                
                break;
            }
        }
    }
}

// Helper for local terminal alerts
function logLocalMessage(text) {
    const logContainer = document.getElementById('commsLog');
    if (logContainer.innerHTML.includes("Awaiting subspace ping...")) logContainer.innerHTML = '';
    logContainer.innerHTML = `<div class="log-entry" style="color: #00ffcc;">${text}</div>` + logContainer.innerHTML;
}
