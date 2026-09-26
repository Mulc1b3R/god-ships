/**
 * GSV Subspace Network: Live Telemetry Module (Standalone)
 * Captures real-world browser performance data and simulates time-dilated spatial vectors.
 */

console.log("Telemetry Module: Initialized. Syncing realspace navigational arrays.");

// Hook into the shared communication channel to monitor throughput metrics
const telemetryChannel = new BroadcastChannel('gsv-subspace-net');
const localShipTitle = document.title;

// Telemetry State Variables
let currentX = 0, currentY = 0, currentZ = 0;
let shipSpeedFactor = 0.01; // Default incremental speed modifier
let totalBytesProcessed = 0;
let bytesPerSecond = 0;

// --- 1. SPATIAL VECTOR NAVIGATOR (REAL-TIME ENGINE) ---
function initializeSpatialTracking() {
    // Wait briefly for app.js/app2.js to load the JSON file into global memory
    setTimeout(() => {
        if (window.shipPersonality && window.shipPersonality.spatial_coordinates) {
            const coords = window.shipPersonality.spatial_coordinates.grid_relative;
            if (Array.isArray(coords) && coords.length === 3) {
                currentX = parseFloat(coords[0]) || 0;
                currentY = parseFloat(coords[1]) || 0;
                currentZ = parseFloat(coords[2]) || 0;
            }
            
            // Extract numerical velocity (e.g., "0.33c" -> 0.33)
            const speedString = window.shipPersonality.spatial_coordinates.velocity || "0.01c";
            shipSpeedFactor = parseFloat(speedString) || 0.01;
            
            const speedDisplay = document.getElementById('telemetrySpeed');
            if (speedDisplay) speedDisplay.innerText = speedString;
        }
        
        // Start the continuous spatial movement loop (runs every 1000ms)
        setInterval(updateSpatialCoordinates, 1000);
        // Start the memory bandwidth calculation loop (runs every 1000ms)
        setInterval(calculateBandwidth, 1000);
    }, 1000);
}

function updateSpatialCoordinates() {
    // Smoothly shift coordinates over time based on the ship's velocity rating
    // Adding slight pseudo-random variation to mimic drifting across realspace
    currentX += (shipSpeedFactor * (10 + Math.random() * 2));
    currentY += (shipSpeedFactor * (-5 + Math.random() * 1));
    currentZ += (shipSpeedFactor * (2 + Math.random() * 0.5));

    // Inject the real-time calculated coordinates into the HTML view
    if (document.getElementById('vectorX')) {
        document.getElementById('vectorX').innerText = currentX.toFixed(2);
        document.getElementById('vectorY').innerText = currentY.toFixed(2);
        document.getElementById('vectorZ').innerText = currentZ.toFixed(2);
    }
}

// --- 2. PERFORMANCE THROUGHPUT & LATENCY METRICS ---
function calculateBandwidth() {
    // Convert accumulated raw data bytes into Kilobytes per second
    bytesPerSecond = totalBytesProcessed / 1024;
    totalBytesProcessed = 0; // Reset counter for the next second slot

    const throughputDisplay = document.getElementById('telemetryThroughput');
    if (throughputDisplay) {
        throughputDisplay.innerText = bytesPerSecond.toFixed(2);
    }
}

// Listen to the network channel to measure data weights and decoding latency
telemetryChannel.addEventListener('message', (event) => {
    const { sender, payload } = event.data;
    if (sender === localShipTitle) return; // Ignore local transmissions

    // Performance tracking checkpoint A: Start precision timer
    const startTime = performance.now();

    // track incoming payload size for throughput calculations
    if (payload) {
        totalBytesProcessed += payload.length;
    }

    // Emulate the raw Base64 decoding loop locally to test your computer's actual processing lag
    try {
        const testDecode = atob(payload);
    } catch (e) {
        // Silent catch: just measuring execution duration
    }

    // Performance tracking checkpoint B: End precision timer
    const endTime = performance.now();
    const exactLatencyMs = endTime - startTime;

    // Inject your physical CPU/browser processing speed onto the screen panel
    const latencyDisplay = document.getElementById('telemetryLatency');
    if (latencyDisplay) {
        // Display processing speed down to 4 decimal places for high precision
        latencyDisplay.innerText = exactLatencyMs.toFixed(4);
    }
});

// Fire up the data-loop trackers on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSpatialTracking);
} else {
    initializeSpatialTracking();
}
