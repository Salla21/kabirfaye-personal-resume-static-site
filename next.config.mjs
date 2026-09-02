// For GitHub Pages *project* sites (https://<user>.github.io/<repo>/), assets
// are served from a subpath. The deploy workflow sets NEXT_PUBLIC_BASE_PATH to
// "/<repo>". For Vercel or a user site, leave it unset and it stays "".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
