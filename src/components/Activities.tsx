const Activities = () => {
  const activities = [
    "SMC [3×] Dean's Honor List Recipient, LMU Dean's Honor List Recipient",
    "Member of SMC Chapter of Alpha Gamma Sigma Tutoring Committee - Tutored students in Calculus",
    "Member and Organizer for LMU Chapter of Society of Hispanic Professional Engineers",
    "Software Development Lead and Research for LMU's first CubeSat mission"
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6">CAMPUS ACTIVITIES & AWARDS</h2>
      <ul className="list-disc list-inside space-y-2">
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </section>
  );
};

export default Activities;
