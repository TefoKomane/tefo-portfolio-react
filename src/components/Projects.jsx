import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
<section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
          My Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Every project demonstrates a specific skill and solves a real problem. Each includes a case study explaining my thinking, not just my output.
        </p>

        <div className="space-y-12">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">
                    {project.title}
                  </h3>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Problem</h4>
                    <p className="text-gray-700">{project.problem}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Solution</h4>
                    <p className="text-gray-700">{project.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors text-center"
                    >
                      View Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center"
                    >
                      View Code
                    </a>
                  </div>
                </div>

                <div>
                  <div className="bg-white p-6 rounded-lg space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">Skills Demonstrated</h4>
                      <ul className="space-y-2">
                        {project.skills.map((skill, index) => (
                          <li key={index} className="text-gray-700 flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="text-lg font-semibold text-primary mb-2">Challenges</h4>
                      <p className="text-gray-700 text-sm">{project.challenges}</p>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="text-lg font-semibold text-primary mb-2">What I Learned</h4>
                      <p className="text-gray-700 text-sm">{project.learned}</p>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="text-lg font-semibold text-primary mb-2">Future Improvements</h4>
                      <p className="text-gray-700 text-sm">{project.improvements}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-primary text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
          <p className="text-lg opacity-90">
            I am continuously building new projects to demonstrate my growing skills. Check back soon for additional case studies and live applications.
          </p>
        </div>
      </div>
    </section>
  );
}
