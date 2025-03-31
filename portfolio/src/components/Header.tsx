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
        <h1 className="text-4xl font-bold mb-4">Alex Alvarez - Software Developer</h1>
        <div className="flex justify-center gap-4">
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> |
          <a href={contactInfo.linkedin}>LinkedIn</a> |
          <a href={contactInfo.github}>Github</a> |
          <span>{contactInfo.phone}</span>
        </div>
      </header>
    );
  };
  
  export default Header;