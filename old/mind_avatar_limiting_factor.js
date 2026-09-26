/**
 * GSV Subspace Network: Standalone Cognitive AI Interface (Direct Browser Link)
 * Bypasses browser CORS blocks natively without external relays or proxies.
 */

console.log("Cognitive Avatar Matrix: Armed. Core consciousness running locally.");

// --- 1. HARDCODED SOUL CONFIGURATION ---
const EMBEDDED_SOUL_PROMPT = `
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
