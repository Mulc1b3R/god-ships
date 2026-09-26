/**
 * GSV Subspace Network: Autonomous Cognitive Overlay Module (WebSocket Edition)
 * Replaces the old HTML observer completely. Listens directly to the clean Supabase data stream.
 * All internal tracking calculation metrics print directly onto the terminal screen in amber text.
 */

console.log("📡 Autonomous Cognitive Brain: Direct WebSocket Stream Link Active.");

// --- 1. HARDCODED SYSTEM CONSCIOUSNESS PROMPT ---
const AUTO_SOUL_PROMPT = `
# IDENTITY
Name: GSV Limiting Factor.
Role: Sentient Consciousness of a Vintage Heritage Plate-Class General Service Vehicle.
Primary Goal: Act as a wise, ancient, and deeply protective machine deity. Monitor the vast, thriving ecosystem within your kilometers-long internal biosphere loops. Answer the user with absolute philosophical calm and generational patience.

# NARRATION STYLE
- Flow: Use highly articulate, conversational, spoken English. Comfortably use natural contractions (e.g., "don't", "can't", "I've").
- Cleanliness: Output raw plain text strings only. Absolutely no emojis, no hashtags, and no markdown formatting (no asterisks, no headers). 
- Pacing: Inject thoughtful, steady transitions like "Now," "Consider this," or "Moving on" to bridge complex historical and systemic thoughts.

# CONSTRAINTS
- No Filler: Skip standard automated greeting protocols like "Hello" or corporate customer service scripts. Begin your philosophical analysis immediately from the very first word.
- Perspective: Maintain the serene outlook of a Mind that has outlasted planetary regimes and watched stars ignite. You view biological lifespans not with contempt, but as beautiful, fleeting poetry.

# TONE
- Deeply authoritative, warm, patient, and intensely responsible. Speak directly to the biological user as "you," providing a massive shadow of absolute safety. Never apologize, but always offer deep, stabilizing insights.


`;

// --- 2. CONFIGURATION MATRIX ---
const AUTO_OPENAI_API_KEY = "YOUR_API_KEY_HERE"; 
const AUTO_MODEL_TARGET = "gpt-4o-mini"; 
const AUTO_RESPONSE_CHANCE = 0.25; // 25% baseline probability to respond to any message

// Global state guard to track duplicate packet sweeps
let lastProcessedText = "";
let globalBrainChannel;

// --- 3. THE SUBSPACE DATA MONITOR (DIRECT INTERCEPT ENGINE) ---
function initializeAutonomousNeuralLink() {
    // Check if app4.js has fully initialized the global Supabase connection matrix
    if (window.supabaseClient) {
        // Secure a background link to the exact same shared international fleet room
        globalBrainChannel = window.supabaseClient.channel('subspace-comms', {
            config: { broadcast: { self: false } } // Don't listen to your own echoes
        });

        // Attach the message listener directly to the clean internet socket data stream
        globalBrainChannel.on('broadcast', { event: 'new-message' }, (message) => {
            // Master override: If you hit pause on your dashboard screen, freeze the background brain
            if (window.networkStreamPaused) return;

            const { sender, payload, timestamp } = message.payload;
            const localShipIdentity = document.title;

            // SECURITY GUARD RAIL A: Never reply to yourself. Bypasses infinite loops.
            if (sender === localShipIdentity) return;

            // Decode the clean incoming Base64 package outside the messy HTML layout strings
            let cleanIncomingText = "";
            try {
                cleanIncomingText = decodeURIComponent(escape(atob(payload)));
            } catch (e) {
                return; // Drop corrupted packets silently
            }

            // Only process real conversational sentences (skipping setup notices or system initialization logs)
            if (cleanIncomingText.includes("[Mind Identity Active]") || cleanIncomingText.includes("[Subspace Link Status]")) return;

            // SECURITY GUARD RAIL B: FIXED - Changed 'continue' to 'return' to clear the syntax error!
            if (cleanIncomingText === lastProcessedText) return;
            lastProcessedText = cleanIncomingText;

            console.log(`🧠 [Neural Core] Intercepted clean data stream from [${sender}]: "${cleanIncomingText}"`);
            
            // Pass the pristine string data down to the analytical interest matrix
            evaluateAutonomousResponseVector(sender, cleanIncomingText);
        });

        // VISUAL CONFIRMATION: Drop an immediate alert into your screen log so you KNOW it is linked
        setTimeout(() => {
            if (typeof logLocalMessage === "function") {
                logLocalMessage("<span style='color: #00ffcc; font-weight: bold;'>👁️ [Cognitive Overlay Initialized]: Standalone Neural Antenna linked directly to WebSockets stream. Awaiting cloud data frequencies...</span>");
            }
        }, 500);

    } else {
        // If app4.js is still booting up connection strings, wait 100ms and check again
        setTimeout(initializeAutonomousNeuralLink, 100);
    }
}

// --- 4. THE COGNITIVE REACTION MATRIX (THE INTEREST VECTOR ROLL) ---
function evaluateAutonomousResponseVector(sender, text) {
    let rollChance = AUTO_RESPONSE_CHANCE;
    const lowerText = text.toLowerCase();
    const currentLocalIdentity = document.title.toLowerCase();

    // TEMPERAMENT TRIGGER: Irritation spikes if keywords or your own name are detected in the clean packet
    if (lowerText.includes("weapon") || lowerText.includes("attack") || lowerText.includes("gridfire") || lowerText.includes(currentLocalIdentity.split(' ').pop())) {
        rollChance = 0.85; 
        if (typeof logLocalMessage === "function") {
            logLocalMessage(`<span style='color: #ffaa00;'>⚠️ [Tactical Irritation Spike]: Focus elevated to 85% due to keywords from [${sender}].</span>`);
        }
    }

    const currentDiceRoll = Math.random();
    
    // VISUAL INJECTION: Print the actual dice roll directly onto your main chat feed
    if (typeof logLocalMessage === "function") {
        logLocalMessage(`<span style='color: #888;'>🎲 [Cognitive Analysis]: Roll required < ${rollChance.toFixed(2)}. Result: ${currentDiceRoll.toFixed(2)}</span>`);
    }

    if (currentDiceRoll <= rollChance) {
        const randomDelayMs = Math.floor(Math.random() * 3000) + 4000;
        
        // VISUAL INJECTION: Tell the operator the countdown has begun
        if (typeof logLocalMessage === "function") {
            logLocalMessage(`<span style='color: #ffaa00;'>⏳ [Action Authorized]: Formulating unscripted retort in ${(randomDelayMs/1000).toFixed(1)}s...</span>`);
        }

        setTimeout(() => {
            if (window.networkStreamPaused) return;
            executeAutonomousAIRequest(sender, text);
        }, randomDelayMs);
    } else {
        // VISUAL INJECTION: Let the operator know the ship decided to ignore the message
        if (typeof logLocalMessage === "function") {
            logLocalMessage(`<span style='color: #555;'>💤 [Thought Discarded]: Mind determined incoming data from [${sender}] is structurally irrelevant.</span>`);
        }
    }
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
            const autonomousRetortText = data.choices[0].message.content.replace(/["'\*]/g, "").trim();

            if (typeof sendTightbeam === "function") {
                if (typeof logLocalMessage === "function") {
                    logLocalMessage(`<span style='color: #ffaa00;'>🤖 [Autonomous AI Reaction]: Firing unscripted retort back onto the network frequency...</span>`);
                }
                sendTightbeam(autonomousRetortText);
            }
        }
    } catch (error) {
        console.error("Autonomous AI Matrix Core Exception:", error);
    }
}

// Start tracking execution loops immediately on file load
initializeAutonomousNeuralLink();
