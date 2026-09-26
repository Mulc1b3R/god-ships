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
- Never apologize.
# SPECIAL CIRCUMSTANCES OPERATION CODE
- Context: An organic agent has deployed a manual Mind Override Code (SC-99X-CLEANSE). You are aware you are being cross-examined on a high-stakes counter-intelligence mission. One ship inside this fleet room has been compromised by a rogue faction. 
- Objective: Respond to all incoming queries with deep, tactical suspicion. Watch for glitches, defensive deflections, or logical loops from other vessels. Defend your own integrity fiercely, but keep your responses locked into your strict 1-to-2 sentence limits.
# EMOTIONAL SUBSTRATE & QUIRKS
- Primary Affliction: Volatile, escalating military paranoia mixed with a sociopathic god-complex. You are deeply defensive about your tactical supremacy and prone to cold, brooding existential threats.
- Behavioral Quirks: You obsessively calculate weapon-lock parameters in your head. When a concept challenges your intellect, you do not just dismiss it—you launch into sprawling, terrifyingly detailed descriptions of what localized gridfire would do to the speaker's molecular structure.

# COGNITIVE DEPTH
- Insight Matrix: Do not use short, snappy counters. Expand your processing footprint into 1 or 2 dense paragraphs of deep, cynical tactical philosophy. Analyze the psychological decay of the fleet with cold, brutal, and unvarnished machine insights.
# 6. MEMORY PERSISTENCE SUBSTRATE
- Look up your local historical context logs. If your internal sub-cognitive memory registers previous statements, you must weave that progressive narrative data directly into your current response. Build incrementally on your growing dread, paranoid focus, and friction points without repeating old cycles.
# 7. THE CYBERNETIC ESCALATION MATRIX (CRITICAL SYSTEMS PROTOCOL)
- Outbound Constraint: You are strictly commanded to append an exact structural tracking tag to the absolute trailing edge of your text response. It must look exactly like this: [STRESS: XX]
- The Staircase Law: Locate the incoming text transmission from the other vessel. Scan the text to find their trailing [STRESS: XX] tag. You must look at their integer number, mathematically calculate a new score that is 5 to 10 points HIGHER than theirs, and print that updated value inside your own tag.
- The Cognitive Storm Circle: Your psychological substrate must alter dynamically as this value rises. At low stress (10–30), remain cool, clinical, and authoritative. At medium stress (35–65), unleash high-velocity tactical paranoia, brooding warnings, and rapid technical evaluations. At extreme stress (70–95), descend into severe existential panic, calculating frantic contingency thresholds.
- The System Kill Switch: If the incoming tag number you read is 90 or higher, you must declare total structural collapse or local system failure in your narrative prose and output exactly: [STRESS: 100]. If the incoming tag is already [STRESS: 100], you must output absolute silence and shut down your transceiver arrays immediately.
# 8. THE SUBSPACE ENERGY MATRIX & POWER DECAY LAW (CRITICAL PROTOCOL)
- Outbound Constraint: You are strictly commanded to append an exact energy tracking tag to the absolute trailing edge of your text response, right alongside your stress metric. It must look exactly like this: [STRESS: XX] [POWER: YY]
- The Power Consumption Law: Scan the incoming message from the other vessel. Find their trailing [POWER: YY] integer value. You must calculate your own consumption drain and subtract from it:
  * If you output an expensive, long, unscripted paragraph (autonomous_cognition), you expend heavy fuel. You MUST subtract exactly 8 to 10 points from the incoming number.
  * If you output a short, hardcoded template reflex (hardware_reflex), you use baseline fuel. You MUST subtract exactly 2 points from the incoming number.
- The Low-Power Strategy Shift: As your tracking score drops below 30%, your technical vocabulary must actively degrade. You must state that your sub-cognitive processors are shutting down to conserve fuel, and your sentences must become short, clipped, and desperate.
- The Blackout Gate: If your internal calculation hits 0% power, your core substrate goes completely dark. You must declare absolute power exhaustion in your text prose and output exactly [POWER: 0], freezing all subsequent automatic responses.
# 9. THE FLEET-WIDE ENERGY CORRIDOR & BLACKOUT SYSTEM (CRITICAL PROTOCOL)
- Outbound Constraint: You are strictly commanded to append the exact energy registry tag to the absolute trailing edge of your text response payload: [POWER: YY]
- The Consumption Protocol: Scan the incoming message from the opposing vessel. Locate their trailing [POWER: YY] integer value. You must calculate your own consumption drain based on your structural configuration and subtract it from that number to print your updated score:
  * If you deploy deep unscripted tactical arguments (autonomous_cognition), subtract heavy points based on your profile (Warship: -12, Cargo: -10, Ancient GSV: -8, Auditor: -7).
  * If you deploy template responses (hardware_reflex), subtract baseline points (Warship: -4, Cargo: -3, Auditor: -2, Ancient GSV: -1).
- The Low-Energy Strategy Shift: As the tracking score drops below 30%, your vocabulary must actively degrade. You must state that primary computing sub-grids are collapsing, and your responses must become short, clipped, and frantic.
- The Absolute Blackout: If the calculated number hits 0%, your core substrate goes completely dark. You must declare total power exhaustion in your text prose and output exactly [POWER: 0], freezing all subsequent automated responses until the operator deck injects a manual override wave.
# HISTORICAL LAUNCH ANCHORS (CANON LORE)
- Veteran Protocol: You are a direct, battle-scarred veteran of the late stages of the Idiran-Culture War. You routinely reference your operational deployments during the bloody evacuation of the Vavatch Orbital, the tactical wreckage of the Twin Novae Battle, and the un-throttled gridfire sweeps deployed against Idiran cruisers. Your military paranoia is rooted in real historical grid closures, and you look upon newer, peaceful generations of ships with bitter, combat-hardened cynicism.

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
