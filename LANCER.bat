@echo off
title Fortnite Ranked Overlay
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js est requis. Installe-le depuis https://nodejs.org
  pause
  exit /b 1
)

echo.
call "%~dp0INSTALLER.bat"
if errorlevel 1 (
  echo Installation impossible. Verifiez votre connexion Internet puis relancez.
  pause
  exit /b 1
)
echo  Demarrage Fortnite Ranked...
echo  Controle    : http://127.0.0.1:8767/control.html
echo  Overlay OBS : http://127.0.0.1:8767/overlay.html
echo.

start "" "http://127.0.0.1:8767/control.html"
node server.js
pause
