# Git workflow

- This is the canonical repository for julianlopez.site.
- At the start of every session, run `git status --short` and check the current branch.
- Never use `git push --force`.
- Never commit `.env`, credentials, API keys, tokens, or private keys.
- At the end of a completed task, commit the changes with a descriptive message and push to GitHub.
- Never push directly to `main` unless explicitly requested.
- If the build fails, do not commit or push; explain the failure instead.

# Repo structure

- Blog posts live entirely in `lib/posts.ts` — add or edit posts there.
- Website path: `H:\Vibes\AEO Agency\julianlopez-site`
- GitHub remote: https://github.com/jlvisualdg/julianlopez-site
- Deploys automatically via GitHub Actions on push to main → julianlopez.site
