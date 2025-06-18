import { Metadata } from 'next';
import { ContactInfo } from '@/components/contact-info';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact | Personal Portfolio',
  description: 'Get in touch with me. Send a message or find my contact details.',
};

export default function ContactPage() {
  return (
    <section className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="md:order-2"> 
          <ContactForm />
        </div>
        <div className="md:order-1"> 
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}