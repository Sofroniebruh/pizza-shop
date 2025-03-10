import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.dodostatic.net",
                pathname: "/image/**",
            },
        ],
    },
};

export default nextConfig;
