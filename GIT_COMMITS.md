# Suggested Git commits (minimum 8 needed)

Make a commit after each step, so your history shows real progress:

```bash
git init
git add package.json next.config.mjs jsconfig.json postcss.config.mjs tailwind.config.js .gitignore .env.example
git commit -m "chore: set up Next.js, Tailwind CSS and DaisyUI"

git add lib/constants.js lib/format.js lib/api.js lib/product-utils.js lib/change-style.js
git commit -m "feat: add API helpers and Bangla number/date formatting"

git add app/layout.js app/globals.css components/layout components/ui public
git commit -m "feat: add navbar, price ticker and footer"

git add components/home components/products "app/(home)" app/not-found.js app/error.js app/icon.svg
git commit -m "feat: build home page with hero, price movers and sortable product grid"

git add "app/category" 
git commit -m "feat: add category page with skeleton, sorting and empty state"

git add lib/auth.js lib/auth-client.js lib/auth-messages.js lib/session.js "app/api"
git commit -m "feat: configure BetterAuth with MongoDB, Google and GitHub"

git add components/auth app/signin app/signup
git commit -m "feat: add sign in and sign up pages with toast messages"

git add components/product "app/product"
git commit -m "feat: add protected product details page with market price table"

git add components/profile app/profile
git commit -m "feat: add profile page and update information page"

git add README.md GIT_COMMITS.md
git commit -m "docs: add README with features and setup guide"

git branch -M main
git remote add origin https://github.com/YOUR-NAME/bazardor.git
git push -u origin main
```
