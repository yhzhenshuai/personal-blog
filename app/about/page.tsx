import Image from 'next/image'
import { Mail, Github, Twitter, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react'

export default function AboutPage() {
  const skills = {
    '编程语言': ['Python', 'TypeScript', 'Go', 'C++', 'Java'],
    '前端开发': ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
    '后端开发': ['Node.js', 'FastAPI', 'Django', 'PostgreSQL', 'Redis'],
    '人工智能': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV'],
    'DevOps': ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Linux'],
  }

  const experiences = [
    {
      title: '高级算法工程师',
      company: '某知名科技公司',
      period: '2022 - 至今',
      description: '负责计算机视觉算法的研发，主导多个核心项目的算法设计和优化。',
    },
    {
      title: '研究助理',
      company: '某大学实验室',
      period: '2020 - 2022',
      description: '从事深度学习和自然语言处理方向的研究，发表多篇学术论文。',
    },
  ]

  const education = [
    {
      degree: '计算机科学硕士',
      school: '某知名大学',
      period: '2018 - 2020',
      description: '研究方向：机器学习与数据挖掘',
    },
    {
      degree: '软件工程学士',
      school: '某重点大学',
      period: '2014 - 2018',
      description: '主修课程：数据结构、算法设计、操作系统、计算机网络',
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar */}
            <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-bold text-white">我</span>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                你的名字
              </h1>
              <p className="text-lg text-primary-600 dark:text-primary-400 mb-4">
                算法工程师 / 研究员 / 开源爱好者
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                热爱技术，专注于人工智能和软件工程领域。
                喜欢探索新技术，热衷于开源社区，致力于用技术解决实际问题。
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-600 dark:text-slate-400">
                <span className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  中国 · 北京
                </span>
                <span className="flex items-center">
                  <Briefcase size={16} className="mr-1" />
                  某知名科技公司
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
                <a
                  href="mailto:your.email@example.com"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Award className="mr-2" />
            技能专长
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <Briefcase className="mr-2" />
            工作经历
          </h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-primary-600 dark:text-primary-400">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <GraduationCap className="mr-2" />
            教育背景
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-primary-600 dark:text-primary-400">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-2">
                  {edu.school}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
