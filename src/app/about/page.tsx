import PageLayout from '../components/PageLayout';

export default function About() {
  return (
    <PageLayout 
      title="About Toastmasters" 
      description="Learn about Toastmasters International's mission, vision, and core values."
    >
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-blue-600 pl-4 bg-blue-50 py-4">
            "We provide our members with a mutually supportive and positive learning environment where they can develop communication and leadership skills, build self-confidence, and achieve personal growth."
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">What Toastmasters Empowers</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Toastmasters International empowers individuals to become more effective communicators and leaders. Through our supportive and positive learning environment, members develop communication and leadership skills that help them succeed in all aspects of life - both personally and professionally.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-semibold">
            To be the world's premier organization for communication and leadership development.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Integrity</h3>
              <p className="text-gray-700">We are guided by honesty, integrity, and ethical conduct in all our actions and decisions.</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Respect</h3>
              <p className="text-gray-700">We respect the unique qualities and value of each individual, celebrating our diversity and differences.</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Service</h3>
              <p className="text-gray-700">We are dedicated to serving others, our clubs, and our communities with excellence.</p>
            </div>
            <div className="border-l-4 border-yellow-600 pl-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Excellence</h3>
              <p className="text-gray-700">We strive for excellence in all our endeavors, continuously improving and growing.</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Why Join Toastmasters?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <span className="text-3xl mr-4">🗣️</span>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Improve Communication</h3>
                <p className="text-gray-700">Develop public speaking, presentation, and interpersonal communication skills in a supportive environment.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-3xl mr-4">👑</span>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Develop Leadership</h3>
                <p className="text-gray-700">Build leadership abilities through taking on roles and leading club initiatives.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-3xl mr-4">🚀</span>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Build Confidence</h3>
                <p className="text-gray-700">Overcome fear of public speaking and develop greater self-confidence in all situations.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-3xl mr-4">🤝</span>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Expand Your Network</h3>
                <p className="text-gray-700">Meet like-minded individuals and build meaningful professional and personal relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}