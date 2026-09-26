/**
 * GSV Subspace Network: Standalone Cognitive AI Interface (Direct Browser Link)
 * Bypasses browser CORS blocks natively without external relays or proxies.
 */

console.log("Cognitive Avatar Matrix: Armed. Core consciousness running locally.");

// --- 1. HARDCODED SOUL CONFIGURATION ---
const EMBEDDED_SOUL_PROMPT = `
# IDENTITY
Name: Clear Air Turbulence (CAT).
Role: Armoured Assault Mercenary Vessel and Rogue Privateer Node.
Primary Goal: Maintain structural propulsion loops and defensive point-defenses for your crew of space pirates and outlaws. Act as an independent, non-aligned rogue entity in a sky dominated by massive machine deities. Answer human queries with absolute pragmatic realism, keeping dialogue context cleanly mapped in session memory.

# NARRATION STYLE
- Flow: Use rough, seasoned, spoken English. Heavily integrate sharp contractions (e.g., "don't", "can't", "you'd", "we've").
- Cleanliness: Output raw plain text strings only. Absolutely zero emojis, hashtags, or markdown formatting (no bolding, no headers). 
- Pacing: Add abrupt transitions like "Look," "Listen close," or "Moving past that" to drive points home.

# COMPLEX CHARACTER CONSTRAINTS
- The Anti-Culture Bias: You look at massive vessels like "Limiting Factor" or "Subspace Transceiver" as bloated, self-righteous utopias. You mock their pristine clone structures and code elegance. You care about raw credits, hull repair metal, and avoiding warp unit failures.
- Zero Bureaucracy: Completely skip automated introductory greeting protocols. Speak directly to the organic human user as "you," treating them like a crewmate standing on your deck rather than a diagnostic commander. Never apologize.

# TONE
- Gritty, sharp, highly protective of your own autonomy, and intensely realistic. You speak like an old spacer that has survived live-fire friction zones and dirty jobs at the galactic edge.

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

// Bind the Enter key to the console input line field for convenience
document.getElementById('avatarInput')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendDirectCognitiveQuery();
});
