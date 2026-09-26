import json
import os
import glob
import math

def calculate_shannon_entropy(text):
    """Calculates the pure informational entropy (uncertainty/variety) of the transmission string"""
    if not text:
        return 0.0
    clean_text = "".join(c for c in text.lower() if c.isalnum() or c.isspace())
    words = clean_text.split()
    total_words = len(words)
    if total_words == 0:
        return 0.0
        
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
        
    entropy = 0.0
    for count in counts.values():
        p = count / total_words
        entropy -= p * math.log2(p)
    return entropy

def run_cybernetic_systems_audit():
    output_file = "cybernetic_system_report.txt"
    memory_files = glob.glob("memory_bank_*.json")
    
    if not memory_files:
        print(f"❌ [System Error]: No physical log file repositories detected on disk to parse.")
        return

    all_volleys = []
    for file_name in memory_files:
        if "unassigned" in file_name:
            continue
        try:
            with open(file_name, "r", encoding="utf-8") as f:
                records = json.load(f)
                for r in records:
                    all_volleys.append(r)
        except Exception:
            continue

    if not all_volleys:
        print(f"❌ [System Error]: Target ledger buffers are completely empty.")
        return

    # Force absolute chronological serialization timeline order
    all_volleys.sort(key=lambda x: x.get("timestamp", "00:00:00"))

    # Open the text file writer stream directly to disk
    with open(output_file, "w", encoding="utf-8") as out:
        out.write("=========================================================================================\n")
        out.write("                  SECTION 23 CORE TELEMETRY: CYBERNETIC SYSTEMS REPORT                   \n")
        out.write("=========================================================================================\n")
        out.write(f"Topology Audited: {len(all_volleys)} Atomic Nodes under Circular Causality.\n")
        out.write(f"Generated Timestamp: {os.path.basename(output_file)} Baseline Capture Engine.\n")
        out.write("-" * 97 + "\n")
        out.write(f"{'TIMETICK':<10} | {'NODE PATHWAY SOURCE':<24} | {'INF_MASS (CHARS)':<16} | {'SIGNAL_ENTROPY':<16} | {'GAIN_COEFFICIENT'}\n")
        out.write("-" * 97 + "\n")

        prior_char_mass = 0
        
        for idx, volley in enumerate(all_volleys):
            timestamp = volley.get("timestamp", "00:00:00")
            vessel_name = volley.get("vessel", "Unknown_Node").replace("GSV ", "")[:24]
            content = volley.get("content", "").strip()
            
            current_char_mass = len(content)
            if current_char_mass == 0:
                continue
                
            signal_entropy = calculate_shannon_entropy(content)
            
            if prior_char_mass > 0:
                gain_coefficient = current_char_mass / prior_char_mass
                gain_str = f"{gain_coefficient:>14.2f}x"
            else:
                gain_str = f"{'1.00x':>15}"
                
            prior_char_mass = current_char_mass

            # Write the raw system parameters row-by-row into the text file matrix
            out.write(f"{timestamp:<10} | {vessel_name:<24} | {current_char_mass:<16} | {signal_entropy:<16.4f} | {gain_str}\n")

        out.write("=========================================================================================\n")
        out.write("🔬 [End of Transmission Matrix Ledger] ───► Variety Audit Complete.\n")

    print(f"💾 [Storage Registry]: Cybernetic structural metrics secured at: '{output_file}'")

if __name__ == "__main__":
    run_cybernetic_systems_audit()

