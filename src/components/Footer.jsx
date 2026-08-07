import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          <div>
            <h3 className="text-xl font-bold mb-4">Tefo Komane</h3>
            <p className="text-gray-400 text-sm">
              Full Stack Software Developer building technology that solves real problems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${portfolioData.email}`} className="hover:text-white transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">My Mission</h4>
            <p className="text-gray-400 text-sm">
              Build software that solves meaningful problems while continuously developing into a dependable Full Stack Software Developer.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright {currentYear} Tefo Karabo Komane. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Built with React, Tailwind CSS and Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
