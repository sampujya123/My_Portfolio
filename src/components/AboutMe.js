import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h1>ABOUT ME</h1>
      <p>
        Hi, I'm <strong>Sampujya</strong>, a second-year student at Chaitanya Bharathi Institute of Technology (CBIT). 
        I have a strong passion for the fields of Artificial Intelligence (AI) and Machine Learning (ML),
         and I am currently diving deep into the MERN stack (MongoDB, Express.js, React, Node.js).
        My journey in the tech world includes a valuable internship at Infosys Springboard 4.0 in the AI/ML domain.
        I engage in hackathons, coding challenges, and workshops, I channel my enthusiasm into hands-on learning experience.</p>

        <p>
        During my first year at CBIT, I was awarded a medal for securing the first position in my section.
        In addition to my academic achievements at CBIT, I also qualified for JEE Advanced and secured a Computer Science seat at IIT Bhilai. 
        This achievement represents my hardwork.
      </p>
      <span className='subhead'>Internships:</span> 
        <ul>
          <li>Brain-O-Vision|Oct,2023-Nov,2023: Learnt the basic of Python and Libraries of Python required for DATA SCIENCE like
                                                Numpy, Pandas, Matplotlib. Gained basic knowledge in Data Science</li>
          <li>Infosys Springboard|Apr-2023-Jun,2023: During the internship I worked on "ENERGY COMSUMPTION FORECASTING SYSTEM". Learnt Data collection
                                                      , preprocessing, model creation and evaluation, testing, and deployment.
          </li>
        </ul>
        <div className='Container'>
          <div className='row'>
            <div className='col-8'>
              <span className='subhead'>Skills and Expertise:</span> 
              <ul>
                <li>Web Development: HTML, CSS, Bootstrap, JavaScript, React, Node.js, Express.js</li>
                <li>Database Management: MySQL, MongoDB</li>
                <li>Programming Languages: Proficient in Python, well-versed in C and Java</li>
              </ul>
            </div>
            <div className='col-4'>
              <img src='m.png' alt='Mongo' height={75} width={75}></img>
              <img src='n.png' alt='Node' height={75} width={75}></img>
              <img src='r.PNG' alt='React' height={75} width={75}></img>
              <img src='python.PNG' alt='Python' height={75} width={75}></img>
              <img src='java.PNG' alt='java' height={75} width={75}></img>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;

