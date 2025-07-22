#!/bin/bash
set -e

echo "🚀 开始部署到 GitHub Pages..."

# 设置环境变量确保正确的路径
export NODE_ENV=production
export GITHUB_ACTIONS=true

echo "📦 清理旧的构建文件..."
rm -rf out/

echo "🔨 构建项目..."
npm run build

echo "📋 检查构建输出..."
if [ ! -d "out" ]; then
  echo "❌ 构建失败：out 目录不存在"
  exit 1
fi

echo "🌐 部署到 GitHub Pages..."
npx gh-pages -d out -b gh-pages

echo "✅ 部署完成！"
echo "🔗 访问: https://dissidia-986.github.io/toastmasters-tutorial/"