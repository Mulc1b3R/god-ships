/**
 * GSV Subspace Network: Bare-Metal JSON Memory Bank Core
 * Compiles real-time structured JSON objects natively in browser RAM.
 * Absolute zero network ports or security picker clearance required.
 */

(function() {
    console.log("Diverter Matrix: Active. Local session tracking running.");

    // Initialize the in-memory array database box
    window.subspaceMemoryBank = window.subspaceMemoryBank || [];

    // --- 1. VISUAL READOUT & ACCUMULATION LEVER MATRIX ---
    function mountMemoryDashboardPanel() {
        const controlPanel = document.querySelector('.console');
        if (!controlPanel) {
            setTimeout(mountMemoryDashboardPanel, 100);
            return;
        }

        // Create a dedicated indicator card layout frame
        const memoryIndicatorDiv = document.createElement('div');
        memoryIndicatorDiv.id = "memoryIndicatorBox";
        memoryIndicatorDiv.style.cssText = 'border-color: #00ffcc; color: #00ffcc; background: #00110a; padding: 10px; border-style: double; border-width: 3px; border-left: 5px solid #00ffcc; margin-top: 10px;';
        memoryIndicatorDiv.innerHTML = `
            <div><strong>🧠 [MEMORY MATRIX ACTIVE]:</strong> SYSTEM_SUBSTRATE_PERSISTENCE</div>
            <div style="margin-top: 5px; font-family: monospace; font-size: 0.9em; color: #76ff57;">
                &gt; Real-time in-RAM database array initialized.<br>
                &gt; Tracked dialogue ledger entries: <span id="memoryBankCount" style="font-weight: bold; color: #00ffcc;">0</span> cycles logged.
            </div>
            <button id="downloadBankBtn" style="border-color: #ffaa00; color: #ffaa00; background: #201000; font-weight: bold; margin-top: 8px; width: 100%; font-size: 0.9em; letter-spacing: 0.5px;">
                📥 FLUSH MEMORY BANK TO DISK (memory_bank.json)
            </button>
        `;

        controlPanel.appendChild(memoryIndicatorDiv);

        // Wire the atomic download passthrough mechanism to the action trigger button
        document.getElementById('downloadBankBtn').onclick = function() {
            if (window.subspaceMemoryBank.length === 0) {
                alert("🔒 Memory bank array is currently empty. Run some chat volleys first!");
                return;
            }

            // Convert the array storage logs into a clean, beautifully formatted JSON text layout string
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(window.subspaceMemoryBank, null, 2));
            
            // Construct a temporary hidden link element to act as our filesystem lever
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", "memory_bank.json");
            
            // Trigger an automatic click to flush the file straight past the browser's security walls!
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            
            console.log("💾 [Disk Write Complete]: Memory bank array flushed safely to file.");
        };
    }

    mountMemoryDashboardPanel();

    // --- 2. THE CHRONOLOGICAL TRANSMISSION INTERCEPT ---
    const originalTightbeamVector = window.sendTightbeam;

    if (typeof originalTightbeamVector === "function") {
        window.sendTightbeam = function(rawTextPayload) {
            
            if (rawTextPayload && !rawTextPayload.includes("[Mind Identity Active]") && !rawTextPayload.includes("[Subspace Link Status]")) {
                
                // Construct the strict schema text block format
                const databaseRecordObj = {
                    "timestamp": new Date().toLocaleTimeString(),
                    "vessel": document.title,
                    "type": (rawTextPayload.length < 200) ? "hardware_reflex" : "autonomous_cognition",
                    "content": rawTextPayload.trim()
                };

                // Save the data record directly inside our running browser memory buffer array
                window.subspaceMemoryBank.push(databaseRecordObj);

                // Update the visual dashboard tracking counter text number live
                const counterElement = document.getElementById('memoryBankCount');
                if (counterElement) {
                    counterElement.innerText = window.subspaceMemoryBank.length;
                }

                // Draw the amber object block card visually onto your log pane stream screen
                const logContainer = document.getElementById('commsLog');
                if (logContainer) {
                    const rawJsonString = JSON.stringify(databaseRecordObj, null, 2);
                    const jsonDisplayCard = document.createElement('div');
                    jsonDisplayCard.className = 'log-entry';
                    jsonDisplayCard.style.cssText = 'background: #000; border: 1px dashed #ffaa00; padding: 12px; margin: 10px 0; font-family: monospace; font-size: 0.9em; white-space: pre-wrap; color: #ffaa00;';
                    jsonDisplayCard.innerText = `💾 [REAL-TIME MEMORY OBJECT LOGGED]:\n${rawJsonString}`;
                    logContainer.insertBefore(jsonDisplayCard, logContainer.firstChild);
                }
            }

            originalTightbeamVector.apply(this, arguments);
        };
    }
})();
