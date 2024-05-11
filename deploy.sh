#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

git init
git add .
git commit -m 'feat: deploy'
git push -f https://github.com/Leon-Amazing/navigation-library.git master:gh-pages
