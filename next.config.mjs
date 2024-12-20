// import createMDX from '@next/mdx';
import { withContentlayer } from "next-contentlayer";
import createMDX from '@next/mdx'

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: [
      'dev-to-uploads.s3.amazonaws.com',
      'pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev',
      'magicui.design',
    ],
  },
};

// If you still need MDX support, uncomment the following:
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withContentlayer(nextConfig);
