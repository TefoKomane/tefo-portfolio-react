import { portfolioData } from '../data/portfolioData';

export default function CareerVision() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          My Career Vision
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Current Goal</h3>
            <p className="text-lg leading-relaxed">
              {portfolioData.careerVision.current}
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">5 Year Vision</h3>
            <ul className="space-y-4">
              {portfolioData.careerVision.fiveYear.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span className="text-gray-700">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">10 Year Vision</h3>
            <ul className="space-y-4">
              {portfolioData.careerVision.tenYear.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span className="text-gray-700">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">My Philosophy</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {portfolioData.philosophy.map((item, index) => (
              <div key={index} className="bg-blue-600 text-white p-6 rounded-lg text-center hover:bg-purple-700 transition-colors">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
