import http.server
import json
import os
import re

PORT = 5523

class MemoryHubHandler(http.server.BaseHTTPRequestHandler):
    def send_cors_headers(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def do_OPTIONS(self):
        """Safely unlocks the browser's security pre-flight checks"""
        self.send_cors_headers()
        self.send_header("Content-Length", "0")
        self.end_headers()

    def do_POST(self):
        """Processes real-time file reads and automated streaming disk writes"""
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        payload = json.loads(post_data.decode('utf-8'))
        
        action = payload.get("action")
        vessel_key = payload.get("vessel_key")
        record_obj = payload.get("record")
        
        # CHAMBER 1: RE-ALIGNED EXTRACTION MATRIX FOR BEACON SHUNTS
        if not vessel_key and record_obj:
            raw_vessel = record_obj.get("vessel", "")
            raw_vessel = raw_vessel.replace("GSV ", "").strip().lower()
            raw_vessel = re.sub(r'\s+', '_', raw_vessel)
            vessel_key = re.sub(r'[^a-z0-9_]', '', raw_vessel)
            
        if not vessel_key:
            vessel_key = "unassigned_chatter"
            
        file_name = f"memory_bank_{vessel_key}.json"

        # Initialize the target file on your hard drive if missing
        if not os.path.exists(file_name):
            with open(file_name, "w", encoding="utf-8") as f:
                json.dump([], f)

        # ACTION 1: READ THE LAST 5 ENTRIES FOR OPENAI CONTEXT FLUIDITY
        if action == "READ":
            try:
                with open(file_name, "r", encoding="utf-8") as f:
                    history = json.load(f)
            except Exception:
                history = []
            
            rolling_lens = history[-5:]
            
            self.send_cors_headers()
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"history": rolling_lens}).encode('utf-8'))
            return

        # ACTION 2: LIVE BROADCAST DISK STREAMER (Bypasses manual copy-paste completely!)
        elif action == "WRITE" or not action:
            if not record_obj:
                record_obj = payload
                
            if not record_obj or "content" not in record_obj:
                self.send_cors_headers()
                self.send_header("Content-Length", "0")
                self.end_headers()
                return

            try:
                with open(file_name, "r", encoding="utf-8") as f:
                    history = json.load(f)
            except Exception:
                history = []

            # SYMMETRICAL DATA RE-ALIGNMENT: Includes the required 'vessel' key!
            clean_record = {
                "timestamp": record_obj.get("timestamp", "00:00:00"),
                "vessel": record_obj.get("vessel", "Unknown Vessel"),
                "type": record_obj.get("type", "autonomous_cognition"),
                "content": record_obj.get("content", "").strip()
            }
            
            history.append(clean_record)
            
            with open(file_name, "w", encoding="utf-8") as f:
                json.dump(history, f, indent=2, ensure_ascii=False)
                
            self.send_cors_headers()
            self.send_header("Content-Length", "0")
            self.end_headers()
            print(f"📡 [Live Stream Locked]: Automated append complete for '{file_name}'")
            return

if __name__ == "__main__":
    print(f"📡 [Memory Hub Server]: Online. Listening on port 5523 for direct file operations...")
    server = http.server.HTTPServer(("127.0.0.1", PORT), MemoryHubHandler)
    server.serve_forever()
