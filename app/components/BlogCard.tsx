import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'

interface BlogCardProps {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime?: string
  category: string
}

const categoryColors: Record<string, string> = {
  daily: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  config: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  project: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  research: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
}

const categoryLabels: Record<string, string> = {
  daily: '日常',
  config: '配置',
  project: '项目',
  research: '科研',
}

export function BlogCard({ slug, title, date, excerpt, tags, readingTime, category }: BlogCardProps) {
  return (
    <article className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300">
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${categoryColors[category] || categoryColors.daily}`}>
          {categoryLabels[category] || '其他'}
        </span>
        {readingTime && (
          <span className="flex items-center text-xs text-slate-500 dark:text-slate-400">
            <Clock size={14} className="mr-1" />
            {readingTime}
          </span>
        )}
      </div>

      {/* Title */}
      <Link href={`/blog/${slug}`}>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
          {title}
        </h2>
      </Link>

      {/* Excerpt */}
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
        {excerpt}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
          <Calendar size={14} className="mr-1" />
          <time dateTime={date}>
            {format(new Date(date), 'yyyy年MM月dd日', { locale: zhCN })}
          </time>
        </div>

        {/* Tags */}
        <div className="flex items-center space-x-2">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded"
            >
              <Tag size={12} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
