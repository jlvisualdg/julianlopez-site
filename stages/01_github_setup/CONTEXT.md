# GitHub Setup — Stage Contract
> Layer 2 · Stage 1 of 3 · Last Updated: 2026-06-16

## Inputs
- Layer 4 (working): None (first stage — uses existing source code in `Hub/`)
- Layer 3 (reference): ../../_config/tech_stack.md — Next.js deployment guidelines
- Layer 3 (reference): references/github_workflow.md — GitHub best practices (to be created)
- Layer 3 (reference): references/deployment_checklist.md — Pre-deployment checklist (to be created)
- Source code: `Hub/` folder (existing Next.js application)

## Process

1. **Analyze Existing Codebase**
   - Review Next.js project structure in `Hub/`
   - Identify current configuration (package.json, next.config.mjs, tsconfig.json)
   - Check for any existing Git configuration
   - Verify dependencies and build scripts

2. **GitHub Repository Setup**
   - Create new GitHub repository (repository name: authority-hub or similar)
   - Initialize local Git repository in `Hub/` folder
   - Create .gitignore file if not present (Next.js standard)
   - Configure Git user information

3. **Repository Configuration**
   - Add remote origin to GitHub repository
   - Create initial commit with all source files
   - Push to main branch
   - Configure branch protection rules (require PRs, status checks)

4. **Deployment Platform Setup**
   - Choose deployment platform (Netlify or Vercel recommended)
   - Connect GitHub repository to deployment platform
   - Configure build settings (Next.js framework)
   - Set up environment variables if needed

5. **CI/CD Workflow Configuration**
   - Create GitHub Actions workflow for automated testing
   - Configure deployment triggers (push to main)
   - Set up preview deployments for pull requests
   - Configure automatic rollback on failed deployments

6. **Domain & DNS Configuration**
   - If custom domain available, configure DNS settings
   - Set up SSL certificates (automatic with most platforms)
   - Configure domain redirects if needed
   - Test domain accessibility

7. **Post-Deployment Verification**
   - Deploy initial production version
   - Verify all pages load correctly
   - Test responsive design on mobile devices
   - Check Core Web Vitals and Lighthouse scores
   - Verify structured data is present

## Outputs
- `github_setup_plan.md` → output/ — Detailed GitHub and deployment plan
- `deployment_workflow.md` → output/ — CI/CD workflow configuration
- `post_deployment_report.md` → output/ — Deployment verification results
- `repository_url.txt` → output/ — GitHub repository URL
- `production_url.txt` → output/ — Live production site URL

## Constraints
- **Business Objective:** Deploy Authority Hub to production with automated CI/CD pipeline
- **Technical Constraints:** Next.js 14, TypeScript, Tailwind CSS, GitHub for source control
- **Deployment Constraints:** Use free tier initially (Netlify/Vercel), ensure scalability
- **Security Constraints:** Secure repository, proper access controls, no secrets in code
- **Do NOT:** Deploy without testing, expose sensitive information, skip CI/CD setup
- **Quality Requirements:** All pages must load correctly, mobile responsive, accessible

## Human Review Gate

Before Stage 02 (CLI Optimization) runs:
- Review and approve GitHub setup plan
- Verify repository configuration is correct
- Test deployment workflow manually
- Confirm production site is accessible
- Approve CI/CD pipeline configuration
- **This is where deployment decisions happen — do not proceed without approval**

## Success Criteria

Stage completion is confirmed when:
- [ ] GitHub repository created and configured
- [ ] Source code successfully pushed to repository
- [ ] Deployment platform connected and configured
- [ ] CI/CD workflow operational
- [ ] Production site deployed and accessible
- [ ] All pages load without errors
- [ ] Basic functionality verified

## Known Issues & Considerations

- **Existing .gitignore:** Check if Hub/ folder already has .gitignore
- **Dependencies:** Verify all dependencies are up to date
- **Environment Variables:** Identify if any environment variables are needed
- **Domain:** Custom domain may not be available initially — use platform subdomain
- **Build Configuration:** Ensure Next.js build configuration is correct for deployment platform

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2026-06-16 | Stage contract created | System |

---

**Status:** Ready to execute — awaiting human review and approval to proceed