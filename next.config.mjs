/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'projectvgg-tes-apiv3.s3.eu-central-1.amazonaws.com',
            }
        ]
    }
};

export default nextConfig;
