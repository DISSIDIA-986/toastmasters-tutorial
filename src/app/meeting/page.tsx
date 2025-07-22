import PageLayout from '../components/PageLayout';
import { meetingSteps, meetingRoles } from '@/data/meeting';

export default function Meeting() {

  return (
    <PageLayout 
      title="会议流程与角色" 
      description="详细了解 Toastmasters 会议议程和各种角色职责。"
    >
      <div className="space-y-16">
        {/* Meeting Flow Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Toastmasters 会议流程概览
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {meetingSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center text-center flex-1">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-4">
                    {step.icon}
                  </div>
                  <div className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-2">
                    步骤 {step.id}
                  </div>
                  <h3 className="font-semibold text-blue-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm px-2">{step.description}</p>
                  {index < meetingSteps.length - 1 && (
                    <div className="hidden md:block text-blue-400 text-2xl mt-4">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meeting Roles Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            主要会议角色详解
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetingRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{role.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">{role.title}</h3>
                <p className="text-gray-600 mb-4">{role.description}</p>
                
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
                  <div className="flex flex-wrap gap-2">
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

        {/* Tips Section */}
        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            如何扮演好这些角色？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-semibold text-blue-800 mb-2">提前准备</h3>
              <p className="text-gray-600">
                认真阅读角色说明，提前准备相关材料，确保对职责有清晰理解
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-blue-800 mb-2">熟悉流程</h3>
              <p className="text-gray-600">
                观察其他会员如何承担角色，学习最佳实践，逐步改进自己的表现
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-blue-808 mb-2">积极互动</h3>
              <p className="text-gray-600">
                主动与其他会员交流，营造支持性氛围，帮助所有人获得成长
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}