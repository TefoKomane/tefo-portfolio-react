import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const SkillCategory = ({ title, skills }) => (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-gray-900">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-primary">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-900">{skill.name}</span>
              <span className="text-sm text-primary font-semibold">{skill.level}</span>
            </div>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary rounded-full h-2 transition-all duration-300"
                style={{
                  width: skill.level === 'Comfortable' ? '75%' : 
                         skill.level === 'Intermediate' ? '60%' : 
                         skill.level === 'Beginner' ? '40%' : '90%'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Technical Skills
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          I believe in being honest about my skill levels. I use "Building with" rather than "Experienced in" when I am starting out. This demonstrates growth and continuous learning.
        </p>

        <div className="space-y-12">
          <SkillCategory title="Frontend" skills={portfolioData.skills.frontend} />
          <SkillCategory title="Backend" skills={portfolioData.skills.backend} />
          <SkillCategory title="Database" skills={portfolioData.skills.database} />
          <SkillCategory title="Tools & Deployment" skills={portfolioData.skills.tools} />
        </div>
      </div>
    </section>
  );
}
