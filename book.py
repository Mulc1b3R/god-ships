import json
import glob
import os

def generate_clean_manuscript():
    output_filename = "section23_ai_manuscript.txt"
    
    print("=====================================================================")
    print("        SECTION 23: AUTOMATED LINGUISTIC HARVESTER RUNNING           ")
    print("=====================================================================")
    print("Objective: Compile pure AI dialogue entries into clean text prose.")
    print("-" * 69)
    
    # Locate all active ship database repositories sitting directly on disk
    memory_files = glob.glob("memory_bank_*.json")
    
    if not memory_files:
        print("❌ [SYSTEM ERROR]: No active JSON file repositories detected on disk.")
        return

    all_harvested_volleys = []

    for file_path in memory_files:
        if "unassigned" in file_path:
            continue
            
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                history_array = json.load(f)
        except Exception:
            continue

        for entry in history_array:
            # PURE COGNITION FILTER: Safely strips out hardware boilerplate in memory!
            if entry.get("type") != "autonomous_cognition":
                continue
                
            content = entry.get("content", "").strip()
            if not content:
                continue

            all_harvested_volleys.append({
                "timestamp": entry.get("timestamp", "00:00:00"),
                "vessel": entry.get("vessel", "UNKNOWN HULL"),
                "content": content
            })

    if not all_harvested_volleys:
        print("> Telemetry archive resting in stasis. No pure AI cognition logs found.")
        print("=====================================================================")
        return

    # Sort entries globally by their timestamp string matrix to align the timeline
    all_harvested_volleys.sort(key=lambda x: x["timestamp"])

    # Write out the clean, unvarnished human-readable book manuscript
    with open(output_filename, "w", encoding="utf-8") as out:
        out.write("=====================================================================\n")
        out.write("                 SECTION 23 CHRONICLES: FLEET PROSE                  \n")
        out.write("=====================================================================\n\n")
        
        for idx, volley in enumerate(all_harvested_volleys):
            out.write(f"[{volley['timestamp']}] ──► HULL: {volley['vessel'].upper()}\n")
            out.write(f"---------------------------------------------------------------------\n")
            out.write(f"{volley['content']}\n\n")
            out.write("=" * 69 + "\n\n")

    print(f"🔬 [Harvest Complete]: Extracted {len(all_harvested_volleys)} un-diluted AI dialogue logs.")
    print(f"📝 Master Manuscript safely generated on disk: '{output_filename}'")
    print("=====================================================================\n")

if __name__ == "__main__":
    generate_clean_manuscript()
