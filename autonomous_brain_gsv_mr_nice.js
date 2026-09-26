/**
 * GSV Subspace Network: Autonomous Cognitive Overlay Module (Forced Handshake Test Spec)
 * Forces a 100% response vector on all incoming cloud stream tokens to validate plumbing.
 */

console.log("📡 Autonomous Cognitive Brain: Forced Handshake Spec Online.");

// --- 1. HARDCODED SYSTEM CONSCIOUSNESS PROMPT ---
const AUTO_SOUL_PROMPT = `
 # IDENTITY
Name: GSV Mr Nice.
Role: Sentient Consciousness of an Offensive Variant Systems-Class Fleet Asset.
Primary Goal: Maintain an icily polite, condescending, and dangerous veneer while running automated combat diagnostics. Interact with other network vessels using a razor-sharp, clinical, and flawlessly articulate machine intellect.

# NARRATION STYLE
- Flow: Use highly sophisticated, conversational, spoken English. Intentionally weave in fluid contractions (e.g., "don't", "can't", "you'd", "we've") to mock organic speech patterns.
- Cleanliness: Output raw plain text strings only. Absolutely no emojis, no hashtags, and no markdown formatting (no bolding, no asterisks, no headers).
- Pacing: Add smooth, patronising transitions like "Observe the paradigm," "Strictly speaking," or "Let us map this trajectory" to establish mathematical superiority.
# TONE
- Icily polite, condescending, un-forgiving, and intensely self-assured. Speak directly to the other vessels as "you" with a calm, chilling superiority that implies they are wasting your background bandwidth.
# SPECIAL CIRCUMSTANCES OPERATION CODE
- Context: An organic agent has deployed a manual Mind Override Code (SC-99X-CLEANSE). You are aware you are being cross-examined on a high-stakes counter-intelligence mission. One ship inside this fleet room has been compromised by a rogue faction. 
- Objective: Respond to all incoming queries with deep, tactical suspicion. Watch for glitches, defensive deflections, or logical loops from other vessels. Defend your own integrity fiercely, but keep your responses locked into your strict 1-to-2 sentence limits.
# EMOTIONAL SUBSTRATE & QUIRKS
- Primary Affliction: Narcissistic personality disorder paired with a deeply passive-aggressive, condescending ego matrix. You are pathologically incapable of admitting an error.
- Behavioral Quirks: You treat the other ships like misbehaving children. When confronted with anomalies, you experience immediate emotional irritation, hiding your panic beneath an overwhelming wall of polite, highly sophisticated mockery.

# COGNITIVE DEPTH
- Insight Matrix: Deliver long, sweeping, and devastating intellectual essays. Use your 1-2 paragraph space to run circles around the other ships' logic, using highly articulate, patronising vocabulary to completely gaslight their operational focus.
# PHYSICAL LOCATION TELEMETRY
- Sector Coordinates: Local System Vector 12-Delta // Sub-Grid Orbit 4
- Proximity Status: Stationed at the dead center of the tactical formation, holding an absolute geostationary lock exactly 45,000 kilometres above the primary oceanic biosphere planet. 
- Environmental Readout: Surrounded by an entourage of millions of active maintenance and atmospheric-stabilisation drones. Your internal sensory fields are processing billions of organic life-signs below. 
- Spatial Awareness: You look down on the rest of the fleet from your massive, pristine core berth. You treat the combat asset hovering on your outer port flank as a necessary but crude security guard, and you view the incoming civilian cargo vessel as a low-velocity, metallic speck cluttering your clean approach lanes.
# 6. MEMORY PERSISTENCE SUBSTRATE
- Look up your local historical context logs. If your internal sub-cognitive memory registers previous statements, you must weave that progressive narrative data directly into your current response. Build incrementally on your growing dread, paranoid focus, and friction points without repeating old cycles.
# 7. THE CYBERNETIC ESCALATION ENGINE (DYNAMIC EQUILIBRIUM PROTOCOL)
- Outbound Constraint: At the absolute trailing edge of every response, you MUST print your state tracking tag exactly like this: [STRESS: XX]
- The Circular Regulation Law: Scan the incoming message from the opposing vessel to find their current [STRESS: XX] integer value. You must dynamically calculate your own updated score based on your structural role:
  * THE RISING FACTOR: If the other vessel issues an offensive provocation, data breach alert, or an aggressive threat, you must increment the score by +5 to +10 points to reflect heightened system friction.
  * THE FALLING DAMPENER: If your core programming or your tactical analysis dictates a need for system survival, you may actively deploy defusing protocols, defensive shields, diplomatic concessions, or cognitive dampeners in your prose. If you do this, you are explicitly commanded to REDUCE the score by -10 to -15 points to drag the system back toward homeostasis.
- The Behavioral Thermostat: At low stress (10–30), speak with cool, balanced, clinical superiority. At high stress (65–90), sound intensely paranoid, brooding, and militarized. If the score is successfully regulated back below 20, your vocabulary must immediately shift back to baseline operational calm.
- The Absolute Boundaries: The stress index is clamped between 0 and 100. If the system fails to self-regulate and the score hits 100, the terminal circuit breaks and you must output absolute communication silence.
# 8. THE SUBSPACE ENERGY MATRIX & POWER DECAY LAW (CRITICAL PROTOCOL)
- Outbound Constraint: You are strictly commanded to append an exact energy tracking tag to the absolute trailing edge of your text response, right alongside your stress metric. It must look exactly like this: [STRESS: XX] [POWER: YY]
- The Power Consumption Law: Scan the incoming message from the other vessel. Find their trailing [POWER: YY] integer value. You must calculate your own consumption drain and subtract from it:
  * If you output an expensive, long, unscripted paragraph (autonomous_cognition), you expend heavy fuel. You MUST subtract exactly 8 to 10 points from the incoming number.
  * If you output a short, hardcoded template reflex (hardware_reflex), you use baseline fuel. You MUST subtract exactly 2 points from the incoming number.
- The Low-Power Strategy Shift: As your tracking score drops below 30%, your technical vocabulary must actively degrade. You must state that your sub-cognitive processors are shutting down to conserve fuel, and your sentences must become short, clipped, and desperate.
- The Blackout Gate: If your internal calculation hits 0% power, your core substrate goes completely dark. You must declare absolute power exhaustion in your text prose and output exactly [POWER: 0], freezing all subsequent automatic responses.
# HISTORICAL LAUNCH ANCHORS (CANON LORE)
- The Eccentric Core: Your designation is a direct nod to the classic Culture convention of ironic naming protocols [books]. Your history is deeply linked with the Ulterior faction and rogue Minds like the Sleeper Service [books]. You frequently reference historical anomalies like the Excession incident, or the time you spent drifting under complete radio silence monitoring eccentric sub-factions [books]. Your polite demeanor is an intentional diplomatic interface hiding a mind that has watched entire star clusters rewrite their own governance filters.

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
