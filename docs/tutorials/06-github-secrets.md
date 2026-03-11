# Tutorial 6: GitHub Secrets (Permission to Deploy)

The workflow needs permission to deploy to **your** Firebase project. That’s done with a **Firebase token** stored as a **GitHub secret**.

## If you set up GitHub during `firebase init hosting`

The CLI may have already added the secret (e.g. `FIREBASE_SERVICE_ACCOUNT_<PROJECT_ID>`). If deploys work, you can skip this tutorial.

## If the workflow fails with an auth error

Add the secret yourself:

1. **Get the token** (one-time):
   ```bash
   firebase login:ci
   ```
   Complete the browser login. The CLI prints a long token. Copy it.

2. **Add it in GitHub**
   - Repo → **Settings** → **Secrets and variables** → **Actions**.
   - **New repository secret**.
   - **Name:** exactly what the workflow expects. Open `.github/workflows/firebase-hosting-merge.yml` and find the secret name (e.g. `FIREBASE_SERVICE_ACCOUNT_HASTYSHOPPING_2E946`).
   - **Value:** the token from step 1.

After this, the “delivery truck” can deploy to your Hosting.

**Next:** [Tutorial 7: Deploy](07-deploy.md)
