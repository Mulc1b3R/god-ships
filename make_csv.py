import json
import os
import glob
import re
import csv
from collections import Counter

def clean_timestamp(ts_str):
    """Fixes compressed layout lines and returns a strict uniform HH:MM:SS string"""
    if not ts_str:
        return "00:00:00"
    # Extract only the last 8 digits matching standard time structures
    matches = re.findall(r'\d{2}:\d{2}:\d{2}', str(ts_str))
    return matches[-1] if matches else "00:00:00"

def calculate_thread_retention(current_tokens, prior_tokens):
    if not prior_tokens:
        return 0.0
    shared_tokens = current_tokens.intersection(prior_tokens)
    return len(shared_tokens) / len(prior_tokens) if len(prior_tokens) > 0 else 0.0

def run_max_spec_metrics_audit():
    print("📡 [Caliper Core]: Initialising max-spec telemetry sweep across isolated repositories...")
    
    memory_files = glob.glob("memory_bank_*.json")
    csv_file = "subspace_telemetry.csv"
    
    if not memory_files:
        print("❌ [ERROR]: NO TARGET JSON LEDGERS DETECTED IN WORKSPACE.")
        return

    all_records = []

    # Ingest and map structural columns safely
    for file_name in memory_files:
        try:
            with open(file_name, "r", encoding="utf-8") as f:
                records = json.load(f)
                for r in records:
                    if "vessel" not in r:
                        implied = file_name.replace("memory_bank_", "").replace(".json", "").replace("_", " ").title()
                        r["vessel"] = implied
                    all_records.append(r)
        except Exception:
            continue

    if not all_records:
        print("❌ [ERROR]: Isolated data arrays are empty.")
        return

    # Force absolute chronological serialization via fixed timestamp normalization tags
    all_records.sort(key=lambda x: clean_timestamp(x.get("timestamp", "00:00:00")))

    # Prepare CSV field names layout matrix grid
    csv_headers = [
        "TIMESTAMP", "VESSEL_IDENTITY", "STRATUM_TYPE", "WORD_COUNT", 
        "SENTENCE_COUNT", "AVG_WORD_LEN", "LEXICAL_DENSITY", 
        "THREAD_HOLD", "ROLLING_STABILITY_MA5", "SIGNATURE_FLAG", "ANCHOR_KEYWORDS"
    ]

    print(f"📊 [Grid Size]: Ingested {len(all_records)} data nodes. Writing spreadsheet data matrix...")

    # Open CSV writer stream configuration layout
    with open(csv_file, mode="w", newline="", encoding="utf-8") as f_csv:
        writer = csv.writer(f_csv)
        writer.writerow(csv_headers)

        print("\n" + "="*125)
        print(f"{'TIMESTAMP':<10} | {'VESSEL IDENTITY':<24} | {'WORDS':<5} | {'SENT':<4} | {'AVG_W':<5} | {'LEX_D':<5} | {'THREAD_HOLD':<11} | {'MA5_STAB':<8} | {'SIGNATURE'}")
        print("="*125)

        prior_topic_tokens = set()
        ignored_fillers = {"the", "and", "your", "that", "this", "with", "from", "their", "about", "which", "there", "would", "shall", "wont", "aint"}
        
        # Micro memory lists to calculate the 5-cycle rolling average moving metrics loop
        rolling_thread_history = []

        for idx, r in enumerate(all_records):
            timestamp = clean_timestamp(r.get("timestamp", "00:00:00"))
            vessel = r.get("vessel", "Unknown Vessel").replace("GSV ", "")[:24]
            msg_type = r.get("type", "autonomous_cognition")
            content = r.get("content", "").strip()
            
            # 1. CORE FOOTPRINT METRICS
            words = content.split()
            word_count = len(words)
            if word_count == 0: continue
            
            sentence_count = content.count('.') + content.count('?') + content.count('!')
            if sentence_count == 0: sentence_count = 1
            
            avg_word_len = sum(len(w.strip(".,?!\"'")) for w in words) / word_count
            
            # Lexical Density: Unique words divided by total words (measures narrative variance)
            unique_words = set(w.lower().strip(".,?!\"'") for w in words)
            lexical_density = len(unique_words) / word_count

            # 2. LEXICAL CONTINUITY MATRIX (KEEPING THE THREAD)
            clean_text = re.sub(r'[^a-zA-Z0-9\s]', '', content.lower())
            current_topic_tokens = set(w for w in clean_text.split() if len(w) > 4 and w not in ignored_fillers)
            
            thread_hold_coefficient = calculate_thread_retention(current_topic_tokens, prior_topic_tokens)
            
            # Intersection anchors to log exactly which context definitions match
            shared_anchors = list(current_topic_tokens.intersection(prior_topic_tokens))[:3]
            anchor_str = ", ".join(shared_anchors) if shared_anchors else "NONE"
            
            # Hand off tokens for the next chronological iteration row block loop
            prior_topic_tokens = current_topic_tokens

            # 3. ROLLING CONTEXT WINDOW STABILIZER (MA5 Loop)
            rolling_thread_history.append(thread_hold_coefficient)
            if len(rolling_thread_history) > 5:
                rolling_thread_history.pop(0)
            moving_avg_stability = sum(rolling_thread_history) / len(rolling_thread_history)

            # 4. SYSTEM SIGNATURE FLAGS
            query_hits = content.count('?')
            if word_count < 25 and sentence_count <= 3:
                signature_flag = "REFLEX_JSON_REF"
            else:
                signature_flag = f"COGNITIVE_AI (Q:{query_hits})"

            # 5. CONSOLE PRINT PASS LINE
            print(f"{timestamp:<10} | {vessel:<24} | {word_count:<5} | {sentence_count:<4} | {avg_word_len:.1f}  | {lexical_density*100:>4.0f}% | {thread_hold_coefficient*100:>9.1f}% | {moving_avg_stability*100:>7.1f}% | {signature_flag}")

            # 6. ATOMIC CSV DISK-WRITE DATA MATRIX PASS
            writer.writerow([
                timestamp, r.get("vessel"), msg_type, word_count, 
                sentence_count, f"{avg_word_len:.2f}", f"{lexical_density:.2f}", 
                f"{thread_hold_coefficient:.4f}", f"{moving_avg_stability:.4f}", 
                signature_flag, anchor_str
            ])

    print("="*125)
    print(f"\n🤫 [Sweep Complete]: Generated spreadsheet data core containing {len(all_records)} logs.")
    print(f"💾 [Spreadsheet Locked]: Permanent data matrix secured at: '{csv_file}'\n")

if __name__ == "__main__":
    run_max_spec_metrics_audit()
