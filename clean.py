import os
import glob

def harvest_and_append_manifest():
    print("📡 [Archive System]: Scanning directory for new workspace manifests...")
    
    # Locate all text files inside your active directory folder
    text_files = glob.glob("*.txt")
    
    # Filter out our output archive file to prevent infinite loops
    archive_file = "sanitized_chatter.txt"
    manifest_candidates = [f for f in text_files if f != archive_file]
    
    if not manifest_candidates:
        print("\n❌ [ERROR]: NO NEW RAW MANIFEST BLOCKS DETECTED.")
        print("💡 ACTION: Click your amber [💾 Export Subspace Manifest] button in the browser,")
        print("   then move that downloaded file into this folder before running this script.")
        return

    # Automatically target the absolute newest raw text file exported from the browser
    newest_input_file = max(manifest_candidates, key=os.path.getmtime)
    print(f"🎯 [Target Locked]: Processing raw data block: '{newest_input_file}'")
    
    # Step 1: Read existing history archives to prevent printing duplicate lines
    existing_history = set()
    if os.path.exists(archive_file):
        with open(archive_file, "r", encoding="utf-8") as f:
            for line in f:
                if line.startswith("💬 "):
                    existing_history.add(line.strip())

    # Step 2: Ingest the new raw manifest and isolate fresh dialogue with zero filter caps
    fresh_entries = []
    with open(newest_input_file, "r", encoding="utf-8") as raw_f:
        for line in raw_f:
            if "> Decoded:" in line:
                # Isolate everything after the prefix marker, cleanly trimming outer whitespace and quotes
                clean_prose = line.split("> Decoded:", 1)[1].strip().strip('"')
                formatted_entry = f"💬 {clean_prose}"
                
                # Deduplication Check: Only capture it if it doesn't already exist in our history archive
                if formatted_entry not in existing_history and formatted_entry not in fresh_entries:
                    fresh_entries.append(formatted_entry)
                    
    # Step 3: Append fresh responses to the long-term master log file
    if fresh_entries:
        with open(archive_file, "a", encoding="utf-8") as clean_f:
            for entry in reversed(fresh_entries):  # Maintains true chronological timeline order
                clean_f.write(f"{entry}\n\n")
        print(f"\n🤫 [Harvest Complete]: Extracted and appended {len(fresh_entries)} raw response entries.")
        print(f"💾 [Storage Registry]: Master rolling history updated at: '{archive_file}'\n")
    else:
        print("\n🔒 [Data Secure]: No new unique responses detected in this block. Archive is up-to-date.")

    # --- SOURCE RETENTION GUARANTEE ---
    print(f"Driver Guard: Source file '{newest_input_file}' left 100% untouched and safe in directory.")

if __name__ == "__main__":
    harvest_and_append_manifest()

