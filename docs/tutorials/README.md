# Firebase Hosting + GitHub — Tutorials

Step-by-step tutorials to create a Firebase app, set up Hosting, connect GitHub, and deploy. Each part is a short, focused tutorial you can follow in order.

---

## The big picture: “Opening a shop”

| Concept | Analogy | What it really is |
|--------|---------|--------------------|
| **Firebase project** | Your **business registration** | A container in Google’s cloud for your app. One “business” per app. |
| **Your code** | The **product** | The app you build; `npm run build` packages it into `dist`. |
| **Firebase Hosting** | The **storefront** | Where your built app is served (e.g. `yourapp.web.app`). |
| **GitHub** | Your **workshop + ledger** | Where you keep and version code. |
| **GitHub Actions workflow** | The **delivery truck** | On push/merge: builds and deploys to Hosting. |
| **Deploy** | **Open the store** | Put the latest build on the storefront. |

**In one sentence:** You code in the workshop (GitHub). When you push to `main`, the truck (GitHub Action) builds and deploys to the storefront (Firebase Hosting). Visitors see the result at your Hosting URL.

---

## Tutorials (in order)

| # | Tutorial | What you’ll do |
|---|----------|----------------|
| 1 | [Prerequisites](01-prerequisites.md) | Check Node, Git, and accounts. |
| 2 | [Create a Firebase project](02-create-firebase-project.md) | Create your “business” in the Firebase Console. |
| 3 | [Install Firebase CLI and log in](03-cli-and-login.md) | Install the CLI and authenticate. |
| 4 | [Connect your app to Firebase (init hosting)](04-init-hosting.md) | Link your folder to a project and set up Hosting + optional GitHub. |
| 5 | [How Hosting and GitHub fit together](05-workflow.md) | Understand manual vs automatic deploy. |
| 6 | [GitHub Secrets](06-github-secrets.md) | Give the workflow permission to deploy. |
| 7 | [Deploy](07-deploy.md) | Deploy automatically (push) or manually (CLI). |
| 8 | [Checklist and quick reference](08-checklist-and-reference.md) | Final checklist and command cheat sheet. |
| 9 | [Troubleshooting](09-troubleshooting.md) | Common errors and fixes. |

Start with **Tutorial 1** and work through in order. When you’re done, you’ll have: Firebase project → Hosting → GitHub repo → workflow → live site.
