import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          {portfolioData.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">My Journey</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {portfolioData.about.journey}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {portfolioData.about.intro}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">My Philosophy</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {portfolioData.about.philosophy}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {portfolioData.about.growth}
            </p>
          </div>
        </div>

        <div className="mt-12 p-8 bg-white rounded-lg shadow-md border-l-4 border-primary">
          <p className="text-lg text-gray-900 font-semibold">
            {portfolioData.about.goal}
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-8 text-gray-900">My Core Values</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {portfolioData.values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-primary mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
