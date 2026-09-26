/**
 * GSV Subspace Network: WebRTC Serverless Peer-to-Peer Core
 * Bypasses central servers to create a direct browser-to-browser data pipe.
 */

// 1. Configure the Public STUN Handshake Utility (Provided by Google for free)
const rtcConfig = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
};

let peerConnection = new RTCPeerConnection(rtcConfig);
let tightbeamDataChannel = null;

// --- A. INITIALIZING AN OUTBOUND CONNECTION (PAGE A) ---
async function createSignalOffer() {
    // Create the secure data channel pipe inside the connection object
    tightbeamDataChannel = peerConnection.createDataChannel("gsv-subspace-link");
    setupDataChannelListeners(tightbeamDataChannel);

    // Generate the network Offer token
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    // Handle network routing options gather step
    peerConnection.onicecandidate = (event) => {
        if (!event.candidate) {
            // Once all local network routing options are gathered, display the final token to the user
            document.getElementById('sdpTokenBox').value = btoa(JSON.stringify(peerConnection.localDescription));
            document.getElementById('connectionStatus').innerText = "> Network Status: OFFER GENERATED. COPY & SEND TO PEER.";
        }
    };
}

// --- B. ACCEPTING AN INCOMING TOKEN (PAGE B OR RETURNING TO PAGE A) ---
async function acceptSignalResponse() {
    const tokenBox = document.getElementById('sdpTokenBox');
    const rawToken = tokenBox.value.trim();
    if (!rawToken) return alert("Error: Token box is empty.");

    try {
        // 1. Decode the token package back into standard JSON network data
        const signalData = JSON.parse(atob(rawToken));

        // 2. CHECK CONNECTION STATE BEFORE APPLYING
        if (signalData.type === "offer") {
            // --- WE ARE TAB 2: RECEIVING AN INCOMING OFFER ---
            if (peerConnection.signalingState !== "stable") {
                console.log("Connection already processing an offer. Resetting connection state.");
                peerConnection = new RTCPeerConnection(rtcConfig); // Reset to clear stale states
            }

            await peerConnection.setRemoteDescription(new RTCSessionDescription(signalData));
            
            // Listen for the incoming data channel to open from Tab 1
            peerConnection.ondatachannel = (event) => {
                tightbeamDataChannel = event.channel;
                setupDataChannelListeners(tightbeamDataChannel);
            };

            // Create the Answer token back to Tab 1
            const answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(answer);

            peerConnection.onicecandidate = (event) => {
                if (!event.candidate) {
                    // Display Tab 2's Answer token so you can send it back to Tab 1
                    tokenBox.value = btoa(JSON.stringify(peerConnection.localDescription));
                    document.getElementById('connectionStatus').innerText = "> Network Status: ANSWER GENERATED. COPY BACK TO SOURCE.";
                }
            };
        } 
        else if (signalData.type === "answer") {
            // --- WE ARE TAB 1: RECEIVING THE FINAL ANSWER FROM TAB 2 ---
            if (peerConnection.signalingState === "have-local-offer") {
                await peerConnection.setRemoteDescription(new RTCSessionDescription(signalData));
                tokenBox.value = ""; // Clear box on success
                document.getElementById('connectionStatus').innerText = "> Network Status: PROCESSING ANSWER...";
            } else {
                console.warn(`Ignored answer because connection state is: ${peerConnection.signalingState}`);
                document.getElementById('connectionStatus').innerText = "> Error: State is already stable. Restart handshake.";
            }
        }
    } catch (e) {
        console.error("Handshake parsing error:", e);
        alert("CRITICAL LOGISTICS ERROR: Failed to decode token payload.");
    }
}

// --- C. MANAGING THE LIVE DATA CHANNEL PIPE ---
function setupDataChannelListeners(channel) {
    channel.onopen = () => {
        document.getElementById('connectionStatus').innerText = "> Network Status: SECURE TIGHTBEAM LINKED (DIRECT PEER ONLINE)";
        document.getElementById('connectionStatus').style.color = "#4af626";
    };

    channel.onclose = () => {
        document.getElementById('connectionStatus').innerText = "> Network Status: DISCONNECTED (SIGNAL LOST)";
        document.getElementById('connectionStatus').style.color = "#ff3333";
    };

    // THIS REPLACES BROWSER BROADCAST CHANNEL: Captures data moving across the direct wire
    channel.onmessage = (event) => {
        const messageData = JSON.parse(event.data);
        
        // Pass the raw data payload directly down to your existing logger and AI response matrix!
        handleIncomingSubspacePacket(messageData); 
    };
}

// --- D. OVERHAULING THE TRANSMITTER ---
function sendWebRTCTightbeam(payloadObject) {
    if (tightbeamDataChannel && tightbeamDataChannel.readyState === "open") {
        // Shoot the packet directly across the direct peer wire as a string
        tightbeamDataChannel.send(JSON.stringify(payloadObject));
    }
}
