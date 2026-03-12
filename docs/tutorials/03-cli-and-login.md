# Tutorial 3: Install Firebase CLI and Log In

Install the Firebase CLI and sign in so your machine can talk to your Firebase project.

## Steps

1. **Install the Firebase CLI** (one-time, globally):
   ```bash
   npm install -g firebase-tools
   ```
   You need **Node 20+** (or 22+). If you get a Node version error, upgrade Node first.

2. **Log in to Firebase** (a browser window will open):
   ```bash
   firebase login
   ```
   Sign in with your Google account. When you see **“Success! Logged in as …”**, you’re done.

The CLI will use this login for all Firebase commands in this project.

**Next:** [Tutorial 4: Connect your app to Firebase (init hosting)](04-init-hosting.md)
