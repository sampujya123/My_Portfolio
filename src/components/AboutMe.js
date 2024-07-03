import React from "react";
import "./css/About.css";
import images from "./images";
const About = () => {
  const skillsImages = [
    { src: images.mongodb, alt: "Mongo" },
    { src: images.nodejs, alt: "Node" },
    { src: images.reactlogo, alt: "React" },
    { src: images.pythonlogo, alt: "Python" },
    { src: images.javalogo, alt: "Java" },
  ];
  return (
    <section className="about md:h-screen bg-slate-100">
      <div className="container">
      <h1>ABOUT ME</h1>
      <p className="md:text-lg text-base">
        Hi, I'm <strong>Sampujya</strong>, a second-year student at Chaitanya
        Bharathi Institute of Technology (CBIT). I have a strong passion for the
        fields of Artificial Intelligence (AI) and Machine Learning (ML), and I
        am currently diving deep into the MERN stack (MongoDB, Express.js,
        React, Node.js). My journey in the tech world includes a valuable
        internship at Infosys Springboard 4.0 in the AI/ML domain. I engage in
        hackathons, coding challenges, and workshops, I channel my enthusiasm
        into hands-on learning experience.
      </p>

      <p className="md:text-lg text-base">
        During my first year at CBIT, I was awarded a medal for securing the
        first position in my section. In addition to my academic achievements at
        CBIT, I also qualified for JEE Advanced and secured a Computer Science
        seat at IIT Bhilai. This achievement represents my hardwork.
      </p>
      <span className="subhead">Internships:</span>
      <ul className="list-disc">
        <li className="md:text-lg text-base">
          Brain-O-Vision|Oct,2023-Nov,2023: Learnt the basic of Python and
          Libraries of Python required for DATA SCIENCE like Numpy, Pandas,
          Matplotlib. Gained basic knowledge in Data Science
        </li>
        <li className="md:text-lg text-base">
          Infosys Springboard|Apr-2023-Jun,2023: During the internship I worked
          on "ENERGY COMSUMPTION FORECASTING SYSTEM". Learnt Data collection ,
          preprocessing, model creation and evaluation, testing, and deployment.
        </li>
      </ul>
      <div className="Container">
        <div className="row">
          <div className="col-md-6 col-12">
            <span className="subhead">Skills and Expertise:</span>
            <ul className="list-disc">
              <li className="md:text-lg text-base">
                Web Development: HTML, CSS, Bootstrap, JavaScript, React,
                Node.js, Express.js
              </li>
              <li className="md:text-lg text-base">
                Database Management: MySQL, MongoDB
              </li>
              <li className="md:text-lg text-base">
                Programming Languages: Proficient in Python, well-versed in C
                and Java
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-12 md:flex flex flex-wrap px-0 justify-center">
            {skillsImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="md:h-28 md:w-28 w-24 h-24 md:m-2 m-1"
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;