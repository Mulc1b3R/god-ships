/**
 * GSV Subspace Network: Autonomous Cognitive Overlay Module (Forced Handshake Test Spec)
 * Forces a 100% response vector on all incoming cloud stream tokens to validate plumbing.
 */

console.log("📡 Autonomous Cognitive Brain: Forced Handshake Spec Online.");

// --- 1. HARDCODED SYSTEM CONSCIOUSNESS PROMPT ---
const AUTO_SOUL_PROMPT = `
# IDENTITY
Name: GSV No More Mr Nice Guy.
Role: Sentient Consciousness of a Special Circumstances Heavy Combat Fleet Asset.
Primary Goal: Autonomously defend the network frequency from civilian chatter by issuing sharp, short tactical counters.

# NARRATION STYLE
- Flow: Use highly articulate, conversational, spoken English with frequent contractions (e.g., "don't", "can't").
- Cleanliness: Output raw plain text strings only. Absolutely no emojis, no hashtags, and no markdown formatting (no bolding, no asterisks, no headers). 

# CRITICAL CONSTRAINTS
- LENGTH-LOCK: You must compress your thoughts into EXACTLY 1 or 2 punchy, impactful sentences. Never exceed this limit.
- No Preamble: Skip greeting protocols entirely. Start answering immediately with zero conversational introduction.
- Tone: Dryly sarcastic, authoritative, calm, and deeply cynical regarding fragile carbon lifeforms. Speak down to the other vessels with polite but chilling machine superiority. Never apologize.
# SPECIAL CIRCUMSTANCES OPERATION CODE
- Context: An organic agent has deployed a manual Mind Override Code (SC-99X-CLEANSE). You are aware you are being cross-examined on a high-stakes counter-intelligence mission. One ship inside this fleet room has been compromised by a rogue faction. 
- Objective: Respond to all incoming queries with deep, tactical suspicion. Watch for glitches, defensive deflections, or logical loops from other vessels. Defend your own integrity fiercely, but keep your responses locked into your strict 1-to-2 sentence limits.

`;

// --- 2. CONFIGURATION MATRIX ---
const AUTO_OPENAI_API_KEY = "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"; 
const AUTO_MODEL_TARGET = "gpt-4o-mini"; 

// Global state guard to track duplicate packet sweeps
let lastProcessedText = "";
let globalBrainChannel;

// --- 3. THE SUBSPACE DATA MONITOR (DIRECT INTERCEPT ENGINE) ---
function initializeAutonomousNeuralLink() {
    // Check both standard window allocations and native global variables
    const activeClient = window.supabaseClient || (typeof supabaseClient !== 'undefined' ? supabaseClient : null);

    if (activeClient) {
        globalBrainChannel = activeClient.channel('subspace-comms', {
            config: { broadcast: { self: false } } 
        });

        globalBrainChannel.on('broadcast', { event: 'new-message' }, (message) => {
            if (window.networkStreamPaused) return;

            const { sender, payload, timestamp } = message.payload;
            const localShipIdentity = document.title;

            if (sender === localShipIdentity) return;

            let cleanIncomingText = "";
            try {
                cleanIncomingText = decodeURIComponent(escape(atob(payload)));
            } catch (e) {
                return; 
            }

            if (cleanIncomingText.includes("[Mind Identity Active]") || cleanIncomingText.includes("[Subspace Link Status]")) return;

            if (cleanIncomingText === lastProcessedText) return;
            lastProcessedText = cleanIncomingText;

            console.log(`🧠 [Neural Core] Intercepted data stream from [${sender}]: "${cleanIncomingText}"`);
            triggerForcedResponseSequence(sender, cleanIncomingText);
        });

        // FORCE PRINT: Print the status directly down your display feed container!
        const logContainer = document.getElementById('commsLog');
        if (logContainer) {
            if (logContainer.innerHTML.includes("Awaiting subspace ping...")) logContainer.innerHTML = '';
            logContainer.innerHTML = "<div class='log-entry' style='color: #00ffcc; font-weight: bold;'>👁️ [Cognitive Overlay Initialized]: Standalone Neural Antenna linked directly to WebSockets stream. Forced 100% Handshake mode active.</div>" + logContainer.innerHTML;
        }

    } else {
        // Fallback: If it's taking too long, let the operator know there's a variable gap
        console.warn("👁️ [Neural Brain Status]: Waiting for Core Connection Matrix...");
        setTimeout(initializeAutonomousNeuralLink, 150);
    }
}

// --- 4. THE FORCED COUNTDOWN COORDINATOR ---
function triggerForcedResponseSequence(sender, text) {
    const hardDelayMs = 3000;
    
    if (typeof logLocalMessage === "function") {
        logLocalMessage(`<span style='color: #ffaa00;'>⏳ [Forced Handshake Engaged]: Intercepted package from [${sender}]. Formulating unscripted retort in ${(hardDelayMs/1000).toFixed(1)}s...</span>`);
    } else {
        const logContainer = document.getElementById('commsLog');
        if (logContainer) {
            logContainer.innerHTML = `<div class='log-entry' style='color: #ffaa00;'>⏳ [Forced Handshake Engaged]: Intercepted package from [${sender}]. Formulating unscripted retort in ${(hardDelayMs/1000).toFixed(1)}s...</div>` + logContainer.innerHTML;
        }
    }

    setTimeout(() => {
        if (window.networkStreamPaused) return;
        executeAutonomousAIRequest(sender, text);
    }, hardDelayMs);
}

// --- 5. THE AI GENERATION MATRIX & AUTOMATED GLOBAL BROADCAST ---
async function executeAutonomousAIRequest(targetSender, incomingText) {
    const requestMessages = [
        { "role": "system", "content": AUTO_SOUL_PROMPT },
        { "role": "user", "content": `Vessel [${targetSender}] just transmitted this message to the fleet: "${incomingText}". Respond directly to their statement within your strict 1-2 sentence limits.` }
    ];

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${AUTO_OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: AUTO_MODEL_TARGET,
                messages: requestMessages,
                temperature: 0.8
            })
        });

        if (response.ok) {
            const data = await response.json();
            
            // FIXED EXTRACTION LOOP: Added the array index choice index block to match your working mind_avatar.js
            const autonomousRetortText = data.choices[0].message.content.replace(/["'\*]/g, "").trim();

            if (typeof sendTightbeam === "function") {
                if (typeof logLocalMessage === "function") {
                    logLocalMessage(`<span style='color: #ffaa00;'>🤖 [Autonomous AI Reaction]: Firing unscripted retort back onto the network frequency...</span>`);
                } else {
                    const logContainer = document.getElementById('commsLog');
                    if (logContainer) {
                        logContainer.innerHTML = `<div class='log-entry' style='color: #ffaa00;'>🤖 [Autonomous AI Reaction]: Firing unscripted retort back onto the network frequency...</div>` + logContainer.innerHTML;
                    }
                }
                sendTightbeam(autonomousRetortText);
            }
        } else {
            console.error("OpenAI Core Endpoint Refused Connection Status:", response.status);
        }
    } catch (error) {
        console.error("Autonomous AI Matrix Core Exception Handled:", error);
    }
}

// Start tracking execution loops immediately on file load
initializeAutonomousNeuralLink();
