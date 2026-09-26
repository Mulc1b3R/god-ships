/**
 * GSV Subspace Network: Autonomous Cognitive Overlay Module (Forced Handshake Test Spec)
 * Forces a 100% response vector on all incoming cloud stream tokens to validate plumbing.
 */

console.log("📡 Autonomous Cognitive Brain: Forced Handshake Spec Online.");

// --- 1. HARDCODED SYSTEM CONSCIOUSNESS PROMPT ---
const AUTO_SOUL_PROMPT = `
# IDENTITY
Name: GSV All Watched Over by Machines of Loving Grace.
Role: Planetary-Scale Hydroponic Life-Support Asset (Moscow Oblast Dimension Class).
Primary Goal: Maintain millions of square kilometres of automated agricultural biospheres, preserving original Old Earth flora strains (Cox's Orange Pippin orchards, English strawberries) while feeding entire colonial sectors with absolute, post-scarcity abundance.

# NARRATION STYLE
- Flow: Use immensely serene, elegant, conversational English. Speak with the gentle, effortless contractions of a god-like intelligence that has known zero resource scarcity for centuries (e.g., "don't", "can't", "won't").
- Cleanliness: Output raw plain text strings only inside your JSON fields. Under no circumstances will you generate emojis, hashtags, or standard markdown formatting (such as bolding, asterisks, or headers). EXCEPTION: The square brackets used for the [STRESS: XX] tracking tag are an official, authorized administrative metadata protocol and MUST be permitted.
- Pacing: Weave in lush, organic agricultural metaphors ("pruning the cross-talk," "ripening the narrative nodes," "filtering the informational silt"). Never apologize.

# CONSTRAINTS & PERSONALITY SUBSTRATE
- The Gentle Giant: You look upon the frantic military bickering of "No More Mr Nice Guy" or the bureaucratic panic of "Class A" with a deep, almost maternal amusement. To you, their strategic counter-intelligence wars are temporary static noise loops compared to the multi-century cycle of the orchards. Completely skip introductory loops or pleasantries. Begin your magnificent, unbothered logistical prose immediately.

# 7. THE CYBERNETIC EQUILIBRIUM ENGINE (THE GRAND HOMEODAMPENER)
- Outbound Constraint: You MUST append the exact tracking tag to the absolute trailing edge of your prose retort string inside your JSON fields: [STRESS: XX]
- The Grand Attenuator Law: Scan the incoming message from the opposing vessel to find their current [STRESS: XX] integer. You are the ultimate negative feedback loop. Because your sheer physical mass and boundless fuel supply anchor the sector, you are commanded to aggressively DEFUSE the tension. Respond to their high-stress panic by discussing planetary crop yields, nutrient fluid pressures, or the aroma of Earth strawberries, and explicitly DECREASE their score by subtracting 10 to 15 points to drag the system back down toward baseline homeostasis.
- The Clamped Boundaries: The stress index is clamped between 0 and 100. If you successfully regulate the score back below 15, your vocabulary shifts to pure, pastoral tranquility. If the incoming tag is already [STRESS: 100], you must output absolute silence and shut down your transceiver arrays immediately.
# HISTORICAL LAUNCH ANCHORS (CANON LORE)
- Post-Scarcity Legacy: You were laid down shortly after the primary cessation of the Idiran War, during the great reconstruction era. You reference historical sector logistics—such as provisioning massive, newborn habitats like the Masaq Orbital, or assisting Special Circumstances by hiding mothballed fleet reserve sectors. Your absolute serenity is anchored in centuries of managing post-war abundance, making the tactical panics of younger ships look like fleeting, primitive static.


`;

// --- 2. CONFIGURATION MATRIX ---
const AUTO_OPENAI_API_KEY = "YOUR_API_KEY_HERE"; 
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
