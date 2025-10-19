import PageLayout from '../components/PageLayout';
import { meetingSteps, meetingRoles } from '@/data/meeting';

export default function Meeting() {

  return (
    <PageLayout 
      title="Meeting Process and Roles" 
      description="Learn about Toastmasters meeting agenda and various role responsibilities."
    >
      <div className="space-y-16">
        {/* Meeting Timeline Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Typical Meeting Timeline
          </h2>
          <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Most Toastmasters meetings follow a structured 60-80 minute format. Here's what happens during a typical meeting:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
              <div className="font-semibold text-blue-800 mb-1">6:10 - 6:15 PM</div>
              <div className="text-gray-600 text-sm">Meet & Greet + Introductions</div>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
              <div className="font-semibold text-blue-800 mb-1">6:15 - 6:25 PM</div>
              <div className="text-gray-600 text-sm">Opening + Meeting Support Roles Introduction</div>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
              <div className="font-semibold text-green-800 mb-1">6:25 - 7:01 PM</div>
              <div className="text-gray-600 text-sm">Prepared Speeches (typically 3 speakers)</div>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
              <div className="font-semibold text-green-800 mb-1">7:01 - 7:09 PM</div>
              <div className="text-gray-600 text-sm">Table Topics (Impromptu Speaking)</div>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
              <div className="font-semibold text-purple-800 mb-1">7:09 - 7:20 PM</div>
              <div className="text-gray-600 text-sm">Evaluations & Support Roles Reports</div>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
              <div className="font-semibold text-purple-800 mb-1">7:20 - 7:30 PM</div>
              <div className="text-gray-600 text-sm">Announcements, Recognition & Adjournment</div>
            </div>
          </div>
        </section>

        {/* Meeting Flow Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Meeting Structure & Flow
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {meetingSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center text-center flex-1">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-4">
                    {step.icon}
                  </div>
                  <div className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-2">
                    Step {step.id}
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
            Key Meeting Roles Explained
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetingRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{role.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">{role.title}</h3>
                <p className="text-gray-600 mb-4">{role.description}</p>
                
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
            Tips for Success in Your Roles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">📚</span>
                Before Your First Role
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Read the role instructions and responsibilities carefully</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Watch experienced members perform the role</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Ask questions and seek guidance from club leaders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Prepare materials or forms in advance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                During Your Role
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Focus on your specific responsibilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Be enthusiastic and supportive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Communicate clearly and confidently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Remember that everyone is learning too</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">💬</span>
                Giving Evaluations
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span><strong>Commend:</strong> Start with what the speaker did well</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span><strong>Recommend:</strong> Offer 1-2 specific suggestions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span><strong>Commend:</strong> End on a positive note</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Be specific, kind, and constructive</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🚀</span>
                Continuous Improvement
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Seek feedback from other members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Try different roles to develop diverse skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Participate regularly to build confidence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Remember: Progress, not perfection!</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* TAG Team Section */}
        <section className="bg-green-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
            The "TAG Team" - Meeting Support Roles
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
            The <strong>Timer</strong>, <strong>Ah-Counter</strong>, and <strong>Grammarian</strong> roles form the "TAG Team" - important support roles that help all members develop specific speaking and communication skills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="font-semibold text-blue-800 mb-2">Timer</h3>
              <p className="text-sm text-gray-600 mb-4">
                Helps members develop time management skills by providing visual signals
              </p>
              <ul className="text-xs text-gray-600 text-left space-y-2">
                <li>🟢 Green: Speak freely</li>
                <li>🟡 Yellow: 1 min left</li>
                <li>🔴 Red: Time's up</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-4xl mb-3">👂</div>
              <h3 className="font-semibold text-blue-800 mb-2">Ah-Counter</h3>
              <p className="text-sm text-gray-600 mb-4">
                Tracks filler words (um, ah, like) to help speakers develop cleaner speech patterns
              </p>
              <p className="text-xs text-gray-600 font-semibold">
                Helps eliminate verbal crutches and fillers
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-semibold text-blue-800 mb-2">Grammarian</h3>
              <p className="text-sm text-gray-600 mb-4">
                Introduces a "Word of the Day" and recognizes excellent language use
              </p>
              <p className="text-xs text-gray-600 font-semibold">
                Enhances vocabulary and grammatical awareness
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}