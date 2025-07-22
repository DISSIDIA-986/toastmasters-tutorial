import PageLayout from '../components/PageLayout';
import { contributionWays, executiveRoles, whyJoinExec } from '@/data/contribute';

export default function Contribute() {

  return (
    <PageLayout 
      title="俱乐部贡献与领导力" 
      description="了解执行委员会角色和如何为俱乐部做出贡献。"
    >
      <div className="space-y-16">
        {/* Ways to Contribute Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            超越自我：如何为俱乐部贡献？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contributionWays.map((way, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4">{way.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">{way.title}</h3>
                    <p className="text-gray-600 mb-3">{way.description}</p>
                    <div className="bg-green-50 p-3 rounded-lg mb-3">
                      <p className="text-green-700 font-medium text-sm">💡 影响: {way.impact}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">具体行动：</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {way.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Executive Committee Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            执行委员会 (Executive Committee) 简介
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{role.icon}</div>
                  <h3 className="text-lg font-semibold text-blue-800">{role.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{role.timeCommitment}</p>
                </div>
                <p className="text-gray-600 mb-4 text-center">{role.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-700 mb-2">主要职责：</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {role.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">能力提升：</h4>
                  <div className="flex flex-wrap gap-1">
                    {role.benefits.map((benefit, idx) => (
                      <span key={idx} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Join Executive Committee Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            为什么参与执委？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyJoinExec.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">如何开始贡献？</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="font-semibold text-blue-800 mb-3">从小事开始</h3>
                <p className="text-gray-600 mb-4">
                  先从简单的贡献开始，如协助会议准备、承担基础角色
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 主动承担会议角色</li>
                  <li>• 帮助新会员适应</li>
                  <li>• 参与俱乐部活动</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-semibold text-blue-800 mb-3">学习和观察</h3>
                <p className="text-gray-600 mb-4">
                  观察现任执委的工作方式，学习领导和管理经验
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 参加执委会议（旁听）</li>
                  <li>• 与现任执委交流</li>
                  <li>• 了解各角色职责</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold text-blue-800 mb-3">勇于承担</h3>
                <p className="text-gray-600 mb-4">
                  当准备好时，勇敢地竞选执委职位，为俱乐部发展贡献力量
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 准备竞选演讲</li>
                  <li>• 制定工作计划</li>
                  <li>• 获得会员支持</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}