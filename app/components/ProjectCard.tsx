import Link from 'next/link'
import { ExternalLink, Github, Star } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  stars?: number
}

export function ProjectCard({ title, description, tags, githubUrl, demoUrl, stars }: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-lg">{title[0]}</span>
        </div>
        <div className="flex items-center space-x-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              aria-label="Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stars */}
      {stars !== undefined && (
        <div className="flex items-center mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
          <Star size={14} className="text-yellow-500 fill-yellow-500 mr-1" />
          <span className="text-sm text-slate-600 dark:text-slate-400">{stars} stars</span>
        </div>
      )}
    </div>
  )
}
