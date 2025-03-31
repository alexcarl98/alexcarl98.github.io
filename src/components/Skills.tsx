const Skills = () => {
  const skillCategories = {
    "Programming Languages": [
      "Python", "C", "C++", "R", "Javascript", 
      "Assembly Language", "SQL", "MongoDB", "Lua"
    ],
    "Technical": [
      "Data Modeling", "Unit Testing", "Computer Vision",
      "Data Structures", "Pandas", "Numpy", "MatplotLib",
      "OpenCV", "Scikit Learn", "PyTorch", "Linux",
      "Command Line", "Bash", "Git", "Github CI/CD",
      "Microsoft Office Suite"
    ],
    "Personal": [
      "Strong Research Skills",
      "Team Collaboration/Communication",
      "Creative Problem Solving"
    ]
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">SKILLS</h2>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="mb-4">
          <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
