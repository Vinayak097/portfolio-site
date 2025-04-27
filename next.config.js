/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'cdn.jsdelivr.net', 'placehold.co', 'api.microlink.io'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' redis-chat-neon.vercel.app ai-mock-interview-neon-iota.vercel.app blogging-app-seven-psi.vercel.app;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
