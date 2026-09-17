@echo off
REM ============================================================
REM VLearn Ready — 1 click chay demo LIVE (web + AI that)
REM Key doc tu file .env (cung thu muc, DA GITIGNORE).
REM Dung:  run.bat [port]   (vd: run.bat 3001 neu 3000 ban)
REM ============================================================
cd /d "%~dp0"
set PORT=%1
if "%PORT%"=="" set PORT=3000
if not exist ".env" (
  echo THIEU file .env! Tao file .env theo mau:
  echo   DEEPSEEK_API_KEY=dankey...
  pause
  exit /b 1
)
for /f "usebackq eol=# tokens=1,* delims==" %%A in (".env") do (
  if not "%%A"=="" set "%%A=%%B"
)
if "%DEEPSEEK_API_KEY%"=="" (
  echo THIEU KEY: mo file .env, dien DEEPSEEK_API_KEY=...
  pause
  exit /b 1
)
echo VLearn Ready LIVE: http://localhost:%PORT%
echo Kiem tra truoc gio demo: http://localhost:%PORT%/api/health
echo Don server cu tren port %PORT% (neu co)...
for /f "tokens=5" %%P in ('netstat -ano ^| findstr ":%PORT%" ^| findstr "LISTENING"') do (
  taskkill /F /PID %%P >nul 2>&1
)
timeout /t 2 /nobreak >nul
python server.py --port %PORT%
pause
