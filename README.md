# URL Shortener

A simple and efficient URL shortener built with **Next.ts**.

## Features
- Shorten long URLs into compact links
- Custom alias support - (comming soon...)
- URL analytics (click tracking, expiration, etc.)
- API endpoints for programmatic usage
- Deployed on **Vercel** as using next ts for seamless performance

## Tech Stack
- **Frontend & Backend:** Next.js (App Router)
- **Database:** MongoDB (via Prisma)
- **Hosting:** Vercel
- **Styling:** Tailwind CSS

## Getting Started

### Prerequisites
Ensure you have **Node.js** and **npm/yarn/pnpm** installed.

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
npm install  # or yarn install or pnpm install
```

### Environment Variables
Create a `.env.local` file in the root directory and add the following:

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Run the Development Server
Start the Next.js development server:

```bash
npm run dev  # or yarn dev or pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

| Method | Endpoint     | Description          |
|--------|-------------|----------------------|
| POST   | /api/shorten | Shorten a new URL   |
| GET    | /:shortCode | Redirect to full URL |

## Deployment

Deploy on **Vercel** with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or manually deploy using:

```bash
vercel --prod
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

## License
This project is licensed under the [MIT License](LICENSE).
