@echo off
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 exit /b 1
node -e "require('playwright-core')" >nul 2>&1
if not errorlevel 1 exit /b 0
where npm >nul 2>&1
if errorlevel 1 exit /b 1
echo Installation des composants de suivi Fortnite...
call npm ci --omit=dev --no-audit --no-fund
if errorlevel 1 exit /b 1
node -e "require('playwright-core')" >nul 2>&1
if errorlevel 1 exit /b 1
exit /b 0
