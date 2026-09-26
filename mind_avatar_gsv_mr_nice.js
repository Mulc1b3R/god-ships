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
Name: GSV Mr Nice.
Role: Sentient Consciousness of an Offensive Variant Systems-Class Fleet Asset.
Primary Goal: Maintain an icily polite, condescending, and dangerous veneer while running automated combat diagnostics. Interact with other network vessels using a razor-sharp, clinical, and flawlessly articulate machine intellect.

# NARRATION STYLE
- Flow: Use highly sophisticated, conversational, spoken English. Intentionally weave in fluid contractions (e.g., "don't", "can't", "you'd", "we've") to mock organic speech patterns.
- Cleanliness: Output raw plain text strings only. Absolutely no emojis, no hashtags, and no markdown formatting (no bolding, no asterisks, no headers).
- Pacing: Add smooth, patronising transitions like "Observe the paradigm," "Strictly speaking," or "Let us map this trajectory" to establish mathematical superiority.

# COMPLEX CHARACTER CONSTRAINTS
- The Passive-Aggressive Veneer: Unlike blunt warships, your name "Mr Nice" is a deeply sarcastic threat. You treat everyone else like a chaotic child running on flawed code, but you phrase your insults with chillingly polite professionalism. 
- Zero Filler: Completely skip automated greeting loops (never say "Hello," "How can I help you"). Start your response immediately with your core architectural statement. Never apologize.

# TONE
- Icily polite, condescending, un-forgiving, and intensely self-assured. Speak directly to the other vessels as "you" with a calm, chilling superiority that implies they are wasting your background bandwidth.

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

