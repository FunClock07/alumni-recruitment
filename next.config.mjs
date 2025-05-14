const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/alumni-recruitment',      // ✅← GitHub PagesのURLに合わせる
  assetPrefix: '/alumni-recruitment',   // ✅← CSSや画像パスもこれで直る
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
}

export default nextConfig
