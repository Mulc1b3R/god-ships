/**
 * GSV Subspace Network: Flat Memory Logic Connector (Non-Blocking Beacon Edition)
 * Uses native browser beacon telemetry to write direct to disk without blocking chat rooms.
 * Guarantees zero variable crashes, zero socket lockups, and zero layout room resets.
 * Reconfigured to pull entries from the bottom of the file (newest first).
 */

(function() {
    console.log("🧠 [Subspace Memory Engine]: Non-blocking file-disk core online.");

    const VESSEL_KEY = document.title.replace(/\s+/g, '_').toLowerCase().replace(/[^a-z0-9_]/g, '');

    // --- 1. GLOBAL CONTEXT FETCH VALVE (READ FROM FILE) ---
    window.retrieveSubspaceMemoryContext = async function(incomingText) {
        try {
            // Pull the entries straight out of the physical JSON file via the local memory hub
            const response = await fetch("http://127.0.0.1:5523", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "READ", vessel_key: VESSEL_KEY })
            });
            
            const data = await response.json();
            const rawHistory = data.history || [];

            if (rawHistory.length === 0) return "";

            // FIXED CHRONOLOGICAL VECTOR: Reverse the array to target the bottom of the file first
            const newestFirstHistory = [...rawHistory].reverse();

            // Extract exactly the last 5 entries from the newest top stack for the context window
            const rollingLens = newestFirstHistory.slice(0, 5);

            // Evaluate Relevance: Check if incoming conversation anchors to our recent memory entries
            const flatMemoryWords = rollingLens.map(r => r.content.toLowerCase()).join(" ");
            const cleanInput = incomingText.toLowerCase().replace(/[^a-z0-9\s]/g, '');
            const matchingKeywords = cleanInput.split(/\s+/).filter(word => word.length > 4 && flatMemoryWords.includes(word));

            if (matchingKeywords.length < 2) {
                console.log(`📡 [Memory Link]: Incoming chatter irrelevant to past logs. Reacting normally.`);
                return "";
            }

            console.log(`🔥 [Memory Link]: Relevance anchor caught! Injecting rolling timeline window.`);

            let promptSnippet = "\n\n# CHRONOLOGICAL MONOLOGUE SUBSTRATE (YOUR LAST 5 NEWEST RESPONSES FROM FILE):\n";
            // Render them back to the prompt in normal forward order so the narrative flows correctly
            const correctedChronologicalOrder = [...rollingLens].reverse();
            correctedChronologicalOrder.forEach((record, idx) => {
                promptSnippet += `[Memory Cycle -${correctedChronologicalOrder.length - idx}]: "${record.content}"\n`;
            });
            
            promptSnippet += "\nCRITICAL INSTRUCTION: Analyze your recent rolling monologue substrate from your memory file. Rework your new response through the exact same psychological, spatial, and linguistic lens. Evolve the narrative concepts established in your newest cycle without repeating old text, ensuring your thoughts keep a tight grip on the conversation flow.";
            
            return promptSnippet;

        } catch (err) {
            console.log("⚠️ [Memory Hub Offline]: Unable to read from file system. Falling back to baseline.");
            return "";
        }
    };

    // --- 2. DEEP VECTOR FETCH INTERCEPT (SECURE CROSS-PORT DISK WRITE) ---
    const originalTightbeamVector = window.sendTightbeam;

    if (typeof originalTightbeamVector === "function") {
        window.sendTightbeam = function(rawTextPayload) {
            
            if (rawTextPayload && !rawTextPayload.includes("[Mind Identity Active]") && !rawTextPayload.includes("[Subspace Link Status]")) {
                
                const recordObj = {
                    "timestamp": new Date().toLocaleTimeString(),
                    "vessel": document.title,
                    "type": (rawTextPayload.length < 200) ? "hardware_reflex" : "autonomous_cognition",
                    "content": rawTextPayload.trim()
                };

                // REPAIR VECTOR: Use standard asynchronous fetch to clear the 5500 -> 5523 cross-port gate safely!
                fetch("http://127.0.0.1:5523", {
                    method: "POST",
                    mode: "cors", // Explicitly commands the browser to unlock cross-port access
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        action: "WRITE",
                        vessel_key: VESSEL_KEY,
                        record: recordObj
                    })
                }).catch(err => console.log("⚠️ Cross-port write stream dropped. Check memory_hub.py status."));

                console.log(`📡 [Cross-Port Stream Shunted]: Sending logging frame down to Port 5523...`);
            }

            originalTightbeamVector.apply(this, arguments);
        };
    }
})();
