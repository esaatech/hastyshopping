# Tutorial 5: How Hosting and GitHub Fit Together

Two ways to get your app onto Firebase Hosting:

## Manual deploy (no GitHub)

1. Build locally: `npm run build`
2. Deploy: `firebase deploy`

The CLI uploads the contents of `dist` to Hosting. Good for quick tests.

## Automatic deploy (with GitHub)

1. You push code to GitHub (e.g. `git push origin main`).
2. GitHub Actions runs the workflow.
3. The workflow checks out the code, runs `npm ci && npm run build`, then deploys `dist` to Hosting using a Firebase token.
4. Your live site updates.

**Summary:** GitHub is where the code lives and where the build runs. Firebase Hosting is where the built app is served. The workflow is the bridge between them.

**Next:** [Tutorial 6: GitHub Secrets](06-github-secrets.md)
