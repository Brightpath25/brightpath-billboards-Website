/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.preview.same-app.com"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cantmiss.us",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.bluelinemedia.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bpmobilebillboards.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/mobile-led-advertising",
        destination: "/events/off-season",
        permanent: true,
      },
      {
        source: "/services/event-domination",
        destination: "/events",
        permanent: true,
      },
      {
        source: "/services/targeted-campaigns",
        destination: "/quote",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
