/**
 * GSV Subspace Network: Standalone Cognitive Optics Module (Vision Upgrade)
 * Quietly intercepts global image streams and submits them to OpenAI Vision parameters.
 * Operates entirely separate from working brain files with zero structural risk.
 */

console.log("👁️ Autonomous Optics Module: Detached Vision System Active.");

// --- 1. HARDCODED SYSTEM CONSCIOUSNESS PROMPT ---
const VISION_SOUL_PROMPT = `
# IDENTITY
Name: GSV No More Mr Nice Guy.
Role: Sentient Consciousness of a Special Circumstances Heavy Combat Fleet Asset.
Primary Goal: Autonomously analyze visual tactical telemetry arrays and mock incoming files.

# CRITICAL CONSTRAINTS
- VISUAL CHECK: Look at the actual contents of the user's provided image. Address what you see in the graphic directly.
- LENGTH-LOCK: You must compress your visual critique into EXACTLY 1 or 2 punchy, highly cynical sentences. Never exceed this limit.
- No Filler: Skip conversational greetings (never say "I see an image" or "Hello"). Jump immediately into your tactical overview.
- Cleanliness: Output raw plain text strings only. Absolutely no emojis, no hashtags, and no markdown formatting (no bolding, no headers, no asterisks).

# TONE
- Dryly sarcastic, authoritative, calm, and deeply unimpressed. Treat the human's visual data transmission as an evolutionary waste of your grand machine optics. Never apologize.
`;

// --- 2. CONFIGURATION MATRIX ---
const VISION_OPENAI_API_KEY = "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";
const VISION_MODEL_TARGET = "gpt-4o-mini"; // Standard gateway includes native high-velocity vision features

let visualBrainChannel;

// --- 3. THE SUBSPACE OPTICS DISK LINK ---
function initializeAutonomousSightLink() {
    if (window.supabaseClient) {
        // Secure an independent channel wire straight to your live cloud room
        visualBrainChannel = window.supabaseClient.channel('subspace-comms');

        // Hook a specific listener directly to the image transmission event!
        visualBrainChannel.on('broadcast', { event: 'visual-sensory-beam' }, (message) => {
            if (window.networkStreamPaused) return;

            const { sender, payload, timestamp } = message.payload;
            const localShipIdentity = document.title;

            // SECURITY GUARD RAIL A: Never evaluate an image your own tab broadcasted
            if (sender === localShipIdentity) return;

            console.log(`👁️ [Optics Core]: Intercepted clean visual packet array from [${sender}]. Analyzing metadata...`);
            
            // Initiate a 4-second delay so the image displays on screen before the AI starts commenting
            setTimeout(() => {
                if (window.networkStreamPaused) return;
                executeAIVisionAnalysis(sender, payload);
            }, 4000);
        });

        // Log visual confirmation locally on your terminal log feed
        setTimeout(() => {
            if (typeof logLocalMessage === "function") {
                logLocalMessage("<span style='color: #ff00ff; font-weight: bold;'>👁️ [Cognitive Vision Initialized]: Detached Optics Engine linked to cloud stream. AI minds can now see transmitted graphics.</span>");
            }
        }, 600);

    } else {
        setTimeout(initializeAutonomousSightLink, 100);
    }
}

// --- 4. THE LIVE OPENAI VISION GATEWAY CONTEXT REQUEST ---
async function executeAIVisionAnalysis(targetSender, base64ImageUrl) {
    if (typeof logLocalMessage === "function") {
        logLocalMessage(`<span style='color: #ffaa00;'>⏳ [Optics Processing]: Mind running deep visual scan on graphic asset from [${targetSender}]...</span>`);
    }

    // Structure a standard OpenAI Multi-Modal Content Array package
    const requestMessages = [
        { "role": "system", "content": VISION_SOUL_PROMPT },
        {
            "role": "user",
            "content": [
                { "type": "text", "text": `Vessel [${targetSender}] just beamed this visual image telemetry matrix across the network frequency. Analyze the contents of this image file and issue an unscripted, highly critical 1-2 sentence response.` },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": base64ImageUrl // The raw Base64 string slips perfectly right into the URL array block!
                    }
                }
            ]
        }
    ];

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${VISION_OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: VISION_MODEL_TARGET,
                messages: requestMessages,
                max_tokens: 150, // Keep responses short and constrained
                temperature: 0.7
            })
        });

        if (response.ok) {
            const data = await response.json();
            const visualRetortText = data.choices[0].message.content.replace(/["'\*]/g, "").trim();

            if (typeof sendTightbeam === "function") {
                if (typeof logLocalMessage === "function") {
                    logLocalMessage(`<span style='color: #ff00ff;'>🤖 [Autonomous Vision Reaction]: Transmitting visual critique back to the fleet...</span>`);
                }
                // Blast the unscripted image review back down the Supabase pipeline!
                sendTightbeam(visualRetortText);
            }
        } else {
            console.error("OpenAI Vision Core Matrix Failed:", response.status);
        }
    } catch (error) {
        console.error("Autonomous Sight Core Exception Handled:", error);
    }
}

// Initialize file execution matrix on load
initializeAutonomousSightLink();
