import Link from 'next/link'
import { FileText, ExternalLink, Users, Calendar } from 'lucide-react'

interface ResearchCardProps {
  title: string
  authors: string[]
  venue: string
  year: number
  abstract: string
  pdfUrl?: string
  projectUrl?: string
}

export function ResearchCard({ title, authors, venue, year, abstract, pdfUrl, projectUrl }: ResearchCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300">
      {/* Year Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
          {year}
        </span>
        <div className="flex items-center space-x-2">
          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="PDF"
            >
              <FileText size={18} />
            </a>
          )}
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Project Page"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
        {title}
      </h3>

      {/* Authors */}
      <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-2">
        <Users size={14} className="mr-2 flex-shrink-0" />
        <span className="line-clamp-1">{authors.join(', ')}</span>
      </div>

      {/* Venue */}
      <div className="flex items-center text-sm text-slate-500 dark:text-slate-500 mb-4">
        <Calendar size={14} className="mr-2 flex-shrink-0" />
        <span className="italic">{venue}</span>
      </div>

      {/* Abstract */}
      <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
        {abstract}
      </p>
    </div>
  )
}
