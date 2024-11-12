import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              My Name is Vaishnavi Kulkarni{" "}
              <span className="text-pink-500">I'm a Fullstack Developer!!!</span>
            </h1>
            <p className="text-base md:text-lg">
              Welcome to My Portfolio
            </p>
            <section>
              <h2 className="text-lg md:text-2xl font-semibold">About Me:</h2>
              <div className="bg-blue-200 p-4 rounded-lg shadow-lg">
                <p>
                  I'm a Computer Science and Engineering student at Sanjay Ghodawat University,
                  To Secure a challenging position in a growth-oriented organization where I can enhance my Programming
                  and Development Skills while gaining practical experience  and contributing to team success
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg md:text-2xl font-semibold">Skills:</h2>
              <ul className="list-disc pl-5">
                <li className="font-bold">Programming Languages: C, C++, Python, Java</li>
                <li className="font-bold">Web Development: HTML, CSS, JavaScript, React, Node.js</li>
                <li className="font-bold">Data Structures and Algorithms: Proficiency in problem-solving and coding challenges</li>
                <li className="font-bold">Database Management: SQL and familiarity with database design</li>
                <li className="font-bold">Version Control: Git/GitHub for project collaboration and management</li>
              </ul>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-lg md:text-2xl font-semibold">Education:</h2>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-md md:text-xl font-medium text-black">Sanjay Ghodawat University, Kolhapur</h3>
                <p className="text-sm md:text-base">Bachelor of Computer Science and Engineering (2022 - 2025)</p>
              </div>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-md md:text-xl font-medium text-black">Dr.Bapuji salunke institute of Engineering & Technology, Kolhapur</h3>
                <p className="text-sm md:text-base">Diploma in Computer Science and Engineering (2019 - 2022)</p>
            
              </div>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-md md:text-xl font-medium text-black">Private High School , Kolhapur</h3>
                <p className="text-sm md:text-base">class 10 (Passing Year: 2019)</p>
              </div>
            </section>
          </div>
        </div>

        <div className="order-1 w-full mt-20 md:w-1/2">
          {/* Assuming your banner image is inside the public folder */}
          <img
            src="/Banner.png"
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="Vaishnavi Kulkarni Fullstack Developer"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
