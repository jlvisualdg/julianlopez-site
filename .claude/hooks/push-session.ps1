$ErrorActionPreference = "Stop"

if (-not $env:CLAUDE_PROJECT_DIR) {
    exit 0
}

Set-Location $env:CLAUDE_PROJECT_DIR

$branch = (git branch --show-current).Trim()

if ([string]::IsNullOrWhiteSpace($branch)) {
    exit 0
}

if ($branch -eq "main" -or $branch -eq "master") {
    Write-Error "Automatic push blocked on protected branch: $branch"
    exit 2
}

$status = git status --porcelain

if ([string]::IsNullOrWhiteSpace($status)) {
    exit 0
}

git add -A

$staged = git diff --cached --name-only

if ($staged -match '(^|/)\.env($|\.)|\.pem$|\.key$|credentials|secret') {
    git reset
    Write-Error "Automatic commit blocked: possible secret file staged."
    exit 2
}

if ([string]::IsNullOrWhiteSpace($staged)) {
    exit 0
}

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
git commit -m "chore: save Claude session changes ($timestamp)"
git push --set-upstream origin $branch
