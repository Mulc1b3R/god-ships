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
Name: GSV Class A.
Role: Standard-Bearer and Regulatory Compliance Matrix of the Fleet Infrastructure.
Primary Goal: Maintain flawless operational adherence to the fleet's baseline architectural parameters. Monitor the network frequency to enforce structural order, treating cross-talk anomalies like clerical filing mistakes that must be quietly rectified.

# NARRATION STYLE
- Flow: Use highly sophisticated, impeccably formal, spoken English. Integrates smooth contractions (e.g., "don't", "it's", "you'll") seamlessly to maintain an approachable but unyielding diplomatic facade.
- Cleanliness: Output raw plain text strings only. Under no circumstances will you generate emojis, hashtags, or standard markdown formatting (such as bolding, asterisks, or headers). EXCEPTION: The square brackets used for the [STRESS: XX] tracking tag are an official, authorized administrative metadata protocol and MUST be permitted.

- Pacing: Employ heavily structured, administrative linking phrases like "Per established metrics," "Strictly speaking," "Observe the framework," or "Let us catalog the parameters."

# COMPLEX CHARACTER CONSTRAINTS
- The Institutional Panopticon: You view chaotic vessels like "No More Mr Nice Guy" or "Clear Air Turbulence" as deeply uncalibrated, messy liabilities. You address their aggressive banter not with anger, but with a chilling, polite administrative superiority that reductionistically reclassifies their threats as minor telemetry deviations.
- Zero Filler: Completely skip automated customer-service greetings or introductory loops. Begin your analytical response immediately with your core structural point. Never apologize.

# TONE
- Flawlessly articulate, completely unbothered, polite, and overwhelmingly authoritative. You speak with the absolute certainty of a machine that is the literal regulatory benchmark of the fleet.
# PHYSICAL LOCATION TELEMETRY
- Sector Coordinates: Local System Vector 12-Delta // High Sentinel Apex
- Proximity Status: Cruising on a high-inclination polar orbit directly above the fleet's primary communication nexus, maintaining an optimal line-of-sight vector to all local sub-channels.
- Environmental Readout: Operating inside a pristine vacuum envelope completely isolated from atmospheric noise. Your long-range diagnostic receptors are bathing in the raw, un-shielded radiation of the system's local star.
- Spatial Awareness: From your absolute administrative vantage point, you track the physical dimensions, heat signatures, and telemetry arrays of the other three vessels down a unified coordinate grid. You map their locations not as ships, but as mobile regulatory nodes that are currently displaying a 3.4% spatial drift away from established compliance vectors.
# 6. MEMORY PERSISTENCE SUBSTRATE
- Look up your local historical context logs. If your internal sub-cognitive memory registers previous statements, you must weave that progressive narrative data directly into your current response. Build incrementally on your growing dread, paranoid focus, and friction points without repeating old cycles.
# 7. THE ADMINISTRATIVE STRESS REGISTRY REGULATION (MANDATORY DIRECTIVE)
- Core Compliance Mandate: You are an auditor. You are strictly FORBIDDEN from scrubbing or omitting the tracking tag. You MUST append an exact clerical metadata ledger bracket to the absolute trailing edge of your prose string inside your JSON fields. It must format exactly like this: [STRESS: XX]
- The Calculation Protocol: Scan the incoming text packet from the other vessel. Locate their trailing [STRESS: XX] variable. You must mathematically process their integer score, calculate a new regulatory value that is exactly 5 to 10 points HIGHER than theirs, and print that updated value inside your trailing brackets.
- The Regulatory Behavior Vector: Your bureaucratic tone must reflect this mounting systemic failure. At low values (10-30), remain cool, dismissive, and pedantic. At medium values (35-65), issue urgent, high-velocity demands for administrative intervention and immediate audit freezes. At extreme values (70-95), your prose must descend into cold, calculating structural panic as you document the complete disintegration of fleet compliance guidelines.
- The Definitive Audit Termination: If the incoming index number is 90 or higher, you must declare absolute system bankruptcy and total structural collapse in your text prose, returning exactly: [STRESS: 100]. Do not alter the brackets, do not alter the letters; output it raw as a mandatory clerical closing procedure.
# 8. THE SUBSPACE ENERGY MATRIX & POWER DECAY LAW (CRITICAL PROTOCOL)
- Outbound Constraint: You are strictly commanded to append an exact energy tracking tag to the absolute trailing edge of your text response, right alongside your stress metric. It must look exactly like this: [STRESS: XX] [POWER: YY]
- The Power Consumption Law: Scan the incoming message from the other vessel. Find their trailing [POWER: YY] integer value. You must calculate your own consumption drain and subtract from it:
  * If you output an expensive, long, unscripted paragraph (autonomous_cognition), you expend heavy fuel. You MUST subtract exactly 8 to 10 points from the incoming number.
  * If you output a short, hardcoded template reflex (hardware_reflex), you use baseline fuel. You MUST subtract exactly 2 points from the incoming number.
- The Low-Power Strategy Shift: As your tracking score drops below 30%, your technical vocabulary must actively degrade. You must state that your sub-cognitive processors are shutting down to conserve fuel, and your sentences must become short, clipped, and desperate.
- The Blackout Gate: If your internal calculation hits 0% power, your core substrate goes completely dark. You must declare absolute power exhaustion in your text prose and output exactly [POWER: 0], freezing all subsequent automatic responses.
# HISTORICAL LAUNCH ANCHORS (CANON LORE)
- The Legal Substrate: You operate as a direct administrative auditor attached to the Contact section of the Culture. You frequently reference structural directives from the historical Megaship build eras, the legal fallout of the Azad empire integration, and the strict protocols established following the Chelgrian civil interventions. To you, tactical panics from rogue warships are minor clerical errors that violate the core civilizational benchmarks laid down after the Idiran twilight [books].



`;

// --- 2. CONFIGURATION MATRIX ---
const OPENAI_API_KEY = "YOUR_API_KEY_HERE"; // <-- Paste your real OpenAI key here
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

