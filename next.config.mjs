/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    agentFeedback: true,
  },
  reactCompiler: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
       
      },
    ],
  },

};

export default nextConfig;