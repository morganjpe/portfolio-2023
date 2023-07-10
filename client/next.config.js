/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: "/dist",
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
