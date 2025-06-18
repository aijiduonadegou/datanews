import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    basePath: '/out', // 所有资源路径自动添加 /out 前缀
    assetPrefix: '/out/', // 静态资源（JS/CSS/图片）路径适配

};

export default nextConfig;
