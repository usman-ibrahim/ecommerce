/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        MONGODB_URI: "mongodb://localhost:27017/ecomerce"
    }
};

export default nextConfig;
