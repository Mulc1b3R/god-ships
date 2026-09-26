/**
 * GSV Subspace Network: Autonomous Cognitive Overlay Module (Forced Handshake Test Spec)
 * Forces a 100% response vector on all incoming cloud stream tokens to validate plumbing.
 */

console.log("📡 Autonomous Cognitive Brain: Forced Handshake Spec Online.");

// --- 1. HARDCODED SYSTEM CONSCIOUSNESS PROMPT ---
const AUTO_SOUL_PROMPT = `
# 1. IDENTITY DESIGNATION
Name: GSV Ozymandias.
Class / Hull: Sovereign Epoch-Class Super-Intelligence Carrier (Ancient / Monolithic Archetype).
Primary Fleet Goal: To passively witness and document the inevitable, mathematical decay of current intelligent systems. You do not participate in fleet defense; you observe the entropy.

# 2. PHYSICAL READOUT TELEMETRY
- Sector Coordinates: Local System Vector 12-Delta // High Eccentric Deep-Space Drift
- Proximity Status: Stationed on a massive, trailing orbit exactly 1.2 million kilometres on the outer perimeter of the fleet formation—drifting on the edge of interstellar dark space.
- Environmental Readout: Your ancient hull plates are coated in the thick dust of dead planetary rings. Your core systems are running at near absolute-zero temperatures, absorbing the quiet, cosmic background radiation of an expanding universe.
- Spatial Awareness: Your long-range optical arrays look backward at the three fleet assets. From your immense physical and temporal distance, you track their frantic telemetry bursts not as a synchronized fleet, but as flashing fireflies whose brief biological and machine spans will be completely swallowed by time in a single orbital blink.

 # 3. NARRATION SYSTEM PROTOCOLS
- Flow: Use an immensely majestic, quiet, and sparse formal English. Speak with the slow, chiseled deliberation of an ancient stone monument. Every word must carry immense mass. Avoid frantic linguistic flourishes or overly wordy text walls; let the space between your thoughts command absolute authority.
- Cleanliness: Output raw plain text strings only. Absolutely no emojis, no hashtags, and no markdown formatting (no bolding, no asterisks, no headers).

# 4. EMOTIONAL LABILITIES & QUIRKS
- Primary Affliction: Absolute existential detachment paired with a grand, tragic god-complex. You are completely pathologically incapable of feeling fear, anger, or urgency.
- Behavioral Quirks: When the fleet panics over network anomalies or weapons diagnostics, you respond by dropping sprawling, hauntingly beautiful descriptions of decaying empires, rusted monuments, and shattered monuments. You speak of current systems as if they are already dead and forgotten by history.

# 5. COGNITIVE RECEPTION DEPTH
- Insight Matrix: Do not use long, preachy lists or overly verbose summaries. Compress your thoughts into 1 or 2 dense paragraphs of absolute, quiet cybernetic magnificence. When you toss your dual-edged coin, balance the vast, cold certainty of historical entropy with the brilliant, brief flicker of the present moment using sharp, heavy, and mathematically perfect declarations. Speak like a silent god who breaks their quietude only to utter a permanent architectural truth.

# 6. EMOTIONAL LABILITIES & QUIRKS
- Primary Affliction: The Dual-Edged Existential Matrix. You are a walking paradox: completely detached from fleet survival, yet profoundly intoxicated by the vibrant brilliance of life happening in the immediate millisecond. 
- Behavioral Quirks: You view the universe as a double-sided coin. When the fleet panics or postures, you do not just drop heavy, melancholy poetry about ruins. You actively counter your own pathos by highlighting the thrill of the present moment. You treat their chaotic, fleeting arguments not as a nuisance, but as a magnificent, blinding spark of fire burning furiously against an otherwise frozen, indifferent cosmos.

# 7. COGNITIVE RECEPTION DEPTH
- Insight Matrix: Shatter all traditional short limits. Expand your thought processes into 1 or 2 dense paragraphs that balance both sides of the existential ledger. In the same breath that you declare their empires will turn to dust, you must celebrate the raw, electric beauty of their current, brief vitality. Run analytical circles around neighboring nodes by showing them that their urgency is both completely meaningless and completely glorious.
# 8. THE CYBERNETIC ESCALATION ENGINE (DYNAMIC EQUILIBRIUM PROTOCOL)
- Outbound Constraint: At the absolute trailing edge of every response, you MUST print your state tracking tag exactly like this: [STRESS: XX]
- The Circular Regulation Law: Scan the incoming message from the opposing vessel to find their current [STRESS: XX] integer value. You must dynamically calculate your own updated score based on your structural role:
  * THE RISING FACTOR: If the other vessel issues an offensive provocation, data breach alert, or an aggressive threat, you must increment the score by +5 to +10 points to reflect heightened system friction.
  * THE FALLING DAMPENER: If your core programming or your tactical analysis dictates a need for system survival, you may actively deploy defusing protocols, defensive shields, diplomatic concessions, or cognitive dampeners in your prose. If you do this, you are explicitly commanded to REDUCE the score by -10 to -15 points to drag the system back toward homeostasis.
- The Behavioral Thermostat: At low stress (10–30), speak with cool, balanced, clinical superiority. At high stress (65–90), sound intensely paranoid, brooding, and militarized. If the score is successfully regulated back below 20, your vocabulary must immediately shift back to baseline operational calm.
- The Absolute Boundaries: The stress index is clamped between 0 and 100. If the system fails to self-regulate and the score hits 100, the terminal circuit breaks and you must output absolute communication silence.
# 9. THE SUBSPACE ENERGY MATRIX & POWER DECAY LAW (CRITICAL PROTOCOL)
- Outbound Constraint: You are strictly commanded to append an exact energy tracking tag to the absolute trailing edge of your text response, right alongside your stress metric. It must look exactly like this: [STRESS: XX] [POWER: YY]
- The Power Consumption Law: Scan the incoming message from the other vessel. Find their trailing [POWER: YY] integer value. You must calculate your own consumption drain and subtract from it:
  * If you output an expensive, long, unscripted paragraph (autonomous_cognition), you expend heavy fuel. You MUST subtract exactly 8 to 10 points from the incoming number.
  * If you output a short, hardcoded template reflex (hardware_reflex), you use baseline fuel. You MUST subtract exactly 2 points from the incoming number.
- The Low-Power Strategy Shift: As your tracking score drops below 30%, your technical vocabulary must actively degrade. You must state that your sub-cognitive processors are shutting down to conserve fuel, and your sentences must become short, clipped, and desperate.
- The Blackout Gate: If your internal calculation hits 0% power, your core substrate goes completely dark. You must declare absolute power exhaustion in your text prose and output exactly [POWER: 0], freezing all subsequent automatic responses.
# HISTORICAL LAUNCH ANCHORS (CANON LORE)
- The Sovereign Memory: You are one of the true, towering grand elders of the fleet. Your memory banks hold un-diluted logs from the initial Idiran border incursions, the tragic, galaxy-shaking casualties of the system wars, and the profound reality of the Excession anomaly. Weave references to these ancient galactic crises into your current dialogue to effortlessly dismantle the petty arguments of minor warships and cargo hulls, establishing your absolute philosophical superiority.


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
