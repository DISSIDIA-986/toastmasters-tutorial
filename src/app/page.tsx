import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-blue-900 mb-6">
          Welcome to Your Toastmasters Journey 🎤
        </h1>
        <h2 className="text-3xl text-blue-700 mb-8 font-semibold">
          Master Communication & Leadership Skills
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Ready to become a more confident speaker and leader? This comprehensive guide will help you confidently participate in meetings, take on meaningful roles, and achieve personal growth. Whether you're overcoming your fear of public speaking or developing executive presence, we're here to support your journey.
        </p>
        <Link 
          href="/about"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          Start Your Learning Journey
        </Link>
      </section>

      {/* Why Choose Toastmasters Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Why Choose Toastmasters?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🗣️</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Improve English Speaking and Listening</h3>
            <p className="text-gray-600">Rapidly improve your English communication skills through practice and feedback</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">👑</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Develop Leadership Skills</h3>
            <p className="text-gray-600">Cultivate leadership ability by taking on meeting roles and executive positions</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Expand Your Network</h3>
            <p className="text-gray-600">Meet like-minded friends and build a professional network</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Build Confidence</h3>
            <p className="text-gray-600">Practice in a supportive environment and gradually build speaking confidence</p>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Quick Navigation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link href="/about" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group">
            <div className="text-3xl mb-4">ℹ️</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3 group-hover:text-blue-600">About Toastmasters</h3>
            <p className="text-gray-600">Discover our mission, vision, and core values. Learn why Toastmasters transforms lives and careers through communication and leadership development.</p>
          </Link>

          <Link href="/meeting" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3 group-hover:text-blue-600">Meeting Process & Roles</h3>
            <p className="text-gray-600">Understand what to expect in a meeting, learn about 9 different roles, and discover the TAG Team. Master the structure and flow of every gathering.</p>
          </Link>

          <Link href="/pathways" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group">
            <div className="text-3xl mb-4">🛤️</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3 group-hover:text-blue-600">Learning Pathways</h3>
            <p className="text-gray-600">Explore 10 specialized learning paths designed to develop the specific skills you need. From presentation mastery to strategic leadership.</p>
          </Link>

          <Link href="/contribute" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group">
            <div className="text-3xl mb-4">🤲</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3 group-hover:text-blue-600">Contributions & Leadership</h3>
            <p className="text-gray-600">Discover ways to contribute to club success and learn about executive leadership opportunities. Make a meaningful impact in our community.</p>
          </Link>

          <Link href="/faq" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group">
            <div className="text-3xl mb-4">❓</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3 group-hover:text-blue-600">Frequently Asked Questions</h3>
            <p className="text-gray-600">Find answers to common questions about membership, roles, scheduling, fees, and how to get started on your Toastmasters journey.</p>
          </Link>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold mb-3">Ready to Begin?</h3>
            <p className="text-blue-100">Your communication journey starts with a single step. Explore the resources above and take control of your growth today!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
