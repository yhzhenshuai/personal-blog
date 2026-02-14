import Link from 'next/link'
import { ArrowRight, BookOpen, FolderGit2, FlaskConical, Terminal } from 'lucide-react'
import { BlogCard } from './components/BlogCard'
import { ProjectCard } from './components/ProjectCard'
import { ResearchCard } from './components/ResearchCard'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts().slice(0, 3)

  const featuredProjects = [
    {
      title: '智能数据分析平台',
      description: '基于机器学习的全自动数据分析平台，支持数据清洗、特征工程和可视化。',
      tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.example.com',
    },
    {
      title: '个人博客系统',
      description: '使用 Next.js 和 Tailwind CSS 构建的现代化博客系统，支持 Markdown 和深色模式。',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
    },
  ]

  const featuredResearch = [
    {
      title: '基于深度学习的图像识别方法研究',
      authors: ['张三', '李四', '王五'],
      venue: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)',
      year: 2024,
      abstract: '本文提出了一种新颖的深度学习架构，在图像识别任务上取得了 state-of-the-art 的性能。',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-medium mb-6">
            👋 欢迎来到我的个人空间
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            记录<span className="text-primary-600 dark:text-primary-400">成长</span>，分享<span className="text-purple-600 dark:text-purple-400">知识</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
            这里记录我的日常、环境配置、项目开发和科研成果。希望这些内容对你有所帮助。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
            >
              浏览博客
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">内容分类</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog?category=daily" className="group">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center border border-slate-200 dark:border-slate-700 hover:border-green-400 dark:hover:border-green-500 transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen size={28} className="text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">日常记录</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">生活感悟、读书笔记、随笔</p>
              </div>
            </Link>
            <Link href="/blog?category=config" className="group">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Terminal size={28} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">环境配置</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">开发环境、工具配置、踩坑记录</p>
              </div>
            </Link>
            <Link href="/projects" className="group">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FolderGit2 size={28} className="text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">项目开发</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">开源项目、个人作品、技术实践</p>
              </div>
            </Link>
            <Link href="/research" className="group">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center border border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-500 transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FlaskConical size={28} className="text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">科研成果</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">论文发表、研究项目、学术活动</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      {posts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">最新文章</h2>
              <Link
                href="/blog"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
              >
                查看全部
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">精选项目</h2>
            <Link
              href="/projects"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
            >
              查看全部
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Research Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">科研成果</h2>
            <Link
              href="/research"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
            >
              查看全部
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {featuredResearch.map((paper) => (
              <ResearchCard key={paper.title} {...paper} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
