import PageLayout from '../components/PageLayout';

export default function About() {
  return (
    <PageLayout 
      title="关于 Toastmasters" 
      description="了解 Toastmasters 国际的使命、愿景和核心价值观。"
    >
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">使命宣言</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          我们为会员提供一个相互支持和积极学习的环境，让每一位会员都能够发展沟通和领导技能，从而建立自信并获得个人成长。
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">愿景</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          成为世界领先的沟通和领导力发展组织。
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">核心价值观</h2>
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <strong>诚信：</strong> 我们以诚实、诚信和道德行为为指导
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <strong>尊重：</strong> 我们尊重个体的独特性和价值
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <strong>服务：</strong> 我们以服务他人为荣
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <strong>卓越：</strong> 我们力求在所有努力中追求卓越
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}