/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	compiler: {
		styledComponents: true, // 스타일컴포넌트 설정 (서버사이드에서 스타일 적용하기 위해서는 pages/_document.tsx 커스텀 문서 작성)
	},
	async rewrites() { 
		return [
			{
				source: "/:path*",
				destination: "http://localhost:8080/:path*"
			},
		]
	},
	
	
}

module.exports = nextConfig;
