import { ResearchCard } from '../components/ResearchCard'

export default function ResearchPage() {
  const papers = [
    {
      title: '基于深度学习的图像识别方法研究',
      authors: ['张三', '李四', '王五'],
      venue: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)',
      year: 2024,
      abstract: '本文提出了一种新颖的深度学习架构，在图像识别任务上取得了 state-of-the-art 的性能。我们的方法通过引入注意力机制和自适应特征融合，显著提升了模型在多尺度目标检测上的表现。',
      pdfUrl: '#',
      projectUrl: '#',
    },
    {
      title: '自然语言处理中的知识图谱增强方法',
      authors: ['张三', '赵六'],
      venue: 'Annual Meeting of the Association for Computational Linguistics (ACL)',
      year: 2023,
      abstract: '本研究探索了如何将知识图谱融入预训练语言模型，以提升模型在常识推理任务上的性能。我们提出了一种新的知识注入方法，在多个基准数据集上取得了显著改进。',
      pdfUrl: '#',
      projectUrl: '#',
    },
    {
      title: '联邦学习中的隐私保护机制研究',
      authors: ['张三', '钱七', '孙八'],
      venue: 'IEEE Transactions on Information Forensics and Security',
      year: 2023,
      abstract: '针对联邦学习中的隐私泄露问题，本文提出了一种新的差分隐私保护机制。理论分析和实验结果表明，我们的方法在保护隐私的同时，能够保持较高的模型精度。',
      pdfUrl: '#',
    },
    {
      title: '图神经网络在半监督学习中的应用',
      authors: ['张三', '周九'],
      venue: 'Neural Information Processing Systems (NeurIPS)',
      year: 2022,
      abstract: '本文提出了一种改进的图神经网络架构，专门针对标签稀缺的半监督学习场景。通过引入自监督预训练任务，我们的方法在节点分类任务上取得了优异的性能。',
      pdfUrl: '#',
      projectUrl: '#',
    },
  ]

  const researchInterests = [
    { name: '深度学习', description: '神经网络架构设计、优化算法' },
    { name: '计算机视觉', description: '目标检测、图像分割、图像生成' },
    { name: '自然语言处理', description: '预训练模型、知识图谱、问答系统' },
    { name: '隐私计算', description: '联邦学习、差分隐私、安全多方计算' },
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            科研成果
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            我的研究兴趣集中在人工智能和机器学习领域，以下是我的论文发表记录
          </p>
        </div>

        {/* Research Interests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {researchInterests.map((interest) => (
            <div
              key={interest.name}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                {interest.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {interest.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: '发表论文', value: '12' },
            { label: '引用次数', value: '300+' },
            { label: 'h-index', value: '8' },
            { label: '合作项目', value: '5' },
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

        {/* Papers Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            发表论文
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {papers.map((paper) => (
              <ResearchCard key={paper.title} {...paper} />
            ))}
          </div>
        </div>

        {/* Conference Presentations */}
        <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">学术会议演讲</h2>
          <div className="space-y-4">
            {[
              { title: '深度学习在计算机视觉中的应用', event: 'AI Summit 2024', date: '2024年3月' },
              { title: '联邦学习的最新进展', event: 'Tech Conference 2023', date: '2023年11月' },
            ].map((talk) => (
              <div key={talk.title} className="flex items-center justify-between bg-white/10 rounded-lg p-4">
                <div>
                  <h3 className="font-semibold">{talk.title}</h3>
                  <p className="text-white/80 text-sm">{talk.event}</p>
                </div>
                <span className="text-white/60 text-sm">{talk.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
