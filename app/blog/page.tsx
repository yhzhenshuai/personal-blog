import Link from 'next/link'
import { BlogCard } from '../components/BlogCard'
import { getAllPosts, getAllTags } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            博客文章
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            记录学习过程、分享技术经验、总结生活感悟
          </p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <span className="text-sm text-slate-500 dark:text-slate-400 mr-2">标签：</span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              还没有文章
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              开始写你的第一篇博客吧！
            </p>
            <Link
              href="/admin"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
            >
              创建文章
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
