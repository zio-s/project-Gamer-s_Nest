/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.rawg.io', 'via.placeholder.com'], // 허용할 도메인 추가

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
