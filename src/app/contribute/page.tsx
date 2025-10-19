import PageLayout from '../components/PageLayout';
import { contributionWays, executiveRoles, whyJoinExec } from '@/data/contribute';

export default function Contribute() {

  return (
    <PageLayout 
      title="Club Contributions and Leadership" 
      description="Learn about executive committee roles and how to contribute to the club."
    >
      <div className="space-y-16">
        {/* Ways to Contribute Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Go Beyond Yourself: How to Contribute to Your Club?
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
                      <p className="text-green-700 font-medium text-sm">💡 Impact: {way.impact}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Specific Actions:</h4>
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
            Executive Committee Overview
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
                  <h4 className="font-semibold text-blue-700 mb-2">Main Responsibilities:</h4>
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
                  <h4 className="font-semibold text-green-700 mb-2">Skills Developed:</h4>
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
            Why Join the Executive Committee?
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
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">How to Start Contributing?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="font-semibold text-blue-800 mb-3">Start Small</h3>
                <p className="text-gray-600 mb-4">
                  Start with simple contributions, such as helping with meeting preparation and taking on basic roles
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Volunteer for meeting roles</li>
                  <li>• Help new members adapt</li>
                  <li>• Participate in club activities</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-semibold text-blue-800 mb-3">Learn and Observe</h3>
                <p className="text-gray-600 mb-4">
                  Observe how current executives work and learn from their leadership and management experience
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Attend executive meetings (as observer)</li>
                  <li>• Connect with current executives</li>
                  <li>• Understand each role's responsibilities</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold text-blue-800 mb-3">Take the Challenge</h3>
                <p className="text-gray-600 mb-4">
                  When ready, courageously run for an executive position to contribute to club development
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Prepare your election speech</li>
                  <li>• Develop your action plan</li>
                  <li>• Gain member support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}