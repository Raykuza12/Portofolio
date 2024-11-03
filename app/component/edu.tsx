import React from "react";

const Edu = () => {
  const educationHistory = [
    {
      id: 1,
      level: "SD",
      school: "MI Tanwiriyah I",
      yearIn: "2009",
      yearOut: "2016",
    },
    {
      id: 2,
      level: "SMP",
      school: "SMPN 3 Limbangan",
      yearIn: "2016",
      yearOut: "2018",
    },
    {
      id: 3,
      level: "SMP",
      school: "SMP Tri Bhakti",
      yearIn: "2018",
      yearOut: "2019",
    },
    {
      id: 4,
      level: "SMK",
      school: "SMKN 6 Garut",
      yearIn: "2019",
      yearOut: "2022",
    },
    {
      id: 5,
      level: "S1",
      school: "Universitas Ma'soem",
      yearIn: "2022",
      yearOut: "Now",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
        Educational Background
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {educationHistory.map((edu) => (
          <div
            key={edu.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="card-body">
              <div className="flex items-center justify-between">
                <span className="badge badge-primary text-lg">{edu.level}</span>
                <div className="text-sm opacity-75">
                  {edu.yearIn} - {edu.yearOut}
                </div>
              </div>
              <h3 className="card-title mt-2">{edu.school}</h3>
              <div className="card-actions justify-end mt-4">
                <div className="badge badge-outline">{`${edu.yearIn}-${edu.yearOut}`}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Edu;
