/**
 * GSV Subspace Network: Sensory Tightbeam Module (Standalone)
 * Extends the existing fleet network to handle binary visual transfers via Base64.
 */

console.log("Sensory Transmission Module: Activated. Calibrating drag-and-drop grids.");

// Re-hook into the shared fleet channel (reuses the same frequency)
const sensorChannel = new BroadcastChannel('gsv-subspace-net');
const senderIdentity = document.title;

const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');

// --- 1. DRAG & DROP INTERFACES ---
if (dropZone && fileInput) {
    // Prevent browser from opening the image file directly
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => e.preventDefault(), false);
    });

    // Highlight the drop zone when dragging over it
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => dropZone.style.borderColor = '#00ffcc', false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => dropZone.style.borderColor = '#4af626', false);
    });

    // Handle dropped files
    dropZone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files && files.length > 0) processAndSendImage(files[0]);
    });

    // Allow clicking the box to choose a file normally
    dropZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) processAndSendImage(e.target.files[0]);
    });
}

// --- 2. BASE64 BINARY CONVERSION & TRANSMIT ---
function processAndSendImage(file) {
    // Security check: Cap files to 3MB to prevent overloading local tab memory limit
    const maxSizeInBytes = 3 * 1024 * 1024; 
    if (file.size > maxSizeInBytes) {
        alert("CRITICAL WARNING: Sensory payload exceeds 3MB threshold. Mind grid transmission aborted.");
        return;
    }

    if (!file.type.startsWith('image/')) {
        alert("ERROR: Subspace transmitter rejected non-visual asset. Images only.");
        return;
    }

    const reader = new FileReader();
    
    // Read the file. This creates a data string starting with "data:image/png;base64,..."
    reader.readAsDataURL(file);
    
    reader.onloadend = () => {
        const base64DataUrl = reader.result;

        // Broadcast the sensory packet across the fleet network
        sensorChannel.postMessage({
            sender: senderIdentity,
            payload: base64DataUrl,
            isImage: true, // Flag so the receivers know it's a graphic asset
            timestamp: new Date().toLocaleTimeString()
        });

        console.log(`[Sensory Beam Sent] Visual telemetry compressed and tightly beamed.`);
    };
}

// --- 3. DYNAMIC INCOMING GRAPHICS LOGGER ---
sensorChannel.addEventListener('message', (event) => {
    const { sender, payload, isImage, timestamp } = event.data;
    
    // Ignore our own data beam back
    if (sender === senderIdentity) return;
    
    // If it's a regular text message, let app/app2 handle it
    if (!isImage) return;

    const logContainer = document.getElementById('commsLog');
    if (!logContainer) return;

    // Create a sci-fi image node card
    const imageLogHtml = `
        <div class="log-entry" style="border-color: #00ffcc;">
            <div><strong>[${timestamp}] Incoming Sensory Tightbeam from:</strong> ${sender}</div>
            <div class="base64" style="color: #00ffcc;">> Processing compressed visual payload array...</div>
            <div style="margin-top: 10px;">
                <img src="${payload}" alt="Sensory Data" style="max-width: 100%; max-height: 200px; border: 1px solid #00ffcc; border-radius: 4px;">
            </div>
        </div>
    `;

    if (logContainer.innerHTML.includes("Awaiting subspace ping...")) {
        logContainer.innerHTML = '';
    }

    // Insert visual card at the top of the logs
    logContainer.innerHTML = imageLogHtml + logContainer.innerHTML;
});
