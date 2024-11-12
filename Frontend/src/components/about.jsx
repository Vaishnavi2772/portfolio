import React from "react";

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              My Name is Prachi Deepak Jadhav{" "}
              <span className="text-pink-500">I'm a Full-Stack Developer!</span>
            </h1>
            <p className="text-sm md:text-xl">
              About me: I'm a Computer Science and Engineering student at Sanjay
              Ghodawat University, graduating in 2025. I have a solid academic
              foundation, with 80.34% in my Computer Science and Engineering diploma
              and 80.20% in my 10th-grade studies.
            </p>
            <h2 className="text-lg md:text-2xl font-semibold">Skills</h2>
            <ul className="list-disc list-inside text-sm md:text-xl">
              <li>Programming Languages: C, C++, Python, and Java</li>
              <li>Web Development: HTML, CSS, JavaScript, React, and Node.js</li>
              <li>Data Structures and Algorithms: Proficiency in problem-solving and coding challenges</li>
              <li>Database Management: SQL and familiarity with database design</li>
              <li>Version Control: Git/GitHub for project collaboration and management</li>
            </ul>
          </div>
          <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          {/* You can add an image or any additional content here */}
        </div>
      </div>
    </>
  );
}

export default About;
