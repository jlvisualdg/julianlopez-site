@echo off
REM GitHub Pages Deployment Script for Authority Hub
REM This script helps you deploy your agent-first authority hub to GitHub Pages

echo ========================================
echo   Authority Hub - GitHub Pages Setup
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

REM Check if GitHub username is provided
if "%~1"=="" (
    echo Usage: deploy.bat [your-github-username]
    echo Example: deploy.bat myusername
    echo.
    echo Your GitHub repository will be: https://github.com/%~1/julianlopez-site
    pause
    exit /b 1
)

set USERNAME=%~1
set REPO=julianlopez-site

echo Setting up deployment for user: %USERNAME%
echo Repository: %REPO%
echo.

REM Navigate to project directory
cd /d "%~dp0"

echo Step 1: Initializing Git repository...
if exist .git (
    echo Git repository already initialized
) else (
    git init
    echo Git repository initialized
)
echo.

echo Step 2: Adding all files to Git...
git add .
echo Files added
echo.

echo Step 3: Creating initial commit...
git commit -m "Initial commit - Agent-first Authority Hub"
echo Commit created
echo.

echo Step 4: Setting up remote repository...
git remote -v | findstr origin >nul
if %errorlevel% equ 0 (
    echo Remote repository already configured
    echo Updating remote URL...
    git remote set-url origin https://github.com/%USERNAME%/%REPO%.git
) else (
    echo Adding remote repository...
    git remote add origin https://github.com/%USERNAME%/%REPO%.git
)
echo Remote repository configured
echo.

echo Step 5: Creating main branch...
git branch -M main
echo Main branch created
echo.

echo ========================================
echo   Deployment Instructions
echo ========================================
echo.
echo NEXT STEPS:
echo.
echo 1. Create GitHub repository at:
echo    https://github.com/new
echo    - Name: %REPO%
echo    - Set to Public
echo    - Don't initialize with README
echo.
echo 2. Configure GitHub Pages:
echo    - Go to repository Settings → Pages
echo    - Source: GitHub Actions
echo    - Custom domain: julianlopez.site
echo.
echo 3. Push to GitHub:
echo    git push -u origin main
echo.
echo 4. Monitor deployment:
echo    - Check the Actions tab in your repository
echo    - Wait for the build and deploy workflow to complete
echo.
echo 5. Access your site:
echo    https://julianlopez.site
echo.
echo ========================================
echo.
pause

REM Offer to push immediately
echo Would you like to push to GitHub now? (Y/N)
set /p PUSH=
if /i "%PUSH%"=="Y" (
    echo.
    echo Pushing to GitHub...
    git push -u origin main
    echo.
    echo Push completed! Check the Actions tab in your repository for deployment status.
) else (
    echo.
    echo You can push later by running: git push -u origin main
)

pause