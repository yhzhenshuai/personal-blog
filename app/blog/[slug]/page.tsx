import Link from 'next/link'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return {
      title: '文章未找到',
    }
  }
  return {
    title: `${post.title} | 我的博客`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const categoryLabels: Record<string, string> = {
    daily: '日常',
    config: '配置',
    project: '项目',
    research: '科研',
  }

  const categoryColors: Record<string, string> = {
    daily: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    config: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    project: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    research: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          返回博客列表
        </Link>

        {/* Article Header */}
        <header className="mb-10">
          {/* Category */}
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${categoryColors[post.category]}`}>
            {categoryLabels[post.category] || '其他'}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
            <span className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <time dateTime={post.date}>
                {format(new Date(post.date), 'yyyy年MM月dd日', { locale: zhCN })}
              </time>
            </span>
            <span className="flex items-center">
              <Clock size={16} className="mr-2" />
              {post.readingTime}
            </span>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <Tag size={16} className="text-slate-400" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <article
          className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-headings:dark:text-white prose-p:text-slate-700 prose-p:dark:text-slate-300 prose-a:text-primary-600 prose-a:dark:text-primary-400 prose-strong:text-slate-900 prose-strong:dark:text-white prose-code:text-pink-600 prose-code:dark:text-pink-400 prose-pre:bg-slate-900 prose-pre:dark:bg-slate-950"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400 text-sm">
              感谢阅读！如果觉得有帮助，欢迎分享。
            </span>
            <div className="flex items-center space-x-4">
              <button className="text-slate-400 hover:text-red-500 transition-colors">
                ❤️ 点赞
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// 简单的 Markdown 转 HTML 函数
function renderMarkdown(content: string): string {
  return content
    // 代码块
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="p-4 rounded-lg overflow-x-auto"><code>$2</code></pre>')
    // 行内代码
    .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-sm">$1</code>')
    // 标题
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    // 粗体
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // 斜体
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // 链接
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
    // 列表
    .replace(/^\- (.*$)/gim, '<li class="ml-4">$1</li>')
    // 段落
    .replace(/\n\n/g, '</p><p class="mt-4">')
    // 包装在段落中
    .replace(/^(.+)$/gim, '<p class="mt-4">$1</p>')
    // 清理空段落
    .replace(/<p class="mt-4"><\/p>/g, '')
    .replace(/<p class="mt-4">(<h[123].*?<\/h[123]>)<\/p>/g, '$1')
    .replace(/<p class="mt-4">(<pre[\s\S]*?<\/pre>)<\/p>/g, '$1')
    .replace(/<p class="mt-4">(<li.*?>.*?<\/li>)<\/p>/g, '$1')
}
