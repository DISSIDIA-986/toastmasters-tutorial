#!/bin/bash

set -e

# 导航到项目目录
cd /Users/niuyp/Documents/github.com/toastmasters-tutorial

# 配置git
git config user.name "Claude"
git config user.email "claude@example.com"

# 添加所有文件
git add -A

# 提交更改
git commit -m "优化课程内容和UI表述 - 基于Spoken Word最佳实践

- 优化FAQ答案，增加更具体的建议和资源
- 强调TAG Team角色和Base Camp资源
- 改进首页Hero和导航描述，更具吸引力
- 扩充About页面，添加任务定义和价值说明
- 增强Pathways路径描述和技能聚焦
- 完善贡献方式和执行角色的详细说明
- 所有内容与参考指南保持一致"

# 推送到远程
git push origin main

# 执行部署脚本
bash scripts/deploy.sh

echo "✅ 提交、推送和部署完成！"
