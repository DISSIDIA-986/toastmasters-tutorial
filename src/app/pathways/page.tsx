import PageLayout from '../components/PageLayout';
import { pathwayPaths, pathwaysProcess } from '@/data/pathways';

export default function Pathways() {

  return (
    <PageLayout 
      title="Pathways 学习计划" 
      description="探索 Pathways 学习路径，提升您的沟通和领导技能。"
    >
      <div className="space-y-16">
        {/* What is Pathways Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">什么是 Pathways？</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pathways 是 Toastmasters 的核心学习项目，旨在提升沟通和领导力。
              它强调&ldquo;自定进度&rdquo;、&ldquo;个性化学习&rdquo;的特点，让每位会员都能根据自己的兴趣和目标选择合适的发展路径。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-blue-800 mb-2">个性化学习</h3>
                <p className="text-gray-600 text-sm">根据个人目标和兴趣定制学习路径</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-3">⏰</div>
                <h3 className="font-semibold text-blue-800 mb-2">自定进度</h3>
                <p className="text-gray-600 text-sm">按照自己的节奏完成项目和演讲</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="font-semibold text-blue-800 mb-2">持续成长</h3>
                <p className="text-gray-600 text-sm">通过实践和反馈不断提升能力</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pathways Process Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Pathways 的运作方式
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pathwaysProcess.map((process, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {process.step} ({process.english})
                </h3>
                <p className="text-gray-600 mb-4">{process.description}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {process.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="text-blue-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Available Paths Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            可选择的学习路径
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathwayPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{path.icon}</div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {path.chinese}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{path.name}</p>
                <p className="text-gray-600 mb-4">{path.description}</p>
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">主要关注点：</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.focus.map((item, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-green-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Pathways 如何帮助你提升
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-semibold text-blue-800 mb-3">结构化的学习框架</h3>
              <p className="text-gray-600">
                系统性的课程设计，从基础到高级，循序渐进地提升你的能力
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-blue-800 mb-3">实践机会和专业反馈</h3>
              <p className="text-gray-600">
                在支持性环境中练习演讲，获得经验丰富的会员的建设性反馈
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-semibold text-blue-800 mb-3">拓展沟通和领导力技能</h3>
              <p className="text-gray-600">
                不仅提升演讲能力，更培养领导力、团队协作等职场核心技能
              </p>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">入门建议</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">新会员推荐路径</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <div>
                      <strong>Presentation Mastery:</strong> 适合想要快速提升演讲技能的会员
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <div>
                      <strong>Leadership Development:</strong> 适合有管理经验或志向的会员
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <div>
                      <strong>Team Collaboration:</strong> 适合注重团队合作的会员
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">首次项目建议</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <div>选择自己熟悉的话题作为首次演讲主题</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <div>仔细阅读项目指南和评估标准</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <div>向经验丰富的会员寻求建议和指导</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <div>在小组或俱乐部会议中多次练习</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}