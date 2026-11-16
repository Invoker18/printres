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

### Editing homepage services in Storyblok

Until a `Services` block is added to the homepage, the site displays its
default services section after the About block. Create the following nestable
Storyblok components, using these exact technical names and field names:

1. `ServiceItem`:
    - `Title`: Text
    - `Description`: Textarea
    - `Shape`: Asset (image, optional)
2. `Services`:
    - `Eyebrow` and `Title`: Text
    - `Description`: Textarea
    - `PortfolioLabel` and `EventsLabel`: Text
    - `Items`: Blocks, restricted to `ServiceItem`

Allow `Services` in the homepage Page component's `Body` field if that field
restricts allowed components. Add one `Services` block to Home's Body, position
it after About, and fill in the fields and service items before publishing.
The links point to the existing portfolio and events pages; leave either label
empty to hide its link. An item without a Shape uses one of the existing brand
figures. Once the block exists, it replaces the default section in both draft
and published content; it can then be edited and reordered in Storyblok.

The existing defaults are in `utils/services.ts` and can be copied into
Storyblok during setup. Deploy the application changes to the preview and
production environments before publishing the new block. Because the homepage
is prerendered, publish changes in Storyblok and redeploy the site to update the
production homepage; saving or publishing alone does not refresh its static
HTML.
