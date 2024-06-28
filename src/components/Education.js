import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <h1>My Education</h1>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Qualification</th>
            <th>Institution</th>
            <th>Result</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bachelor of Engineering</td>
            <td>Chaitanya Bharathi Institute of Technology</td>
            <td>CGPA: 9.77</td>
            <td>2022-2026 (Studying) </td>
          </tr>
          <tr>
            <td>Intermediate</td>
            <td>Narayana Junior College, Kothapet</td>
            <td>Percentage: 98.7%</td>
            <td>2020-2022</td>
          </tr>
          <tr>
            <td>Secondary Education</td>
            <td>Narayana Group of Schools</td>
            <td>GPA: 10</td>
            <td>2019-2022</td>
          </tr>
        </tbody>
      </table>
      <span className='subhead'> Certifications:</span> 
        <ul>
          <li>Certificates in C and Java Programming languages from NPTEL.</li>
          <li>Certificates in Artificial Intelligence and Machine Learning from Infosys Springboard.</li>
          <li>"Software Engineering Intern" role Certifiacte from HackerRank.</li>
        </ul>
      <div className='container'>
        <div className='row'>
          <div className='card'>
            <img className='certi' src='c.PNG' alt='C certificate' height={300} width={400}></img>
          </div>
          <div className='card'>
            <img className='certi' src='javac.PNG' alt='Java certificate' height={300} width={400}></img>
          </div>
          <div className='card'>
            <img className='certi' src='aic.PNG' alt='AI Primer certificate' height={300} width={400}></img>
          </div>
          <div className='card'>
            <img className='certi' src='mlc.PNG' alt='ML certificate' height={300} width={400}></img>
          </div>
          <div className='card'>
            <img className='certi' src='sei.PNG' alt='Software engineer Intern certificate' height={300} width={400}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
