import PageLayout from '../components/PageLayout';
import Accordion from '../components/Accordion';
import { faqItems } from '@/data/faq';

export default function FAQ() {

  return (
    <PageLayout 
      title="常见问题解答" 
      description="找到关于 Toastmasters 的常见问题答案。"
    >
      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="bg-blue-50 rounded-lg p-6">
          <p className="text-lg text-gray-700 text-center">
            以下是新会员和潜在会员经常提出的问题。如果您还有其他疑问，欢迎联系我们或参加俱乐部会议进行咨询。
          </p>
        </section>

        {/* FAQ Accordion */}
        <section>
          <Accordion items={faqItems} />
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">还有疑问？</h2>
          <p className="text-gray-600 mb-6">
            如果以上答案没有解决您的问题，我们很乐意为您提供更多帮助！
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-semibold text-blue-800 mb-2">参加会议</h3>
              <p className="text-sm text-gray-600">
                作为客人参加俱乐部会议，直接与会员交流
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌐</div>
              <h3 className="font-semibold text-blue-800 mb-2">官方网站</h3>
              <p className="text-sm text-gray-600">
                访问 toastmasters.org 获取更多官方信息
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-semibold text-blue-800 mb-2">联系俱乐部</h3>
              <p className="text-sm text-gray-600">
                直接联系当地俱乐部了解具体详情
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}