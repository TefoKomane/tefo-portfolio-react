import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          I am always interested in hearing about new opportunities, collaborations, or just having a conversation about software development and technology.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          <a
            href={`mailto:${portfolioData.email}`}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <img src="/gmail-icon.png" alt="Email" style={{ width: '48px', height: '48px', margin: '0 auto 16px' }} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-blue-600 font-semibold">{portfolioData.email}</p>
          </a>

          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <img src="/github-icon.png" alt="GitHub" style={{ width: '48px', height: '48px', margin: '0 auto 16px' }} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">GitHub</h3>
            <p className="text-blue-600 font-semibold">View My Code</p>
          </a>

          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <img src="/linkedin-icon.png" alt="LinkedIn" style={{ width: '48px', height: '48px', margin: '0 auto 16px' }} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-blue-600 font-semibold">Connect With Me</p>
          </a>
        </div>

        <div className="bg-white p-12 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Send Me A Message
          </h3>
          
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            Note: This form is a placeholder. To send me a message, please use the email address above or connect on LinkedIn.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Location: {portfolioData.location}
          </p>
        </div>
      </div>
    </section>
  );
}
