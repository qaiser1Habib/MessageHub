/** @type {import('next').NextConfig} */
const nextConfig = {
	appDir: true,
	swcPlugins: [["next-superjson-plugin", {}]],
	images: {
		domains: ["res.cloudinary.com", "lh3.googleusercontent.com", "avatar.githubusercontent.com"],
	},
};

export default nextConfig;
