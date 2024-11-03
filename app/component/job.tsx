import React from "react";

const Job = () => {
  const jobs = [
    { title: "Web Programmer" },
    { title: "Grafic Designer" },
    { title: "UI Designer" },
  ];

  return (
    <>
      <div className="flex flex-row gap-2">
        {jobs.map((job) => (
          <span
            key={job.title}
            className="badge mt-10 h-8 border-2 border-foreground bg-primary text-black"
          >
            {job.title}
          </span>
        ))}
      </div>
    </>
  );
};

export default Job;
