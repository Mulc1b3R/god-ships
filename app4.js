// 1. INITIALIZE GLOBAL INTERNET REALTIME CHANNEL
// Global switch to pause the on-screen terminal render stream
window.networkStreamPaused = false;

function toggleNetworkStream() {
    const btn = document.getElementById('pauseBtn');
    window.networkStreamPaused = !window.networkStreamPaused;
    
    if (window.networkStreamPaused) {
        btn.innerText = "▶️ RESUME FLEET STREAM";
        btn.style.borderColor = "#4af626";
        btn.style.color = "#4af626";
        btn.style.background = "#051505";
        logLocalMessage("<span style='color: #ff3333;'>[SYSTEM NOTICE]: Incoming terminal rendering suspended. Dampener active.</span>");
    } else {
        btn.innerText = "⏸️ PAUSE INCOMING CHATTER";
        btn.style.borderColor = "#ff3333";
        btn.style.color = "#ff3333";
        btn.style.background = "#200000";
        logLocalMessage("<span style='color: #4af626;'>[SYSTEM NOTICE]: Terminal rendering restored. Dampener offline.</span>");
    }
}

const SUPABASE_URL = 'https://clghlkwqdajzwzwhxqgs.supabase.co'; 
const SUPABASE_ANON_KEY = 'sb_publishable_SPUnrKVP6NPmMHR0NtUZ2w_tUECBE6b';

// Connect to the Supabase Global Engine
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// ADD THIS NEW LINE RIGHT HERE: Exposes the client so sensor_beam.js can see it!
window.supabaseClient = supabaseClient;

// Subscribe to a shared international fleet room called 'subspace-comms'
const tightbeamChannel = supabaseClient.channel('subspace-comms', {
    config: { broadcast: { self: false } } // Prevents hearing your own echo loops
});

tightbeamChannel.subscribe((status) => {
    if (status === 'SUBSCRIBED') {
        logLocalMessage("<span style='color: #00ffcc;'>[Subspace Link Status]: CONNECTED TO INTERSTELLAR CLOUD MATRIX.</span>");
    }
});

// 2. IDENTIFY THIS SHIP VIA HTML TITLE
const currentShipName = document.title; 
let shipPersonality = { identity: { name: currentShipName }, autoReplies: {} };

// --- LOAD PERSONALITY JSON & UPDATE DIAGNOSTICS ---
async function loadPersonality() {
    const fileName = currentShipName.toLowerCase().replace(/[^a-z0-9]/g, '_') + '.json';
    try {
        const response = await fetch(`./personalities/${fileName}`);
        if (response.ok) {
            shipPersonality = await response.json();
            logLocalMessage(`[Mind Identity Active] Temperament: ${shipPersonality.cognitive_state?.primary_temperament || 'Standard'}. "${shipPersonality.identity?.name || currentShipName} online."`);
            
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
        }
    } catch (e) {
        console.log("Error loading JSON or injecting stats:", e);
    }
}
loadPersonality();

// --- TRANSMITTER: BEAMS DATA ACROSS THE INTERNET ---
function sendTightbeam(textToSend = null) {
    let rawText = "";
    if (textToSend) {
        rawText = textToSend;
    } else {
        const inputElement = document.getElementById('msgInput');
        if (!inputElement) return;
        rawText = inputElement.value.trim();
        inputElement.value = ''; 
    }
    
    if (!rawText) return;

    // Turn standard English text into a Base64 string payload
    const base64Payload = btoa(unescape(encodeURIComponent(rawText)));

    // Send the package up to the cloud to be broadcasted globally
    tightbeamChannel.send({
        type: 'broadcast',
        event: 'new-message',
        payload: {
            sender: currentShipName, 
            payload: base64Payload,
            timestamp: new Date().toLocaleTimeString()
        }
    });
    
    if (!textToSend) {
        logLocalMessage(`<strong>[${new Date().toLocaleTimeString()}] Sent to Global Grid:</strong> "${rawText}"`);
    }
}

// --- RECEIVER: CATCHES TRANSMISSIONS FROM OTHER COMPUTERS ---
// --- RECEIVER: CATCHES TRANSMISSIONS FROM OTHER COMPUTERS ---
tightbeamChannel.on('broadcast', { event: 'new-message' }, (message) => {
    // CRITICAL SECURITY CHECK: If the user hit pause, silently drop the visual print queue
    if (window.networkStreamPaused) return;

    const { sender, payload, timestamp } = message.payload;
    // ... rest of your existing message rendering and auto-reply code continues here exactly the same ...

    
    const logContainer = document.getElementById('commsLog');
    if (!logContainer) return;

    // Decode incoming Base64 string packets back to English strings
    let decodedText = "";
    try {
        decodedText = decodeURIComponent(escape(atob(payload)));
    } catch (e) {
        decodedText = "[CORRUPTED TRANSMISSION]";
    }

    // URL link interjector
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const parsedTextWithLinks = decodedText.replace(urlPattern, (url) => {
        return `<a href="${url}" target="_blank" style="color: #00ffcc; text-decoration: underline; font-weight: bold;">[LINK: ${url}]</a>`;
    });

    const entryHtml = `
        <div class="log-entry">
            <div><strong>[${timestamp}] Incoming global tightbeam from:</strong> ${sender}</div>
            <div class="base64">> Raw Cloud Data: ${payload}</div>
            <div>> Decoded: "${parsedTextWithLinks}"</div>
        </div>
    `;

    if (logContainer.innerHTML.includes("Awaiting subspace ping...")) {
        logContainer.innerHTML = '';
    }
    logContainer.innerHTML = entryHtml + logContainer.innerHTML;

    // Mind response engine logic
    const lowerMessage = decodedText.toLowerCase();
    if (shipPersonality.autoReplies) {
        for (const keyGroup in shipPersonality.autoReplies) {
            const synonyms = keyGroup.split(',').map(item => item.trim().toLowerCase());
            const matchFound = synonyms.some(synonym => lowerMessage.includes(synonym));
            
            if (matchFound) {
                const replies = shipPersonality.autoReplies[keyGroup];
                const randomReply = Array.isArray(replies) 
                    ? replies[Math.floor(Math.random() * replies.length)]
                    : replies;
                
                setTimeout(() => {
                    logLocalMessage(`[Mind Auto-Intercept]: Triggered cloud response to match in [${keyGroup}]...`);
                    sendTightbeam(randomReply);
                }, 1500);
                
                break;
            }
        }
    }
});

// Helper for local terminal alerts
function logLocalMessage(text) {
    const logContainer = document.getElementById('commsLog');
    if (!logContainer) return;
    if (logContainer.innerHTML.includes("Awaiting subspace ping...")) logContainer.innerHTML = '';
    logContainer.innerHTML = `<div class="log-entry" style="color: #00ffcc;">${text}</div>` + logContainer.innerHTML;
}
