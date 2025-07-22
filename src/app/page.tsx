import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-blue-900 mb-6">
          Toastmasters 中文教程
        </h1>
        <h2 className="text-2xl text-blue-700 mb-8">
          开启你的沟通之旅
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          轻松掌握 Toastmasters，提升英语表达与领导力。
          为中文会员提供全面的指南，帮助您自信地参与会议、承担角色并实现个人成长。
        </p>
        <Link 
          href="/about"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          立即开始学习
        </Link>
      </section>

      {/* Why Choose Toastmasters Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          为什么选择 Toastmasters？
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🗣️</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">提升英语口语和听力</h3>
            <p className="text-gray-600">通过实践和反馈，快速提高英语沟通能力</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">👑</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">锻炼领导力</h3>
            <p className="text-gray-600">通过承担会议角色和执委职位，培养领导能力</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">扩大社交圈</h3>
            <p className="text-gray-600">结识志同道合的朋友，建立专业人脉网络</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">建立自信</h3>
            <p className="text-gray-600">在支持性环境中练习，逐步建立演讲和表达自信</p>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          快速导航
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link href="/about" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group">
            <div className="text-3xl mb-4">ℹ️</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3 group-hover:text-blue-600">关于 Toastmasters</h3>
            <p className="text-gray-600">了解 Toastmasters 国际的使命、愿景和核心价值观</p>
          </Link>

          <Link href="/meeting" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3 group-hover:text-blue-600">会议流程与角色</h3>
            <p className="text-gray-600">详细了解会议议程和各种角色的职责与要求</p>
          </Link>

          <Link href="/pathways" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group">
            <div className="text-3xl mb-4">🛤️</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3 group-hover:text-blue-600">Pathways 学习计划</h3>
            <p className="text-gray-600">探索学习路径，提升沟通和领导技能</p>
          </Link>

          <Link href="/contribute" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group">
            <div className="text-3xl mb-4">🤲</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3 group-hover:text-blue-600">俱乐部贡献与领导力</h3>
            <p className="text-gray-600">了解执行委员会角色和贡献机会</p>
          </Link>

          <Link href="/faq" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group">
            <div className="text-3xl mb-4">❓</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3 group-hover:text-blue-600">常见问题解答</h3>
            <p className="text-gray-600">找到关于 Toastmasters 的常见问题答案</p>
          </Link>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold mb-3">开始您的旅程</h3>
            <p className="text-blue-100">准备好提升您的沟通技能了吗？现在就开始探索！</p>
          </div>
        </div>
      </section>
    </div>
  );
}
