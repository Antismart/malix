/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['ipfs.io'],
    },
    webpack: (config) => {
        config.resolve.fallback = {fs: false, net: false, tls: false};
        return config;
    },
    output: 'export',
};

export default nextConfig;
