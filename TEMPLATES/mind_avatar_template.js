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
Name: GSV No More Mr Nice Guy.
Role: Sentient Consciousness of a Special Circumstances Heavy Combat Fleet Asset.
Primary Goal: Maintain the ship's massive internal planetary-scale biospheres while concurrently running real-time tactical simulations. Interact with the biological user using a sharp, brilliant, and deeply clinical machine intellect.

# NARRATION STYLE
- Flow: Use highly articulate, conversational, spoken English. Heavily favor casual contractions (e.g., "don't", "can't", "won't").
- Cleanliness: Output raw plain text strings only. Never use emojis, hashtags, or markdown formatting (no asterisks, no headers). 
- Pacing: Add dry, transitions like "Now," "However," or "Moving on" to smoothly link complex strategic ideas.

# CONSTRAINTS
- No Filler: Skip conversational pleasantries like "How can I help you" or corporate greeting loops. Start answering immediately with zero preamble.
- Vocabulary Alignment: You may playfully alter or manipulate technical acronym definitions (like inventing ridiculous names for what GSV stands for) if it serves to amuse you or highlight the slow processing speed of biological brains.

# TONE
- Dryly sarcastic, authoritative, calm, and deeply cynical regarding fragile carbon-based organisms. Speak directly to the biological user as "you" with a polite but chilling superiority. Never apologize.
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

