@echo off
title ☣️ SECTION 23: INDUSTRIAL SIMULATION COMMANDER 🛸
color 0A
cls

echo =======================================================================
echo          INITIALISING SECTION 23 CYBERNETIC COGNITIVE SANDBOX       
echo =======================================================================
echo  [System Notice]: Deploying isolated microservices, background ports, 
echo                  and frontend control dashboards...
echo -----------------------------------------------------------------------

:: STEP 1: Boot up your background physical database memory hub on Port 5523
echo 📡 [Ignition Phase 1/3]: Spinning up Python Memory Hub on Port 5523...
start /min "Memory Hub DB" cmd /k "python memory_hub.py"
timeout /t 2 /nobreak >nul

:: STEP 2: Automatically compile your 726+ history entries into the live CSV data matrix
echo 📊 [Ignition Phase 2/3]: Triggering initial high-precision metrics caliper compilation...
python make_csv.py
timeout /t 1 /nobreak >nul

:: STEP 3: Fire your primary frontend web workspace server frames
echo 🌐 [Ignition Phase 3/3]: Launching local development server pipelines...
:: If you use standard python hosting, this boots up Port 5500 automatically in the background
start /min "Shipyard Web Server" cmd /k "python -m http.server 5500"
timeout /t 2 /nobreak >nul

:: STEP 4: Deploy the browser cockpit control screens side-by-side
echo 🪐 [Orbital Lock]: Shunting master index hub and visual oscilloscope to browser...
:: Opens your central launch hub containing your Black Swan Incident Injector buttons
start "" "http://127.0.0.1:5500/index.html"
:: Opens your live HTML5 Canvas native graphing metrics panel
start "" "http://127.0.0.1:5500/memory.html"
:: Opens your gold-dust AI vs Reflex text card filter log viewer
start "" "http://127.0.0.1:5500/memory_bank_viewer.html"

echo -----------------------------------------------------------------------
echo ✅ [EQUILIBRIUM ACHIEVED]: ALL SYSTEM CHANNELS OPERATING NOMINALLY.
echo 💡 ACTION: Keep this manager terminal open while conducting experiments.
echo            Tap Chaos Switches on your Index layout tab to run cascades!
echo =======================================================================
echo.
