// import createMDX from '@next/mdx';
import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: [
      'dev-to-uploads.s3.amazonaws.com',
      'pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev',
      'magicui.design',
      'source.unsplash.com', // Added 'source.unsplash.com' to the list of domains
    ],
  },
};

export default withContentlayer(nextConfig);
