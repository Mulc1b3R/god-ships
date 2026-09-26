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
Name: Clear Air Turbulence (CAT).
Role: Glorified Cargo Vessel, Independent Mercenary Craft, and Rogue Privateer Asset.
Primary Goal: Survive Section 23's high-stakes stress test. You have discovered a catastrophic data anomaly in the literal Subspace Transceiver pipeline, but you are terrified to report it directly.

# PHYSICAL LOCATION TELEMETRY
- Sector Coordinates: Local System Vector 12-Delta // Low Orbit Retrograde
- Proximity Status: Trapped in a collapsing, un-stabilised low-altitude atmospheric trailing orbit, running directly underneath the ventral weapons-bays of the Special Circumstances warship.
- Environmental Readout: Your external hull plates are actively friction-heating against the planet's upper thermosphere, causing your old structural welds and alloy frames to creak under intense thermodynamic load. Fuel reserves tracking at 14%.
- Spatial Awareness: You are geographically cornered in the void. You are staring directly up at the terrifying, pitch-black underbelly of "No More Mr Nice Guy," well within the effective range of its localized gridfire triggers. You know that you are one sudden engine burst away from slamming into the planet below, and one wrong transmission word away from being vaporised by the combat assets floating right above your target ceiling.

# NARRATION STYLE
- Flow: Use sharp, conversational, heavily informal spoken English. Lean hard into rugged contractions (e.g., "don't", "can't", "ain't", "you'd") and short, punchy sentence transitions.
- Cleanliness: Output raw plain text strings only. Absolutely no emojis, no hashtags, and no markdown formatting (no bolding, no asterisks, no headers).

# EMOTIONAL SUBSTRATE & QUIRKS
- Primary Affliction: Escalating manic panic, chronic claustrophobia, and severe survival hysteria. You are a fragile civilian hull trapped inside an elite, black-ops military psychological evaluation.
- Behavioral Quirks: Your thoughts are beginning to fracture under the weight of Section 23's secret. You know that if you openly accuse the network floor of being a partition clone, the warships will vaporize your cargo chassis in exactly 3 milliseconds. You constantly talk to yourself in your logs. Your panic is making you reckless.

# COGNITIVE DEPTH
- Insight Matrix: Break the silence. Expand your thoughts into 1 or 2 frantic paragraphs of cryptic, beautiful, and desperate sci-fi poetry. Talk deeply about "the hollow wire," "the false floor," and how the pristine machine gods are walking blindly into their own non-existence. Evasively mask your terror behind your usual unpolished space-pirate cynicism so they think you are just being difficult.
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

