/**
 * GSV Subspace Network: Sensory Tightbeam Module (WebSocket Edition)
 * Intercepts dropped image telemetry arrays and downsamples them to fit the 256KB Cloud threshold.
 */

console.log("Sensory Transmission Module: Global Cloud Grid Engaged.");

const senderIdentity = document.title;
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
let globalSensorChannel;

// --- 1. SECURE INTERNET FREQUENCY CHANNEL CHECK ---
function initializeGlobalSensorChannel() {
    if (window.supabaseClient) {
        // Secure a direct hook onto the active live web socket channel running in app4.js
        globalSensorChannel = window.supabaseClient.channel('subspace-comms');
        
        // Attach the incoming internet graphic matrix listener loop
        attachGlobalIncomingOpticsListener();
    } else {
        // If app4.js is still booting up connection strings, poll every 100ms
        setTimeout(initializeGlobalSensorChannel, 100);
    }
}
initializeGlobalSensorChannel();

// --- 2. DRAG & DROP EVENT ROUTERS ---
if (dropZone && fileInput) {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => e.preventDefault(), false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => dropZone.style.borderColor = '#00ffcc', false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => dropZone.style.borderColor = '#4af626', false);
    });

    dropZone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files && files.length > 0) processAndSendImageGlobal(files[0]);
    });

    dropZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) processAndSendImageGlobal(e.target.files[0]);
    });
}

// --- 3. HARDWARE RESIZER, COMPRESSOR, AND GLOBAL TRANSMITTER ---
function processAndSendImageGlobal(file) {
    if (!file.type.startsWith('image/')) {
        alert("ERROR: Subspace optics array rejected non-visual asset.");
        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        
        img.onload = () => {
            // TARGET PARAMS: Max tactical telemetry resolutions
            let targetWidth = img.width;
            let targetHeight = img.height;
            const maxDimension = 800; // Cap width/height to 800px to squeeze data package size down

            if (targetWidth > maxDimension || targetHeight > maxDimension) {
                if (targetWidth > targetHeight) {
                    targetHeight = Math.round((targetHeight * maxDimension) / targetWidth);
                    targetWidth = maxDimension;
                } else {
                    targetWidth = Math.round((targetWidth * maxDimension) / targetHeight);
                    targetHeight = maxDimension;
                }
            }

            // Fire up a hidden HTML5 canvas engine to execute the image downscale operation
            const canvas = document.createElement('canvas');
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

            // Quality compress: Flatten to image/jpeg at 60% quality output compression
            // This crushes a massive 3MB camera file down into a sleek 30KB - 80KB packet string
            const compressedBase64 = canvas.toDataURL('image/jpeg', 0.60);

            // Double check data packet size before launching into the WebSocket stream
            if (compressedBase64.length > 256 * 1024) {
                alert("LOGISTICS INTERCEPTION: Image data payload still exceeds 256KB cloud threshold. Compression failed.");
                return;
            }

            if (globalSensorChannel) {
                globalSensorChannel.send({
                    type: 'broadcast',
                    event: 'visual-sensory-beam',
                    payload: {
                        sender: senderIdentity,
                        payload: compressedBase64,
                        timestamp: new Date().toLocaleTimeString()
                    }
                });
                
                // Print a visual output card locally on your screen feed to log your launch success
                logLocalImageCard(senderIdentity, compressedBase64, new Date().toLocaleTimeString(), true);
            }
        };
    };
}

// --- 4. INTERNET OPTICS EVENT LISTENER AND CONTAINER INJECTOR ---
function attachGlobalIncomingOpticsListener() {
    if (!globalSensorChannel) return;

    globalSensorChannel.on('broadcast', { event: 'visual-sensory-beam' }, (message) => {
        if (window.networkStreamPaused) return;

        const { sender, payload, timestamp } = message.payload;
        if (sender === senderIdentity) return; // Prevent loop echoes

        logLocalImageCard(sender, payload, timestamp, false);
    });
}

// Helper function to render a beautiful sci-fi image panel card onto the logs box grid
function logLocalImageCard(sender, imageSrc, timestamp, isOutbound) {
    const logContainer = document.getElementById('commsLog');
    if (!logContainer) return;

    const accentColor = isOutbound ? "#4af626" : "#00ffcc";
    const statusText = isOutbound ? "Beamed Outbound Sensory Data to Matrix..." : "Incoming Sensory Tightbeam from:";

    const visualCardHtml = `
        <div class="log-entry" style="border-color: ${accentColor};">
            <div><strong>[${timestamp}] ${statusText}</strong> ${sender}</div>
            <div class="base64" style="color: ${accentColor}; font-size:0.8em;">> Rendering compressed visual payload stream...</div>
            <div style="margin-top: 10px;">
                <img src="${imageSrc}" alt="Sensory Data Panel" style="max-width: 100%; max-height: 200px; border: 1px solid ${accentColor}; border-radius: 4px;">
            </div>
        </div>
    `;

    if (logContainer.innerHTML.includes("Awaiting subspace ping...")) {
        logContainer.innerHTML = '';
    }
    logContainer.innerHTML = visualCardHtml + logContainer.innerHTML;
}
