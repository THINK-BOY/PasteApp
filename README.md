# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## THIS APP MADE WITH HELP OF LOVE BABBAR UTUBE VIDEO // COMPLETE WEB DEV WITH MERN STACK - VIDEO NO - 76





Got it 👍 You want to create a **new branch** for your CSS changes, then merge it back into **main** once you’re done. Here’s a step-by-step guide:

---

### 1. Create and switch to a new branch

In your local project folder (where your Git repo is), run:

```bash
git checkout -b css-changes
```

* `checkout -b` creates and switches to the new branch.
* Replace `css-changes` with any branch name you prefer.

---

### 2. Make your CSS changes

Edit your CSS files as needed, then stage and commit:

```bash
git add .
git commit -m "Updated CSS styles"
```

---

### 3. Push the branch to GitHub

```bash
git push origin css-changes
```

---

### 4. Open a Pull Request (recommended)

* Go to your GitHub repo in the browser.
* You’ll see a prompt to create a **Pull Request** from `css-changes` → `main`.
* Review your changes, then click **Merge Pull Request**.

*(This is the safer, more standard way.)*

---

### 5. Or merge locally (alternative way)

If you want to merge without a Pull Request:

First switch to `main`:

```bash
git checkout main
```

Update `main` with the latest from GitHub:

```bash
git pull origin main
```

Merge your branch into `main`:

```bash
git merge css-changes
```

Push merged changes back to GitHub:

```bash
git push origin main
```

---

👉 Do you want me to also show you **how to delete the branch after merging** (to keep your repo clean), or do you prefer keeping it?
