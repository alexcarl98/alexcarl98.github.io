import { useEffect, useState } from 'react';
import { FaGithub, FaStar } from 'react-icons/fa';
import { BiGitRepoForked } from 'react-icons/bi';

interface ProjectItem {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

const Projects = () => {
  const [githubData, setGithubData] = useState<Record<string, GitHubRepo>>({});

  const projects: ProjectItem[] = [
    {
      title: "rat",
      date: "January 2024 – Present",
      description: "Led creation of a statically typed programming language merging Python's syntactic elegance with C's performance.",
      technologies: ["JavaScript", "Node.js"],
      link: "https://github.com/conda-language/rat"
    },
    {
      title: "lane-detection",
      date: "December 2023 – Present",
      description: "Developed an AI-based application using OpenCV and Python to detect lane lines from dashcam videos.",
      technologies: ["Python", "OpenCV"],
      link: "https://github.com/joanna-estrada/lane-detection"
    },
  ];

  useEffect(() => {
    const fetchGitHubData = async () => {
      const repoData: Record<string, GitHubRepo> = {};
      
      for (const project of projects) {
        if (project.link && project.link.includes('github.com')) {
          const [, , , owner, repo] = project.link.split('/');
          try {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
            const data = await response.json();
            repoData[project.title] = data;
          } catch (error) {
            console.error(`Error fetching ${project.title}:`, error);
          }
        }
      }
      
      setGithubData(repoData);
    };

    fetchGitHubData();
  }, []);

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const githubRepo = githubData[project.title];
          
          return (
            <div key={project.title} className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2"
                    >
                      <FaGithub className="text-2xl" />
                       {project.title}
                    </a>
                  </h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{project.date}</span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                
                {githubRepo && (
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      {githubRepo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <BiGitRepoForked />
                      {githubRepo.forks_count}
                    </div>
                    {githubRepo.language && (
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                        {githubRepo.language}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
