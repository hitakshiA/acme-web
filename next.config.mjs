/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // v2.30.1: the embed needs sandbox allowances on Safari
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https:; script-src 'self' 'unsafe-inline' https://js.stripe.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
