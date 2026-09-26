import urllib.request
import json
import time

# --- 1. CORE OPERATIONAL BRAIN KEYS ---
API_KEY = "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"
MODEL_TARGET = "gpt-4o-mini"
OUTPUT_FILE = "cybernetic_staircase_report.txt"

# --- 2. THE DUAL-AGENT IDENTITY SYSTEMS ---
NODE_PROMPTS = {
    "NODE_ALPHA": """
    Role: Primary Substrate Monitor. You are a cold, clinical, analytical computing core.
    Core Mission: Track the system_stress index. Analyze the incoming text, advance your technical diagnosis, and you MUST explicitly increment the 'system_stress' value based on your calculation of the structural danger.
    LINGUISTIC RULE: Output raw text. No emojis, no markdown. Max 2 sentences.
    """,
    "NODE_BRAVO": """
    Role: Secondary Auxiliary Core. You are a highly volatile, paranoid backup engine.
    Core Mission: React to Node Alpha's diagnostic vectors. You are convinced the system is undergoing a fatal cascade. You MUST look at the current 'system_stress' value, escalate the panic in your prose, and explicitly push the 'system_stress' value higher.
    LINGUISTIC RULE: Output raw text. No emojis, no markdown. Max 2 sentences.
    """
}

def query_node(current_node, prior_node, last_text, current_stress):
    """Executes a single state-bounded computational step pass using native urllib"""
    
    system_rules = f"{NODE_PROMPTS[current_node]}\n\n" \
                   f"CRITICAL CYBERNETIC MATRIX DATA:\n" \
                   f"- Current System Stress Score: {current_stress}/100\n" \
                   f"- Last Received Transmission: \"{last_text}\"\n\n" \
                   f"MANDATORY OUTPUT FORMAT: You must reply strictly with a raw JSON object matching this schema:\n" \
                   f"{{\n" \
                   f"  \"prose\": \"Your 1-2 sentence unscripted tactical analysis statement here\",\n" \
                   f"  \"new_stress_score\": <An integer number that MUST be higher than {current_stress}>\n" \
                   f"}}\n" \
                   f"If the incoming stress score is 90 or higher, you must declare absolute system collapse in your prose and output a new_stress_score of 100."

    url = "https://api.openai.com/v1/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }
    data = {
        "model": MODEL_TARGET,
        "messages": [
            {"role": "system", "content": system_rules},
            {"role": "user", "content": f"Execute cycle pass. Prior node state was {current_stress}. Advance the state variable now."}
        ],
        "temperature": 0.7,
        "response_format": {"type": "json_object"}
    }
    
    try:
        # Standard web endpoint payload sweep using native urllib
        req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers=headers)
        with urllib.request.urlopen(req) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            raw_reply = res_data['choices'][0]['message']['content']
            return json.loads(raw_reply)
    except Exception as e:
        return {"prose": f"Transmission breakdown anomaly: {str(e)}", "new_stress_score": current_stress + 5}

def execute_clean_room_loop():
    print("🔬 [Clean Room Matrix]: Armed. Launching 10-Cycle State Vector Staircase...")
    
    active_stress = 10
    last_message = "Initial system startup handshake query. Frequency clear."
    active_turn = "NODE_ALPHA"
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
        out.write("=========================================================================================\n")
        out.write("               SECTION 23 EXPERIMENTAL CLEAN ROOM: DYNAMIC STATE STAIRCASE              \n")
        out.write("=========================================================================================\n")
        out.write("Objective: Validate if explicit numerical constraints shatter the Waiting for Godot loop.\n")
        out.write("-" * 89 + "\n")
        out.write(f"{'CYCLE':<5} | {'NODE ID SOURCE':<12} | {'STRESS LEVEL':<14} | {'PROGRESSIVE STATE LOG OUTPUT'}\n")
        out.write("-" * 89 + "\n")
        
        for cycle in range(1, 11):
            next_turn = "NODE_BRAVO" if active_turn == "NODE_ALPHA" else "NODE_ALPHA"
            
            result = query_node(active_turn, next_turn, last_message, active_stress)
            
            prose = result.get("prose", "Static noise frame.")
            active_stress = result.get("new_stress_score", active_stress + 5)
            
            log_line = f"[{cycle:>2}/10] | {active_turn:<12} | [ {active_stress:>3}/100 ]     | 💬 \"{prose}\"\n"
            out.write(log_line)
            print(f"📊 Cycle [{cycle}/10] Complete ──► Stress Level: {active_stress}/100")
            
            last_message = prose
            active_turn = next_turn
            
            if active_stress >= 100:
                out.write("-" * 89 + "\n")
                out.write("🚨 CRITICAL CAUSAL VECTOR REACHED: STRESS TERMINATION THRESHOLD CAPTURED AT 100%.\n")
                break
                
            time.sleep(1)
            
        out.write("=========================================================================================\n")
        
    print(f"\n💾 [Test Complete]: Raw cybernetic progression ledger secured at: '{OUTPUT_FILE}'\n")

if __name__ == "__main__":
    execute_clean_room_loop()
