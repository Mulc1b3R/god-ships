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

