import PageLayout from '../components/PageLayout';
import Accordion from '../components/Accordion';
import { faqItems } from '@/data/faq';

export default function FAQ() {

  return (
    <PageLayout 
      title="Frequently Asked Questions" 
      description="Find answers to common questions about Toastmasters."
    >
      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="bg-blue-50 rounded-lg p-6">
          <p className="text-lg text-gray-700 text-center">
            Below are frequently asked questions from new members and potential members. If you have any other questions, please feel free to contact us or attend a club meeting for consultation.
          </p>
        </section>

        {/* FAQ Accordion */}
        <section>
          <Accordion items={faqItems} />
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            If the above answers didn't solve your problem, we'd be happy to help you further!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-semibold text-blue-800 mb-2">Attend a Meeting</h3>
              <p className="text-sm text-gray-600">
                Attend a club meeting as a guest and interact directly with members
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌐</div>
              <h3 className="font-semibold text-blue-800 mb-2">Official Website</h3>
              <p className="text-sm text-gray-600">
                Visit toastmasters.org for more official information
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-semibold text-blue-800 mb-2">Contact Your Club</h3>
              <p className="text-sm text-gray-600">
                Contact your local club directly for specific details
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}