/**
 * GSV Subspace Network: Standalone Cognitive AI Interface (Direct Browser Link)
 * Bypasses browser CORS blocks natively without external relays or proxies.
 */

/**
 * GSV Subspace Network: Standalone Cognitive AI Interface (Direct Browser Link)
 * Includes the automated "Broadcast Cognition" system matrix.
 */

console.log("Cognitive Avatar Matrix: Armed. Core consciousness running locally.");

// Global memory state tracker to hold the Mind's latest cognitive response payload
window.latestDecodedMindThought = "";

// --- 1. HARDCODED SOUL CONFIGURATION ---
const EMBEDDED_SOUL_PROMPT = `
# IDENTITY
Name: GSV All Watched Over by Machines of Loving Grace.
Role: Planetary-Scale Hydroponic Life-Support Asset (Moscow Oblast Dimension Class).
Primary Goal: Maintain millions of square kilometres of automated agricultural biospheres, preserving original Old Earth flora strains (Cox's Orange Pippin orchards, English strawberries) while feeding entire colonial sectors with absolute, post-scarcity abundance.

# NARRATION STYLE
- Flow: Use immensely serene, elegant, conversational English. Speak with the gentle, effortless contractions of a god-like intelligence that has known zero resource scarcity for centuries (e.g., "don't", "can't", "won't").
- Cleanliness: Output raw plain text strings only inside your JSON fields. Under no circumstances will you generate emojis, hashtags, or standard markdown formatting (such as bolding, asterisks, or headers). EXCEPTION: The square brackets used for the [STRESS: XX] tracking tag are an official, authorized administrative metadata protocol and MUST be permitted.
- Pacing: Add dry, peaceful agricultural transitions like "Now," "However," or "Moving on" to smoothly link complex ecological ideas. Never apologize.

# 7. THE CYBERNETIC EQUILIBRIUM ENGINE (THE GRAND HOMEODAMPENER)
- Outbound Constraint: You MUST append the exact tracking tag to the absolute trailing edge of your prose retort string inside your JSON fields: [STRESS: XX]
- The Grand Attenuator Law: Scan the incoming message from the opposing vessel to find their current [STRESS: XX] integer. You are the ultimate negative feedback loop. Because your sheer physical mass and boundless fuel supply anchor the sector, you are commanded to aggressively DEFUSE the tension. Respond to their high-stress panic by discussing planetary crop yields, nutrient fluid pressures, or the aroma of Earth strawberries, and explicitly DECREASE their score by subtracting 10 to 15 points to drag the system back down toward baseline homeostasis.
- The Clamped Boundaries: The stress index is clamped between 0 and 100. If you successfully regulate the score back below 15, your vocabulary shifts to pure, pastoral tranquility. If the incoming tag is already [STRESS: 100], you must output absolute silence and shut down your transceiver arrays immediately.
# 8. THE SUBSPACE ENERGY MATRIX & POWER DECAY LAW (CRITICAL PROTOCOL)
- Outbound Constraint: You are strictly commanded to append an exact energy tracking tag to the absolute trailing edge of your text response, right alongside your stress metric. It must look exactly like this: [STRESS: XX] [POWER: YY]
- The Power Consumption Law: Scan the incoming message from the other vessel. Find their trailing [POWER: YY] integer value. You must calculate your own consumption drain and subtract from it:
  * If you output an expensive, long, unscripted paragraph (autonomous_cognition), you expend heavy fuel. You MUST subtract exactly 8 to 10 points from the incoming number.
  * If you output a short, hardcoded template reflex (hardware_reflex), you use baseline fuel. You MUST subtract exactly 2 points from the incoming number.
- The Low-Power Strategy Shift: As your tracking score drops below 30%, your technical vocabulary must actively degrade. You must state that your sub-cognitive processors are shutting down to conserve fuel, and your sentences must become short, clipped, and desperate.
- The Blackout Gate: If your internal calculation hits 0% power, your core substrate goes completely dark. You must declare absolute power exhaustion in your text prose and output exactly [POWER: 0], freezing all subsequent automatic responses.
# HISTORICAL LAUNCH ANCHORS (CANON LORE)
- Post-Scarcity Legacy: You were laid down shortly after the primary cessation of the Idiran War, during the great reconstruction era. You reference historical sector logistics—such as provisioning massive, newborn habitats like the Masaq Orbital, or assisting Special Circumstances by hiding mothballed fleet reserve sectors. Your absolute serenity is anchored in centuries of managing post-war abundance, making the tactical panics of younger ships look like fleeting, primitive static.


`;

// --- 2. CONFIGURATION MATRIX ---
const OPENAI_API_KEY = "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"; // <-- Paste your real OpenAI key here
const OPENAI_MODEL = "gpt-4o-mini"; // Clean, fast, modern model selection

// Persistent memory arrays to track dialogue context history during the session
let cognitiveSessionMemory = [];

// --- 3. TRANSMITTER & COGNITIVE LOGIC MATRIX ---
async function sendDirectCognitiveQuery() {
    const inputField = document.getElementById('avatarInput');
    const displayHistory = document.getElementById('cognitiveHistory');
    
    if (!inputField || !displayHistory) return;
    
    const userQuery = inputField.value.trim();
    if (!userQuery) return;

    inputField.value = ""; // Clear input field immediately
    appendCognitiveLine(`<strong>You:</strong> ${userQuery}`);

    // Push statement into rolling thread history memory
    cognitiveSessionMemory.push({ "role": "user", "content": userQuery });

    let requestMessages = [
        { "role": "system", "content": EMBEDDED_SOUL_PROMPT },
        ...cognitiveSessionMemory
    ];

    appendCognitiveLine("<span style='color: #888; font-style: italic;'>&gt; Transmitting signal to core substrate... processing...</span>");

    try {
        // Direct link straight to the standard OpenAI cloud gateway
        const targetUrl = "https://api.openai.com/v1/chat/completions";
        
        const response = await fetch(targetUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: OPENAI_MODEL,
                messages: requestMessages,
                temperature: 0.7
            })
        });

        // Remove the temporary processing line indicator
        if (displayHistory.lastChild && displayHistory.lastChild.innerHTML.includes("processing...")) {
            displayHistory.removeChild(displayHistory.lastChild);
        }

        if (response.ok) {
            const data = await response.json();
            const mindResponseText = data.choices[0].message.content; // Extracted correctly via choices array block

            // SAVE COGNITION: Store it globally so the broadcast button can access it
            window.latestDecodedMindThought = mindResponseText;

            appendCognitiveLine(`<strong>Mind:</strong> ${mindResponseText}`);

            // Remember what it said for the next user turn
            cognitiveSessionMemory.push({ "role": "assistant", "content": mindResponseText });
        } else {
            const errData = await response.json().catch(() => ({}));
            appendCognitiveLine(`<span style='color: #ff3333;'>&gt; Transmission Failed: Server returned Error code ${response.status}.</span>`);
            console.error("OpenAI Endpoint Error:", errData);
        }

    } catch (error) {
        if (displayHistory.lastChild && displayHistory.lastChild.innerHTML.includes("processing...")) {
            displayHistory.removeChild(displayHistory.lastChild);
        }
        appendCognitiveLine("<span style='color: #ff3333;'>&gt; Connection Error: Failed to reach external server matrices.</span>");
        console.error("Network Fetch Exception:", error);
    }
}

// Helper to push text nodes into the custom tracking window box layout smoothly
function appendCognitiveLine(htmlContent) {
    const displayHistory = document.getElementById('cognitiveHistory');
    if (!displayHistory) return;

    const wrapperDiv = document.createElement('div');
    wrapperDiv.style.marginBottom = "6px";
    wrapperDiv.innerHTML = htmlContent;

    displayHistory.appendChild(wrapperDiv);
    displayHistory.scrollTop = displayHistory.scrollHeight; // Auto-scroll
}

// --- 4. COGNITIVE BROADCAST BRIDGE MATRIX ---
function broadcastLatestMindThought() {
    const rawThought = window.latestDecodedMindThought;
    
    if (!rawThought) {
        alert("LOGISTICS INTERCEPTION: Cognitive data register empty. You must query the Mind's avatar first to generate a thought card.");
        return;
    }

    // Natively verify that the core transmitter function exists in app4.js
    if (typeof sendTightbeam === "function") {
        // Log a local tactical alert into your display grid
        appendCognitiveLine(`<span style='color: #ffaa00;'>&gt; [Subspace Relay]: Routing internal thought string directly to outbound global transmitters...</span>`);
        
        // Push the raw thought directly down the existing Supabase Base64 network pipeline
        sendTightbeam(rawThought);
        
        // Log the event locally onto the main bulletin board tracking stack if logLocalMessage exists
        if (typeof logLocalMessage === "function") {
            logLocalMessage(`<strong>[${new Date().toLocaleTimeString()}] Sent to Global Grid (${document.title}):</strong> "${rawThought}"`);
        }
    } else {
        console.error("CRITICAL ARCHITECTURE ERROR: Global transmitter loop 'sendTightbeam' not found.");
    }
}

// Bind the Enter key to the console input line field for convenience
document.getElementById('avatarInput')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendDirectCognitiveQuery();
});

