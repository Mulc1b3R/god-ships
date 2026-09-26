import json
import os
import glob
import re

def calculate_fleet_stress_averages():
    print("=====================================================================")
    print("        SECTION 23 PHASE 2: UN-DILUTED AI SEMANTIC TELEMETRY         ")
    print("=====================================================================")
    print("Objective: Compute true threat averages for autonomous cognition nodes.")
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
        valid_cognitive_replies = 0

        # Loop through every single structural statement logged inside the file array
        for entry in history_array:
            # NOISE FILTER GATE: Explicitly isolate autonomous_cognition records
            entry_type = entry.get("type", "").strip()
            if entry_type != "autonomous_cognition":
                continue # Safely discards hardware_reflex noise and older remnants down the grid
                
            content = entry.get("content", "").strip()
            if not content:
                continue
            
            # Scan deep inside the content string for the trailing bracket index values
            stress_match = re.search(r'\[STRESS:\s*(\d+)\]', content, re.IGNORECASE)
            
            if stress_match:
                stress_value = int(stress_match.group(1))
                total_stress_accumulated += stress_value
                valid_cognitive_replies += 1 

        if valid_cognitive_replies > 0:
            # Calculate the explicit mathematical average threat score metrics
            average_stress = round(total_stress_accumulated / valid_cognitive_replies, 1)
            
            print(f"📡 Node Target: {short_name:<24} | Cognitive Volleys: {valid_cognitive_replies:<4} | Real Ave Stress: {average_stress}%")
            audited_count += 1

    if audited_count == 0:
        print("> Telemetry grid resting in stasis. No active Phase 2 AI stress markers detected on disk.")
        
    print("-" * 69)
    print("🔬 [Audit Complete]: Pure cognitive state telemetry extracted successfully.\n")

if __name__ == "__main__":
    calculate_fleet_stress_averages()
