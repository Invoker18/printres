# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## SEO and content

The canonical site URL is `https://www.printres.com.pa`. The sitemap includes
the main pages and published Storyblok events; its event source is refreshed
at runtime. Configure `STORYBLOK_ACCESS_TOKEN` when building. To override the
sitemap source's token at runtime, set `NUXT_STORYBLOK_ACCESS_TOKEN` on the
server.

The event and portfolio listings use server rendering so paginated URLs have
their own content and canonical metadata. Event detail pages are also rendered
on the server so unpublished events do not remain in prerendered output. Deploy
the Nuxt server rather than a static-only export.
