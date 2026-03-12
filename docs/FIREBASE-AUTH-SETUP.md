## Firebase Auth + Firestore setup (for this app)

### 1) Create a Firebase Web App (Console)
- **Firebase Console** → your project → **Project settings** → **Your apps** → **Web app**
- Copy the config values into a new local file:
  - Create `.env.local` (not committed)
  - Use `.env.example` as the template

### 2) Enable Auth providers
- Console → **Authentication** → **Sign-in method**
- Enable:
  - **Email/Password**
  - **Google** (if you want the “Continue with Google” buttons to work)

### 3) Create Firestore database
- Console → **Firestore Database**
- Create a database (test mode for now while prototyping)

Collections we write today:
- `users/{uid}`: basic profile + role (`buyer` or `seller`)
- `sellerApplications/{uid}`: seller application details + `status: pending`

### 4) “Cached login” behavior
We use Firebase Auth **local persistence**, so once a user logs in, the session survives refresh/reopen. The app also listens to `onAuthStateChanged` in `AuthProvider`.

### 5) Django backend later
We keep “API layer + types” so later you can replace Firebase calls with Django endpoints while keeping UI/hooks stable:
- `src/api/firebaseAuth.js` is the current adapter
- `src/api/endpoints.js` remains the placeholder for Django HTTP endpoints
- Types remain in `src/types/*` to describe request/response shapes

