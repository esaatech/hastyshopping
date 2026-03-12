# Tutorial 4: Connect Your App to Firebase (Init Hosting)

Link your app folder to your Firebase project and set up Hosting (and optionally GitHub deploys).

## Steps

1. **Open your app folder in the terminal**
   ```bash
   cd path/to/your-app
   ```
   Example: `cd ~/Documents/react/hastyshopping`

2. **Start Hosting setup**
   ```bash
   firebase init hosting
   ```

3. **Answer the prompts**

   | Prompt | What to choose | Why |
   |--------|----------------|-----|
   | Use an existing project / Create new | **Use an existing project** | You created the project in the console. |
   | Select project | Your project (e.g. **HastyShopping**) | Links this folder to that project. |
   | Public directory | **dist** | Hosting deploys the *contents* of this folder. Vite/CRA build writes here. |
   | Single-page app? | **Yes** | All routes serve `index.html`; your router handles the rest. |
   | Set up GitHub deploys? | **Yes** (recommended) | Creates the workflow that builds and deploys on push/merge. |
   | GitHub repo | `your-username/repo-name` | Repo where the workflow will run. |
   | Run build before deploy? | **Yes** | Workflow will run the build before deploying. |
   | Build script | **npm ci && npm run build** | Install deps and build; output goes to `dist`. |
   | Deploy to live on PR merge? | **Yes** (optional) | Merge to `main` → auto-deploy to live. |

4. **What was created**
   - **`firebase.json`** — Hosting config (public directory, rewrites).
   - **`.firebaserc`** — Which Firebase project this folder uses.
   - **`.github/workflows/`** — GitHub Actions that build and deploy.

Your workshop (this folder + GitHub) is now linked to your Firebase project, and the storefront (Hosting) and delivery truck (workflow) are configured.

**Next:** [Tutorial 5: How Hosting and GitHub fit together](05-workflow.md)
