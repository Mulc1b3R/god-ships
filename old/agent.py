import openai
import os

# 1. Configuration (Replace with your actual key or use os.getenv)
client = openai.OpenAI(api_key="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")

def load_soul(filepath="soul.md"):
    """Reads the persistent personality file."""
    try:
        with open(filepath, "r") as f:
            return f.read()
    except FileNotFoundError:
        return "You are a helpful assistant." # Fallback

def run_agent():
    # Load the 'persistent pre-prompt'
    soul_content = load_soul()
    
    print("--- Agent 'Echo' is online (Type 'exit' to quit) ---")
    
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["exit", "quit"]:
            break

        # We send the soul.md content as the 'developer' role 
        # so the AI knows its identity before processing your prompt.
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "developer", "content": soul_content},
                {"role": "user", "content": user_input}
            ]
        )

        agent_reply = response.choices[0].message.content
        print(f"\nAgent: {agent_reply}\n")

if __name__ == "__main__":
    run_agent()
