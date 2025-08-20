/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "res.cloudinary.com"
            },
            {
                hostname: "cdn.dummyjson.com"
            },
            {
                hostname: "dummyjson.com"
            }
        ]}
};

export default nextConfig;
