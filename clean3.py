import os
import glob
import re
import json

def harvest_and_compile_json_archive():
    print("Documenting Manifests: Scanning directory for new workspace telemetry...")
    
    text_files = glob.glob("*.txt")
    archive_json = "subspace_archive.json"
    archive_txt = "sanitized_chatter.txt"
    
    # Filter out text files that are actual output logs
    manifest_candidates = [f for f in text_files if f not in [archive_txt]]
    
    if not manifest_candidates:
        print("\n❌ [ERROR]: NO NEW RAW MANIFEST BLOCKS DETECTED.")
        return

    newest_input_file = max(manifest_candidates, key=os.path.getmtime)
    print(f"🎯 [Target Locked]: Compiling raw data block: '{newest_input_file}'")
    
    # Load existing JSON archive data if it exists to prevent duplication
    existing_records = []
    if os.path.exists(archive_json):
        try:
            with open(archive_json, "r", encoding="utf-8") as j_f:
                existing_records = json.load(j_f)
        except Exception:
            existing_records = []

    # Create a lookup set of existing items to prevent duplicates (using timestamp + content snippet)
    existing_fingerprints = {f"{r.get('timestamp')}_{r.get('content')[:30]}" for r in existing_records}

    new_records = []
    current_sender = "Unknown Vessel"
    current_timestamp = "00:00:00"

    with open(newest_input_file, "r", encoding="utf-8") as raw_f:
        for line in raw_f:
            if "Incoming global tightbeam from:" in line:
                time_match = re.search(r"\[(.*?)\]", line)
                if time_match:
                    current_timestamp = time_match.group(1)
                current_sender = line.split("Incoming global tightbeam from:", 1)[1].strip()
                continue
                
            if "> Decoded:" in line:
                clean_prose = line.split("> Decoded:", 1)[1].strip().strip('"')
                
                # Detect if this is a 2-sentence fast hardware response or a deep essay
                # (Used strictly for visual filtering tags inside your future HTML viewer)
                msg_type = "hardware_reflex" if (clean_prose.count('.') == 2 and len(clean_prose) < 200) else "autonomous_cognition"
                
                fingerprint = f"{current_timestamp}_{clean_prose[:30]}"
                
                if fingerprint not in existing_fingerprints:
                    # Construct the pure structured database object
                    record = {
                        "timestamp": current_timestamp,
                        "vessel": current_sender,
                        "type": msg_type,
                        "content": clean_prose
                    }
                    new_records.append(record)
                    existing_fingerprints.add(fingerprint)

    # Append new records and save the updated JSON database ledger
    if new_records:
        # Maintain true chronological order
        combined_records = existing_records + list(reversed(new_records))
        
        with open(archive_json, "w", encoding="utf-8") as j_f:
            json.dump(combined_records, j_f, indent=2, ensure_ascii=False)
            
        print(f"\n🤫 [Harvest Complete]: Compiled {len(new_records)} unique records into JSON database storage.")
        print(f"💾 [Storage Registry]: Master ledger file updated at: '{archive_json}'\n")
    else:
        print("\n🔒 [Data Secure]: Archive database is entirely up-to-date.")

    print(f"Driver Guard: Source telemetry file '{newest_input_file}' left 100% untouched.")

if __name__ == "__main__":
    harvest_and_compile_json_archive()
