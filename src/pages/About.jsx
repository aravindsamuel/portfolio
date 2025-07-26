import React from "react";
import "./about.css";
import profilePic from "../images/profilepicb&w.jpg";
import workData from "../data/workData";

function calculateTotalExperience(data) {
  let totalMonths = 0;

  data.forEach(job => {
    const fromDate = new Date(job.from + " 1"); 
    const toDate = job.to === "Current" ? new Date() : new Date(job.to + " 1");

    const years = toDate.getFullYear() - fromDate.getFullYear();
    const months = toDate.getMonth() - fromDate.getMonth();

    totalMonths += years * 12 + months;
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
}

const experience = calculateTotalExperience(workData);

function About() {
  return (
    <>
      <div className="about-container">
        <div className="aboutMe-container flex flex-row gap-3 justify-around">
          <div className="aboutMe-Left flex justify-center">
            <img className="aboutMeImage" src={profilePic} alt="Profilepic" />
          </div>
          <div className="aboutMe-Right">
            <h1 className="aboutMe">About <span className="text-[#7F27FF]">Me</span></h1>
            <p className="aboutMe-Content">
              Hello! I'm Aravind, a passionate and dedicated full stack
              developer. Proficient in web development, user interface, crafting
              dynamic, responsive, and user-friendly web applications. With a
              robust background in both front-end and back-end technologies, I
              thrive on transforming complex problems into elegant, efficient
              solutions.
            </p>
          </div>
        </div>

        <div className="myJourney-container flex flex-row gap-3 justify-around">
          <div className="myJourney-left">
            <h1 className="myJourney"><span className="text-[#7F27FF]">My</span> Journey</h1>
            <p className="myJourney-Content">
              My journey into the world of web development began with a
              curiosity for how websites work and a desire to create interactive
              experiences. Over time, I've honed my skills in both front-end and
              back-end technologies, allowing me to develop comprehensive
              solutions that meet client needs.
            </p>
          </div>
          <div className="myJourney-right">
            <h1 className="myExperience">Where I've worked</h1>
            <h3 className="text-center font-bold mb-3">Total Experience: {`${experience.years} yr ${experience.months} mo`}</h3>

            <div className="flex flex-col gap-3">
              {workData.map((work) => (
                <div className="experience-card">
                  <div className="flex flex-col justify-center">
                    <img className="company-logo" src={work.company_logo} alt={work.company} />
                  </div>
                  <div className="experience-details-container">
                    <h2 className="font-bold text-lg">{work.position}</h2>
                    <p className="text-base font-semibold text-stone-300">
                      {work.company}
                    </p>
                    <p className="text-sm text-stone-300">
                      ({work.from} - {work.to})
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
