/**
 * GSV Subspace Network: Standalone Manifest Exporter Module (Bulletproof Injection)
 * Dynamically injects an export lever to dump clean text logs to your local drive.
 * Operates completely separate from working network files with zero structural risk.
 */

console.log("💾 Standalone Log Downloader: Active. Calibrating export sub-routines.");

function initializeLogDownloaderMatrix() {
    // Find all console panels on the screen layout
    const allConsoles = document.querySelectorAll('.console');
    let targetAvatarConsole = null;

    // BULLETPROOF SEARCH: Scan all console panels to find the one holding the Cognitive Interface heading
    for (const consolePanel of allConsoles) {
        if (consolePanel.innerHTML.includes("[ Direct Cognitive Avatar Interface ]")) {
            targetAvatarConsole = consolePanel;
            break;
        }
    }

    const logContainer = document.getElementById('commsLog');

    // If the layout elements haven't fully drawn yet, retry in 250ms
    if (!targetAvatarConsole || !logContainer) {
        setTimeout(initializeLogDownloaderMatrix, 250);
        return;
    }

    // Guard Rail: Prevent injecting multiple buttons if the file reloads
    if (document.getElementById('exportManifestBtn')) return;

    // Create the sleek, amber tactical button node matching your dashboard theme
    const exportBtn = document.createElement('button');
    exportBtn.id = 'exportManifestBtn';
    exportBtn.style.cssText = 'border-color: #ffaa00; color: #ffaa00; background: #201000; margin-top: 10px; width: 100%; font-family: monospace; font-size: 0.95em; cursor: pointer; padding: 5px;';
    exportBtn.innerText = '💾 Export Subspace Manifest (.txt)';
    
    // Bind the compilation downloader logic directly to the click event handler
    exportBtn.onclick = compileAndDownloadSubspaceLog;

    // Smoothly append the button right at the bottom of the targeted panel
    targetAvatarConsole.appendChild(exportBtn);
    console.log("💾 Exporter control lever successfully injected into layout panel via structural heading match.");
}

function compileAndDownloadSubspaceLog() {
    const logContainer = document.getElementById('commsLog');
    if (!logContainer) return;

    // Target all active network message log boxes currently rendered on screen
    const logEntries = logContainer.querySelectorAll('.log-entry');
    if (logEntries.length === 0 || logContainer.innerText.includes("Awaiting subspace ping...")) {
        alert("LOGISTICS INTERCEPTION: Subspace manifest registers empty. Record some fleet chatter first.");
        return;
    }

    let compiledManifestText = `========================================================================\n`;
    compiledManifestText += `🚀 GSV SUBSPACE FREQUENCY LOG MANIFEST\n`;
    compiledManifestText += `Vessel Node Source: ${document.title}\n`;
    compiledManifestText += `System Telemetry Extraction Date: ${new Date().toLocaleDateString()} | ${new Date().toLocaleTimeString()}\n`;
    compiledManifestText += `========================================================================\n\n`;

    // Process entries in reverse chronological order (so the oldest messages sit at the top of the exported text file)
    for (let i = logEntries.length - 1; i >= 0; i--) {
        const entry = logEntries[i];
        
        // Clone the HTML node so we can safely strip strings without breaking the user's active screen layout
        const clone = entry.cloneNode(true);

        // CLEANING PASS: Strip out the giant raw Base64 data strings so the text file is clean and pristine
        const base64Block = clone.querySelector('.base64');
        if (base64Block) clone.removeChild(base64Block);

        // Extract clean text strings and eliminate annoying excessive spacing quirks
        let cleanLine = clone.innerText.replace(/\n+/g, '\n').trim();
        
        // Standardize the line prefixes for clear presentation formatting
        cleanLine = cleanLine.replace(/^>\s*/, '  > ');
        
        compiledManifestText += `${cleanLine}\n`;
        compiledManifestText += `------------------------------------------------------------------------\n`;
    }

    compiledManifestText += `\n[END OF FILE - SECURE INFRASTRUCTURE ARCHIVE COMPLETE]\n`;

    // Create a dynamic raw memory blob containing our compiled text array data
    const blob = new Blob([compiledManifestText], { type: 'text/plain;charset=utf-8;' });
    
    // Auto-generate a clean, structured file name mapping the current date stamps dynamically
    const dateStamp = new Date().toISOString().slice(0, 10);
    const formattedShipName = document.title.toLowerCase().replace(/[^a-z0-9]/g, '_');
    const targetFileName = `subspace_manifest_${formattedShipName}_${dateStamp}.txt`;

    // Force an invisible browser downloading anchor event execution loop
    const link = document.createElement("a");
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", targetFileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log(`💾 Manifest downloaded successfully as: ${targetFileName}`);
    }
}

// Initialize file execution matrix immediately on file load
initializeLogDownloaderMatrix();
