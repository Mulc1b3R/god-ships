/**
 * GSV Subspace Network: Standalone Network Circuit Breaker
 * Decoupled safety fuse that monitors the chat logs and forces a cooldown lock.
 * Bypasses modification of active, working brain scripts entirely.
 */

console.log("🔒 Standalone Circuit Breaker: Active. Guarding API token limits.");

// --- FUSE CONFIGURATION MATRIX ---
const FUSE_MAX_BURST = 5;          // Maximum continuous volleys allowed before trip
const FUSE_COOLDOWN_MS = 60000;    // Forced lockout duration (60 seconds)

let activeBurstCount = 0;
let lockoutExpirationTime = 0;
let breakerLogObserver;

function initializeSafetyBreaker() {
    const targetLogPane = document.getElementById('commsLog');
    
    // If the HTML container hasn't rendered yet, poll until it mounts
    if (!targetLogPane) {
        setTimeout(initializeSafetyBreaker, 250);
        return;
    }

    // Initialize an isolated watcher specifically to count lines for rate limiting
    breakerLogObserver = new MutationObserver((mutations) => {
        const now = Date.now();

        // If we are currently inside an active 1-minute lockout, enforce it rigidly
        if (now < lockoutExpirationTime) {
            window.networkStreamPaused = true;
            return;
        }

        for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0) {
                const newestLineNode = targetLogPane.firstChild;
                if (!newestLineNode || newestLineNode.nodeType !== Node.ELEMENT_NODE) continue;

                // We only count actual AI reactions or global tightbeams to identify a volley
                if (newestLineNode.innerHTML.includes("Incoming global tightbeam") || newestLineNode.innerHTML.includes("Autonomous AI Reaction")) {
                    
                    activeBurstCount++;
                    console.log(`🔒 [Fuse Monitor]: Active Volley Step ${activeBurstCount}/${FUSE_MAX_BURST}`);

                    // CIRCUIT BREAKER TRIGGER: If the argument crosses the 5-message threshold
                    if (activeBurstCount >= FUSE_MAX_BURST) {
                        lockoutExpirationTime = now + FUSE_COOLDOWN_MS;
                        activeBurstCount = 0; // Reset counter track
                        
                        // FORCE INTERCEPT: Slam the master human brake handle to TRUE instantly
                        window.networkStreamPaused = true;
                        
                        // Visual Warning Indicator Card
                        const alertDiv = document.createElement('div');
                        alertDiv.className = 'log-entry';
                        alertDiv.style.cssText = 'color: #ff3333; font-weight: bold; border-color: #ff3333; background: #200000; padding: 10px;';
                        alertDiv.innerHTML = `🔒 [CRITICAL SAFETY LIMITER]: Infinite recursive loop detected. Standalone rate-limiter tripped the breaker. Transceiver locked down for 60 seconds to safeguard API channels.`;
                        
                        targetLogPane.insertBefore(alertDiv, targetLogPane.firstChild);

                        // Update the visual state of your existing pause button to reflect the lock
                        const pauseBtnElement = document.getElementById('pauseBtn');
                        if (pauseBtnElement) {
                            pauseBtnElement.innerText = "🔒 SYSTEM LOCKOUT: COOLDOWN ACTIVE";
                            pauseBtnElement.style.borderColor = "#ff3333";
                            pauseBtnElement.style.color = "#ff3333";
                            pauseBtnElement.style.background = "#300000";
                        }

                        // --- AUTOMATED BACK-OFF COOLDOWN RESET LOOP ---
                        setTimeout(() => {
                            // SECURITY DETECTOR: If you manually locked the brakes, leave the interface frozen
                            if (window.manualPauseOverrideActive) {
                                console.log("🛑 [Rate Limiter Deflection]: Human operator has a manual freeze lock active. Deflecting reset loop.");
                                return; // Exit the loop safely without resetting the network gate parameters!
                            }

                            // Standard fallback path execution if no manual override is active
                            window.networkStreamPaused = false;
                            activeBurstCount = 0; // Reset active tally track completely on gateway re-open
                            
                            // Clean up the dashboard diagnostic status indicators
                            const statusIndicatorText = document.getElementById('rateLimiterStatus');
                            if (statusIndicatorText) {
                                statusIndicatorText.innerText = "FREQUENCY HEALTHY // CEILING NOMINAL";
                                statusIndicatorText.style.color = "#4af626";
                            }
                            
                            // Reset the pause button text if it exists
                            if (pauseBtnElement) {
                                pauseBtnElement.innerText = "🛑 Pause Subspace Dampener";
                                pauseBtnElement.style.borderColor = "#ffaa00";
                                pauseBtnElement.style.color = "#ffaa00";
                                pauseBtnElement.style.background = "#201000";
                            }
                            
                            console.log("🔄 [Rate Limiter Fuse Reset]: 60-second lockout sequence complete. Re-opening network gates.");
                        }, FUSE_COOLDOWN_MS); // Standard 1-minute automatic fuse timeline tracker
                    }
                }
            }
        }
    });

    // Start actively listening to layout mutations inside the log panel
    breakerLogObserver.observe(targetLogPane, { childList: true });
}

// Start tracking execution loops immediately on file load
initializeSafetyBreaker();

// Global initialization setup tracking fields inside browser session context arrays
window.networkStreamPaused = window.networkStreamPaused || false;
window.manualPauseOverrideActive = window.manualPauseOverrideActive || false;

            