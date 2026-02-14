# 个人博客网站

一个基于 Next.js + TypeScript + Tailwind CSS 构建的现代化个人博客。

## ✨ 特性

- 🎨 现代化设计 - 简洁美观的 UI，支持深色/浅色主题切换
- 📝 Markdown/MDX 支持 - 使用 Markdown 编写文章，支持代码高亮
- 🏷️ 分类标签 - 支持日常、配置、项目、科研四大分类
- 📱 响应式布局 - 完美适配桌面和移动设备
- 🔍 SEO 优化 - 自动生成 meta 标签，支持搜索引擎优化
- ⚡ 高性能 - 静态生成，快速加载
- 🆓 免费部署 - 支持 Vercel 免费部署

## 📁 项目结构

```
.
├── app/                    # Next.js App Router
│   ├── blog/              # 博客相关页面
│   ├── projects/          # 项目展示页面
│   ├── research/          # 科研成果页面
│   ├── about/             # 关于页面
│   ├── components/        # 组件
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # 通用组件
├── content/               # 博客内容
│   └── posts/            # 博客文章 (MDX)
├── lib/                   # 工具函数
├── public/                # 静态资源
├── next.config.js         # Next.js 配置
└── tailwind.config.ts     # Tailwind 配置
```

## 🚀 开始使用

### 1. 安装依赖

```bash
npm install
```

### 2. 本地开发

```bash
npm run dev
```

访问 http://localhost:3000

### 3. 构建

```bash
npm run build
```

## 📝 添加文章

在 `content/posts/` 目录下创建 `.mdx` 文件：

```markdown
---
title: "文章标题"
date: "2024-01-20"
category: "daily"  # daily | config | project | research
tags: ["标签1", "标签2"]
excerpt: "文章摘要"
---

# 正文内容

支持 Markdown 语法和 JSX 组件
```

## 🌐 部署到 Vercel

### 方式一：GitHub + Vercel (推荐)

1. 在 GitHub 创建新仓库
2. 上传代码到 GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repo.git
   git push -u origin main
   ```
3. 登录 [Vercel](https://vercel.com)
4. 点击 "Add New Project"
5. 导入 GitHub 仓库
6. 点击 Deploy

### 方式二：Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel

# 生产环境部署
vercel --prod
```

## 🎨 自定义

### 修改个人信息

编辑 `app/about/page.tsx` 中的个人信息。

### 修改项目信息

编辑 `app/projects/page.tsx` 中的项目列表。

### 修改科研成果

编辑 `app/research/page.tsx` 中的论文列表。

### 修改主题色

编辑 `tailwind.config.ts` 中的 colors 配置。

## 📄 许可证

MIT License
