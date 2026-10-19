/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Retired routes from the previous site → their new homes.
  async redirects() {
    return [
      { source: "/resume", destination: "/about", permanent: true },
      { source: "/services", destination: "/#capabilities", permanent: true },
      { source: "/creation", destination: "/", permanent: true },
      { source: "/social", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
