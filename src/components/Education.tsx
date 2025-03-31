interface EducationItem {
    school: string;
    degree: string;
    period: string;
    gpa: string;
    coursework: string;
  }
  
  const Education = () => {
    const education: EducationItem[] = [
      {
        school: "Loyola Marymount University",
        degree: "Bachelor of Computer Science",
        period: "August 2023 – May 2025",
        gpa: "4.00",
        coursework: "Algorithms & Analysis, Discrete Methods, Databases, Probability & Statistics"
      },
      {
        school: "Santa Monica Community College",
        degree: "Computer Science",
        period: "January 2020 – May 2023",
        gpa: "3.92",
        coursework: "Fundamental & Advanced Python, C Programming, C++ Programming, Data Structures, Calculus I & II, Multivariable Calculus, Differential Equations, Linear Algebra"
      }
    ];
  
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <p>{edu.degree}; GPA: {edu.gpa}</p>
            <p className="text-gray-600">{edu.period}</p>
            <p><strong>Relevant Coursework: </strong>{edu.coursework}</p>
          </div>
        ))}
      </section>
    );
  };
  
  export default Education;