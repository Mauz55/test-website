# Test Website

Klein testproject om de workflow **Claude → GitHub → Vercel → Live website** te
valideren, voordat dit patroon gebruikt wordt voor het echte Doea Tijd-project.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)

## Lokaal draaien

```bash
npm install
npm run dev
```

Open daarna [http://localhost:3000](http://localhost:3000).

## Deployen

Dit project is bedoeld om automatisch te deployen via Vercel, gekoppeld aan
deze GitHub-repository. Elke push naar `main` triggert een nieuwe deploy.
