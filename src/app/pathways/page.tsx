import PageLayout from '../components/PageLayout';
import { pathwayPaths, pathwaysProcess } from '@/data/pathways';

export default function Pathways() {

  return (
    <PageLayout 
      title="Pathways Learning Plan" 
      description="Explore Pathways learning tracks to enhance your communication and leadership skills."
    >
      <div className="space-y-16">
        {/* What is Pathways Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">What is Pathways?</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pathways is Toastmasters' core learning program designed to enhance communication and leadership skills.
              It emphasizes &ldquo;self-paced&rdquo; and &ldquo;personalized learning&rdquo; features, allowing each member to choose the appropriate development path based on their interests and goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-blue-800 mb-2">Personalized Learning</h3>
                <p className="text-gray-600 text-sm">Customize your learning path based on your personal goals and interests</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-3">⏰</div>
                <h3 className="font-semibold text-blue-800 mb-2">Self-Paced</h3>
                <p className="text-gray-600 text-sm">Complete projects and speeches at your own pace</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="font-semibold text-blue-800 mb-2">Continuous Growth</h3>
                <p className="text-gray-600 text-sm">Continuously enhance your skills through practice and feedback</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pathways Process Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            How Pathways Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pathwaysProcess.map((process, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {process.step}
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
            Available Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathwayPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{path.icon}</div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {path.name}
                </h3>
                <p className="text-gray-600 mb-4">{path.description}</p>
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Key Focus Areas:</h4>
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
            How Pathways Helps You Improve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-semibold text-blue-800 mb-3">Structured Learning Framework</h3>
              <p className="text-gray-600">
                Systematic course design progressing from basics to advanced, gradually enhancing your abilities
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-blue-800 mb-3">Practice Opportunities and Professional Feedback</h3>
              <p className="text-gray-600">
                Practice speeches in a supportive environment and receive constructive feedback from experienced members
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-semibold text-blue-800 mb-3">Expand Communication and Leadership Skills</h3>
              <p className="text-gray-600">
                Beyond presentation skills, develop leadership, teamwork, and other core workplace competencies
              </p>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Getting Started Recommendations</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Recommended Paths for New Members</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <div>
                      <strong>Presentation Mastery:</strong> Ideal for members who want to quickly improve speaking skills
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <div>
                      <strong>Leadership Development:</strong> Suitable for members with management experience or aspirations
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <div>
                      <strong>Team Collaboration:</strong> Perfect for members focused on teamwork and cooperation
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Tips for Your First Project</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <div>Choose a topic you're familiar with for your first speech</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <div>Read the project guidelines and evaluation criteria carefully</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <div>Seek advice and guidance from experienced members</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    <div>Practice multiple times in small groups or club meetings</div>
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