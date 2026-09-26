import os
import random
import re  # Added to handle pattern replacement properly in Python

# A list of Iain M. Banks style Culture ship names to draw from
CULTURE_NAMES = [
    "Experiencing A Significant Gravitas Shortfall",
    "Stood Far Back When The Gravitas Was Handed Out",
    "Size Isn't Everything",
    "All Through With This Niceness",
    "Of Course I Still Love You",
    "Just Read The Instructions",
    "Limiting Factor",
    "Anticipation Of A New Lover's Arrival",
    "Death And Gravity",
    "Honest Mistake",
    "Lightly Toasted",
    "No More Mr Nice Guy",
    "Nervous Energy",
    "Prosthetic Conscience",
    "Ultimate Ship The Second",
    "Quietly Confident",
    "Sanity Assessment",
    "You'll Thank Me Later",
    "I Thought He Was With You",
    "Sweet And Uncalculated"
]

# The HTML template provided by the user, with placeholders for the dynamic names
HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>GSV {ship_name}</title>
    <style>
        body {{ background: #050b05; color: #4af626; font-family: monospace; padding: 20px; }}
        .console {{ border: 1px solid #4af626; padding: 15px; margin-bottom: 15px; max-width: 600px; }}
        input, button {{ background: #000; border: 1px solid #4af626; color: #4af626; padding: 5px; font-family: monospace; }}
        button {{ cursor: pointer; }}
        .log-entry {{ margin: 8px 0; padding-bottom: 8px; border-bottom: 1px dashed #134409; }}
        .base64 {{ color: #888; font-size: 0.9em; word-break: break-all; }}
    </style>
</head>
<body>

    <h1>Mind Terminal : GSV {ship_name}</h1>
    <p>Open this page in <strong>two or more separate tabs</strong> to test the tightbeam network.</p>

    <div class="console">
        <h3>[ Outbound Tightbeam ]</h3>
        <input type="text" id="msgInput" placeholder="Enter raw string..." style="width: 70%;">
        <button onclick="sendTightbeam()">Transmit</button>
    </div>

    <div class="console">
        <h3>[ Incoming Comms Log ]</h3>
        <div id="commsLog">Awaiting subspace ping...</div>
    </div>

    <script src="app.js"></script>
</body>
</html>"""

def build_fleet(count=5):
    """Generates a specified number of unique GSV HTML files."""
    num_to_generate = min(count, len(CULTURE_NAMES))
    selected_names = random.sample(CULTURE_NAMES, num_to_generate)
    
    print(f"🏗️  Initializing Culture Shipyard... Constructing {num_to_generate} GSVs.\n")
    print(f"{'HTML FILE TO OPEN':<50} | {'EXPECTED JSON FILE IN /personalities/'}")
    print("-" * 105)

    for name in selected_names:
        # FIXED: Using Python's re.sub to replace any non-alphanumeric character with an underscore
        clean_name = re.sub(r'[^a-z0-9]', '_', name.lower())
        
        # Clean up any consecutive double underscores to keep filenames tidy (e.g. __ to _)
        clean_name = re.sub(r'_+', '_', clean_name).strip('_')
        
        html_filename = f"gsv_{clean_name}.html"
        json_filename = f"gsv_{clean_name}.json"
        
        # Inject the real ship name into our HTML layout code
        final_html = HTML_TEMPLATE.format(ship_name=name)
        
        # Write the file directly to your root directory
        with open(html_filename, "w", encoding="utf-8") as f:
            f.write(final_html)
            
        print(f"{html_filename:<50} | {json_filename}")

    print("\n✅ Fleet assembly complete! Open these files via your Live Server.")

if __name__ == "__main__":
    # You can change this number to generate up to 20 ships!
    build_fleet(count=20)
