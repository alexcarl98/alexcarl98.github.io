import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'
import profilePic from '../assets/pfp.jpg'

interface ContactInfo {
    email: string;
    linkedin: string;
    github: string;
    phone: string;
  }
  
  const Header = () => {
    const contactInfo: ContactInfo = {
      email: "aalvar93@lion.lmu.edu",
      linkedin: "https://www.linkedin.com/in/alex-alvarez-06a131161/",
      github: "https://github.com/alexcarl98",
      phone: "310.728.0367"
    };
  
    return (
      <header className="text-center py-8">
        <div className="w-32 h-32 mx-auto mb-4 hover:scale-105 transition-transform duration-300">
          <img 
            src={profilePic} 
            alt="Alex Alvarez" 
            className="rounded-full w-full h-full object-cover border-2 border-gray-200 dark:border-gray-700 shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
          Alex Alvarez
          <span className="font-normal italic"> - Software Engineer</span>
        </h1>
        <div className="flex justify-center items-center gap-6 text-gray-700 dark:text-gray-500 flex-wrap">
          <a href={`mailto:${contactInfo.email}`} 
             className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <MdEmail className="text-xl" />
            <span className="hover:tracking-wider transition-all">{contactInfo.email}</span>
          </a>
          <a href={contactInfo.linkedin} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FaLinkedin className="text-xl" />
            <span className="hover:tracking-wider transition-all">LinkedIn</span>
          </a>
          <a href={contactInfo.github} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            <FaGithub className="text-xl" />
            <span className="hover:tracking-wider transition-all">Github</span>
          </a>
          <div className="flex items-center gap-2">
            <MdPhone className="text-xl" />
            <span className="hover:tracking-wider transition-all">{contactInfo.phone}</span>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;