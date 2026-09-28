# JobPortal (CareerGrid)

A job-discovery demo app I built while exploring frontend design and UX. It's a small "CareerGrid" style product: register/login, browse jobs, view job details, save jobs, and track applications through a simple pipeline — all running entirely in the browser. The focus was less on backend logic and more on making the product look and feel polished and easy to use.

## Which journey I chose and why

I picked the job portal / job-discovery journey (register → login → browse jobs → view details → save/apply → track pipeline) because it gives a realistic reason to design several different screen types — auth forms, a browsable list, a detail page, and a dashboard-style tracker — in one connected product. That variety let me practice visual design and UX flow across different contexts instead of just one screen.

## Key Design Decisions

- **Visual Impact:** A single dark theme with one lime-green accent used sparingly for highlights gives the app a modern, focused look instead of a generic admin-panel feel.
- **Creative Problem Solving:** A profile-based match % and a kanban-style pipeline board turn plain job data into features that feel like a real product.
- **Attention to Detail:** Consistent spacing, rounded corners, and border colors across inputs, and the navbar.
- **Intuitive Navigation:** A simple navbar plus login/logout redirects make sure users always land on the right page.
- **Mobile Experience:** Every main page reflows into a single column on smaller screens so it still works well on mobile.

## Technologies Used

- Angular
- TypeScript
- HTML
- CSS
- Local Storage
- Git & GitHub
- VS Code

## Setup Instructions

Prerequisites: Node.js `^22.22.3`, `^24.15.0`, or `>=26.0.0`, and npm.

```bash
npm install
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

There's no backend to configure — everything runs client-side against mock data and `localStorage`.

## What I Would Improve With More Time

- Replace `localStorage` with a real backend so accounts and saved jobs aren't just a local demo trick — needed before this could be a real product.
- Micro-interactions and transitions (button hover/press states, page transitions, loading skeletons) to make the app feel more alive instead of static.
- Empty and error states — right now the UI assumes happy-path data; no designed "no saved jobs yet" or "search returned nothing" screens.
- Accessibility pass — ARIA labels, keyboard navigation, and visible focus states, especially on the pipeline board and save/apply actions.

## Screenshots

- Login
- Profile
- Job Discovery
- Job Details
- Pipeline
- Saved Jobs