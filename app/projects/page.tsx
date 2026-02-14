import { ProjectCard } from '../components/ProjectCard'

export default function ProjectsPage() {
  const projects = [
    {
      title: '智能数据分析平台',
      description: '基于机器学习的全自动数据分析平台，支持数据清洗、特征工程和可视化。集成了多种主流机器学习算法，支持自动化模型选择和超参数优化。',
      tags: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.example.com',
      stars: 128,
    },
    {
      title: '个人博客系统',
      description: '使用 Next.js 和 Tailwind CSS 构建的现代化博客系统，支持 Markdown/MDX、深色模式、代码高亮等功能。',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
      githubUrl: 'https://github.com',
      stars: 56,
    },
    {
      title: '分布式任务调度系统',
      description: '高性能的分布式任务调度框架，支持定时任务、延时任务和实时任务，具备自动故障转移和负载均衡能力。',
      tags: ['Go', 'Redis', 'Docker', 'Kubernetes', 'gRPC'],
      githubUrl: 'https://github.com',
      stars: 234,
    },
    {
      title: '移动端阅读应用',
      description: '跨平台移动阅读应用，支持 EPUB、PDF 等格式，具备笔记、高亮、云同步等功能。',
      tags: ['React Native', 'TypeScript', 'Expo', 'SQLite'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://apps.apple.com',
    },
    {
      title: 'VS Code 扩展插件',
      description: '提升开发效率的 VS Code 扩展，包含代码片段、智能提示、格式化工具等功能。',
      tags: ['TypeScript', 'VS Code API'],
      githubUrl: 'https://github.com',
      stars: 89,
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            项目展示
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            这里展示我参与开发的开源项目和个人作品，欢迎Star和贡献代码
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: '总项目数', value: '15+' },
            { label: '开源项目', value: '8' },
            { label: 'Stars', value: '500+' },
            { label: 'Forks', value: '100+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center border border-slate-200 dark:border-slate-700"
            >
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
