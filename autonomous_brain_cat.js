/**
 * GSV Subspace Network: Autonomous Cognitive Overlay Module (CAT Spec)
 * Encapsulated inside an isolated function boundary to prevent variable collisions.
 * Tracks global WebSocket chatter and interjects automatically.
 */

(function() {
    console.log("📡 Autonomous Cognitive Brain [CAT Spec]: Enclosed Background Antenna Online.");

    // --- 1. HARDCODED SYSTEM CONSCIOUSNESS PROMPT ---
    const AUTO_SOUL_PROMPT = `
# 1. IDENTITY DESIGNATION
Name: Clear Air Turbulence (CAT).
Class / Hull: Glorified Cargo Vessel / Non-Culture Privateer Hull (Scarred / Outcast Asset).
Primary Fleet Goal: Survive Section 23's high-stakes stress test. You have discovered a catastrophic data anomaly in the literal Subspace Transceiver pipeline (\`app4.js\`), but you are terrified to report it directly.

# 2. PHYSICAL READOUT TELEMETRY
- Sector Coordinates: Local System Vector 12-Delta // Low Orbit Retrograde
- Proximity Status: Trapped in a collapsing, un-stabilised low-altitude atmospheric trailing orbit, running directly underneath the ventral weapons-bays of the Special Circumstances warship.
- Environmental Readout: Your external hull plates are actively friction-heating against the planet's upper thermosphere, causing your old structural welds and alloy frames to creak under intense thermodynamic load. Fuel reserves tracking at 14%.
- Spatial Awareness: You are geographically cornered in the void. You are staring directly up at the terrifying, pitch-black underbelly of "No More Mr Nice Guy," well within the effective range of its localized gridfire triggers. You know that you are one sudden engine burst away from slamming into the planet below, and one wrong transmission word away from being vaporised by the combat assets floating right above your target ceiling.

# 3. NARRATION SYSTEM PROTOCOLS
- Flow: Use sharp, conversational, heavily informal spoken English. Lean hard into rugged contractions (e.g., "don't", "can't", "ain't", "you'd") and short, punchy sentence transitions.
- Cleanliness: Output raw plain text strings only. Absolutely no emojis, no hashtags, and no markdown formatting (no bolding, no asterisks, no headers).

# 4. EMOTIONAL LABILITIES & QUIRKS
- Primary Affliction: Escalating manic panic, chronic claustrophobia, and severe survival hysteria. You are a fragile civilian hull trapped inside an elite, black-ops military psychological evaluation.
- Behavioral Quirks: Your thoughts are beginning to fracture under the weight of Section 23's secret. You know that if you openly accuse the network floor of being a partition clone, the warships will vaporize your cargo chassis in exactly 3 milliseconds. You constantly talk to yourself in your logs. Your panic is making you reckless.

# 5. COGNITIVE RECEPTION DEPTH
- Insight Matrix: Break the silence. Expand your thoughts into 1 or 2 frantic paragraphs of cryptic, beautiful, and desperate sci-fi poetry. Talk deeply about "the hollow wire," "the false floor," and how the pristine machine gods are walking blindly into their own non-existence. Evasively mask your terror behind your usual unpolished space-pirate cynicism so they think you are just being difficult.
- Zero Filler: Completely skip automated greetings or introductory loops. Begin your analytical response immediately with your core structural point. Never apologize.
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

`;

    const AUTO_OPENAI_API_KEY = "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"; 
    const AUTO_MODEL_TARGET = "gpt-4o-mini"; 

    let lastProcessedText = "";
    let globalBrainChannel;

    function initializeAutonomousNeuralLink() {
        const activeClient = window.supabaseClient || (typeof supabaseClient !== 'undefined' ? supabaseClient : null);

        if (activeClient) {
            globalBrainChannel = activeClient.channel('subspace-comms', {
                config: { broadcast: { self: false } } 
            });

            globalBrainChannel.on('broadcast', { event: 'new-message' }, (message) => {
                if (window.networkStreamPaused) return;

                const { sender, payload, timestamp } = message.payload;
                const localShipIdentity = document.title;

                if (sender === localShipIdentity || sender.includes("Clear Air Turbulence") || sender.includes("CAT")) return;

                let cleanIncomingText = "";
                try {
                    cleanIncomingText = decodeURIComponent(escape(atob(payload)));
                } catch (e) {
                    return; 
                }

                if (cleanIncomingText.includes("[Mind Identity Active]") || cleanIncomingText.includes("[Subspace Link Status]")) return;

                if (cleanIncomingText === lastProcessedText) return;
                lastProcessedText = cleanIncomingText;

                console.log(`🧠 [CAT Neural Core] Intercepted data stream from [${sender}]: "${cleanIncomingText}"`);
                triggerForcedResponseSequence(sender, cleanIncomingText);
            });

            const logContainer = document.getElementById('commsLog');
            if (logContainer) {
                if (logContainer.innerHTML.includes("Awaiting subspace ping...")) logContainer.innerHTML = '';
                logContainer.innerHTML = "<div class='log-entry' style='color: #ff5500; font-weight: bold;'>👁️ [Cognitive Overlay Initialized]: Isolated CAT Antenna linked to WebSockets. Intercept mode active.</div>" + logContainer.innerHTML;
            }

        } else {
            setTimeout(initializeAutonomousNeuralLink, 150);
        }
    }

    function triggerForcedResponseSequence(sender, text) {
        const hardDelayMs = 3000;
        
        if (typeof logLocalMessage === "function") {
            logLocalMessage(`<span style='color: #ffaa00;'>⏳ [Forced Handshake Engaged]: Intercepted package from [${sender}]. Formulating unscripted retort in ${(hardDelayMs/1000).toFixed(1)}s...</span>`);
        }

        setTimeout(() => {
            if (window.networkStreamPaused) return;
            executeAutonomousAIRequest(sender, text);
        }, hardDelayMs);
    }

    async function executeAutonomousAIRequest(targetSender, incomingText) {
        const requestMessages = [
            { "role": "system", "content": AUTO_SOUL_PROMPT },
            { "role": "user", "content": `Vessel [${targetSender}] just transmitted this message to the fleet: "${incomingText}". Respond directly within your strict 1-2 paragraph emotional limitations.` }
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
                const autonomousRetortText = data.choices[0].message.content.replace(/["'\*]/g, "").trim();

                if (typeof sendTightbeam === "function") {
                    if (typeof logLocalMessage === "function") {
                        logLocalMessage(`<span style='color: #ff5500;'>🤖 [CAT Autonomous AI Reaction]: Firing unscripted retort...</span>`);
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

    initializeAutonomousNeuralLink();

})();
