/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'referrer-Policy', value: 'no-referrer' }
                ]
            }
        ]
    }
};

export default nextConfig;
