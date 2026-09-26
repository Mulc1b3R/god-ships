import json
import os
import glob
import re

def calculate_fleet_stress_averages():
    print("=====================================================================")
    print("        SECTION 23 PHASE 2: FLEET SEMANTIC TELEMETRY REPORT          ")
    print("=====================================================================")
    print("Objective: Compute true mathematical threat averages per active node.")
    print("-" * 69)
    
    # Target all physical ship JSON files sitting directly in the root directory
    memory_files = glob.glob("memory_bank_*.json")
    
    if not memory_files:
        print("❌ [SYSTEM ERROR]: No active JSON file repositories detected on disk.")
        print("=====================================================================")
        return

    audited_count = 0

    for file_path in memory_files:
        if "unassigned" in file_path:
            continue
            
        raw_name = file_path.replace("memory_bank_", "").replace(".json", "")
        short_name = raw_name.replace("gsv_", "").replace("_", " ").upper()
        
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                history_array = json.load(f)
        except Exception:
            continue

        if not history_array:
            continue

        total_stress_accumulated = 0
        valid_metric_replies = 0

        # Loop through every single structural statement logged inside the file array
        for entry in history_array:
            content = entry.get("content", "").strip()
            if not content:
                continue
            
            # REPAIRED VECTOR: Searches deep INSIDE any brackets anywhere in the content string
            stress_match = re.search(r'\[STRESS:\s*(\d+)\]', content, re.IGNORECASE)
            
            if stress_match:
                # Extract the captured numerical digits cleanly
                stress_value = int(stress_match.group(1))
                total_stress_accumulated += stress_value
                valid_metric_replies += 1 # Only count this reply if the stress tag exists!

        if valid_metric_replies > 0:
            # Calculate the explicit numerical average threat value
            average_stress = round(total_stress_accumulated / valid_metric_replies, 1)
            
            print(f"📡 Node Target: {short_name:<24} | Phase 2 Volleys: {valid_metric_replies:<4} | Ave Stress: {average_stress}%")
            audited_count += 1

    if audited_count == 0:
        print("> Telemetry grid resting in stasis. No Phase 2 stress markers detected on disk.")
        print("  [Notice]: Double-check if files contain the literal '[STRESS: XX]' tag string layout.")
        
    print("-" * 69)
    print("🔬 [Audit Complete]: Semantic state averages calculated successfully.\n")

if __name__ == "__main__":
    calculate_fleet_stress_averages()
