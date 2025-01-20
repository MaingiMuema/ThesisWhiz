# ThesisWhiz

ThesisWhiz is an AI-powered research paper generation platform that uses DeepSeek AI agents to create structured, high-quality academic papers from simple prompts.

## Features

- User-friendly interface for research paper generation
- Multiple AI agents working in parallel for different paper components
- Real-time progress tracking
- Downloadable Word documents
- Secure and private paper generation

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## System Requirements

- Node.js 18+
- npm or yarn
- At least 4GB RAM recommended

## Environment Variables

Create a `.env.local` file with:

```
DEEPSEEK_API_KEY=your_api_key_here
```

## Architecture

ThesisWhiz uses multiple specialized AI agents:

- Outline Agent: Creates paper structure
- Content Agent: Generates section content
- Format Agent: Handles formatting and citations
- Review Agent: Quality assurance and coherence

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
