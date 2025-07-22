#!/bin/bash

# Toastmasters 中文指南 GitHub Pages 部署脚本
# 作者: Claude Code
# 日期: 2025-07-22

set -e  # 遇到错误时退出

echo "🚀 开始部署 Toastmasters 中文指南到 GitHub Pages"
echo "=========================================="

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ 错误: 请在项目根目录运行此脚本${NC}"
    exit 1
fi

# 检查是否为git仓库
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ 错误: 当前目录不是git仓库${NC}"
    exit 1
fi

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  警告: 有未提交的更改${NC}"
    echo "请先提交或暂存所有更改，然后再运行部署脚本"
    git status --short
    exit 1
fi

# 检查当前分支
current_branch=$(git branch --show-current)
echo -e "${BLUE}📋 当前分支: $current_branch${NC}"

# 确保在main分支
if [ "$current_branch" != "main" ]; then
    echo -e "${YELLOW}⚠️  当前不在main分支，切换到main分支${NC}"
    git checkout main
fi

# 获取最新代码
echo -e "${BLUE}🔄 拉取最新代码...${NC}"
git pull origin main

# 设置环境变量确保正确的路径
export NODE_ENV=production
export GITHUB_ACTIONS=true
echo -e "${BLUE}🔧 设置环境变量: NODE_ENV=production${NC}"

# 安装依赖
echo -e "${BLUE}📦 安装依赖...${NC}"
npm ci

# 运行代码检查
echo -e "${BLUE}🧹 运行代码检查...${NC}"
npm run lint

# 清理旧的构建文件
echo -e "${BLUE}🗑️  清理旧的构建文件...${NC}"
rm -rf out/

# 构建项目
echo -e "${BLUE}🏗️  构建项目...${NC}"
npm run build

# 检查构建结果
if [ ! -d "out" ]; then
    echo -e "${RED}❌ 构建失败: out目录不存在${NC}"
    exit 1
fi

# 检查必要的文件是否存在
if [ ! -f "out/index.html" ]; then
    echo -e "${RED}❌ 构建失败: index.html不存在${NC}"
    exit 1
fi

echo -e "${GREEN}✅ 构建成功${NC}"

# 创建.nojekyll文件
echo -e "${BLUE}📄 创建.nojekyll文件...${NC}"
touch out/.nojekyll

# 显示构建统计
echo -e "${BLUE}📊 构建统计:${NC}"
echo "文件总数: $(find out -type f | wc -l)"
echo "目录大小: $(du -sh out | cut -f1)"

# 部署到GitHub Pages
echo -e "${BLUE}🚀 部署到GitHub Pages...${NC}"
npx gh-pages -d out -b gh-pages

echo -e "${GREEN}✅ 部署成功！${NC}"
echo -e "${GREEN}🌐 网站地址: https://dissidia-986.github.io/toastmasters-tutorial/${NC}"

echo -e "${GREEN}🎉 部署完成！${NC}"
echo "=========================================="
echo "部署信息:"
echo "  - 分支: gh-pages"
echo "  - 网站: https://dissidia-986.github.io/toastmasters-tutorial/"
echo "  - 时间: $(date '+%Y-%m-%d %H:%M:%S')"
echo ""
echo "请在GitHub仓库设置中启用Pages功能："
echo "  Settings > Pages > Source > Deploy from a branch > gh-pages"