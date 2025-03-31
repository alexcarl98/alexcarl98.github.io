interface WorkItem {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

const WorkExperience = () => {
  const experience: WorkItem[] = [
    {
      company: "Cyan Systems Inc.",
      position: "Lead Software Engineer",
      period: "February 2025 – Present",
      responsibilities: [
        "Authored a modular Software Development Kit (SDK) in C++, refactoring legacy codebases into reusable components for seamless infrared camera interfacing across multiple hardware platforms.",
        "Implemented Python bindings for the SDK to bridge embedded systems and AI pipelines, enabling real-time image processing and inference with PyTorch and Ultralytics.",
        "Established a CI/CD pipeline using Jenkins and Google Test to ensure rigorous testing and deployment of mission-critical embedded software."
      ]
    },
    {
      company: "Cyan Systems Inc.",
      position: "Image Processing Intern",
      period: "June 2024 – February 2025",
      responsibilities: [
        "Eliminated frame drops in 4K UHD infrared video via multithreaded frame buffering and memory-efficient data pipelines, achieving stable 30 FPS output under real-time constraints.",
        "Debugged and optimized UDP-based streaming protocols to mitigate packet loss in high-throughput video transmission, ensuring uninterrupted operation over extended field tests.",
        "Reverse-engineered proprietary video formats and developed a lossless compression algorithm that maintained per-frame metadata integrity while reducing file size by 50%.",
        "Improved infrared sensor performance by optimizing calibration algorithms, including median filtering and two-point correction, used in embedded runtime environments."
      ]
    },
    {
      company: "LMU Intemnets Lab",
      position: "Computer Vision Research Assistant",
      period: "March 2024 – June 2024",
      responsibilities: [
        "Refactored a legacy Jupyter research pipeline into an object-oriented Python module, reducing codebase size by 1,800 lines and improving runtime performance by 60%.",
        "Executed 600+ benchmarking trials within a Linux environment to fine-tune feature extraction algorithms under simulated onboard compute constraints.",
        "Collaborated with hardware engineers to bridge Python-based vision systems with an existing C++ drone control stack, contributing to modular embedded software integration."
      ]
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6">WORK EXPERIENCE</h2>
      {experience.map((job, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-semibold">{job.company}</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">{job.period}</span>
          </div>
          <p className="text-lg italic mb-2">{job.position}</p>
          <ul className="list-disc list-inside space-y-2">
            {job.responsibilities.map((resp, respIndex) => (
              <li key={respIndex}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
