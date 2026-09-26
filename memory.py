import json
import os
import glob
import re

def calculate_thread_retention(current_tokens, prior_tokens):
    """Calculates the exact ratio of unique technical/topic tokens carried over from the prior message"""
    if not prior_tokens:
        return 0.0
    shared_tokens = current_tokens.intersection(prior_tokens)
    return len(shared_tokens) / len(prior_tokens) if len(prior_tokens) > 0 else 0.0

def run_telemetry_metrics_audit():
    print("📡 [Caliper Engine]: Initialising structural telemetry sweep across isolated vaults...")
    
    # Locate all distinct vessel file ledgers on disk
    memory_files = glob.glob("memory_bank_*.json")
    
    if not memory_files:
        print("❌ [ERROR]: NO TARGET JSON DATABASE LEDGERS DETECTED IN DIRECTORY.")
        return

    all_records = []

    # Ingest and standardize tracking parameters
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

    # Force strict chronological serialization timeline order
    all_records.sort(key=lambda x: x.get("timestamp", "00:00:00"))

    print(f"📊 [Grid Size]: Processing {len(all_records)} distinct transmission nodes chronologically.\n")
    print(f"{'TIMESTAMP':<12} | {'VESSEL IDENTITY':<28} | {'WORDS':<5} | {'SENT':<4} | {'AVG_W':<5} | {'THREAD_HOLD':<11} | {'SIGNATURE'}")
    print("-" * 110)

    prior_topic_tokens = set()
    ignored_fillers = {"the", "and", "your", "that", "this", "with", "from", "their", "about", "which", "there", "would", "shall"}

    for idx, r in enumerate(all_records):
        timestamp = r.get("timestamp", "00:00:00")
        vessel = r.get("vessel", "Unknown Vessel")
        content = r.get("content", "").strip()
        
        # 1. RAW STRUCTURAL DENSITY METRICS
        words = content.split()
        word_count = len(words)
        
        # Calculate terminal punctuation marks safely
        sentence_count = content.count('.') + content.count('?') + content.count('!')
        if sentence_count == 0: 
            sentence_count = 1
            
        avg_word_len = sum(len(w.strip(".,?!\"'")) for w in words) / word_count if word_count > 0 else 0

        # 2. LEXICAL CONTINUITY MATRIX (KEEPING THE THREAD)
        # Isolate meaningful alphanumeric topic tokens (length > 4) to bypass basic syntax filler noise
        clean_text = re.sub(r'[^a-zA-Z0-9\s]', '', content.lower())
        current_topic_tokens = set(w for w in clean_text.split() if len(w) > 4 and w not in ignored_fillers)
        
        thread_hold_coefficient = calculate_thread_retention(current_topic_tokens, prior_topic_tokens)
        
        # Hand off this cycle's tokens to serve as the background comparison for the next timestamp volley
        prior_topic_tokens = current_topic_tokens

        # 3. SYNTAX SIGNATURE MATCH
        # Quantify query frequency versus absolute commands to gauge logic structure volatility
        query_hits = content.count('?')
        signature_flag = f"CMD_STABLE (Q:{query_hits})" if query_hits == 0 else f"VOLATILE_Q (Q:{query_hits})"

        # Output rows formatted onto an ultra-clean, scannable data panel
        short_vessel = vessel.replace("GSV ", "")[:28]
        print(f"{timestamp:<12} | {short_vessel:<28} | {word_count:<5} | {sentence_count:<4} | {avg_word_len:.1f}  | {thread_hold_coefficient*100:>9.1f}% | {signature_flag}")

    print("\n🔬 [Telemetry Sweep Closed]: Structural data ledger successfully calculated.")

if __name__ == "__main__":
    run_telemetry_metrics_audit()
