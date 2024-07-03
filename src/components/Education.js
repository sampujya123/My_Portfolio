import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './css/Education.css';
import images from './images';
const Education = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [educationData, setEducationData] = useState([]);
  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  useEffect(() => {
    axios.get('/json/educationData.json')
      .then(response => {
        console.log('Response data:', response.data);
        setEducationData(response.data.totalresults);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const certificates = [
    { src: images.nptel, alt: 'C certificate' },
    { src: images.javacert, alt: 'Java certificate' },
    { src: images.artintcert, alt: 'AI Primer certificate' },
    { src: images.mclearcert, alt: 'ML certificate' },
    { src: images.softintr, alt: 'Software engineer Intern certificate' },
  ];
  return (
    <section className="education bg-slate-100 sm:p-2 md:p-8 px-2">
      <div className='container px-0'>
      <h1 className='p-3'>Educational Attainment</h1>
      <table className="table table-hover table-bordered md:table-fixed text-sm md:text-lg">
        <thead>
          <tr className='bg-slate-300'>
            <th className='bg-slate-100'>Qualification</th>
            <th>Institution</th>
            <th>Result</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody className='bg-white'>
        {educationData.map((item, index) => (
            <tr key={index} className={index % 2 === 1 ? 'bg-gray-100' : ''}>
              <td>{item.qualification}</td>
              <td>{item.institution}</td>
              <td>{item.result}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <span className='subhead'> Certifications:</span> 
        <ul className='list-disc'>
          <li className='md:text-lg text-base'>Certificates in C and Java Programming languages from NPTEL.</li>
          <li className='md:text-lg text-base'>Certificates in Artificial Intelligence and Machine Learning from Infosys Springboard.</li>
          <li className='md:text-lg text-base'>"Software Engineering Intern" role Certifiacte from HackerRank.</li>
        </ul>
      <div className='container px-0 pb-6'>
        <div className='flex flex-wrap gap-3 hover:gap-3 justify-center '>
        {certificates.map((cert, index) => (
            <div
              key={index}
              className={`relative card w-1/4 overflow-hidden transition-transform duration-300 ${expandedCard === index ? 'w-3/4' : ''}`}
              onClick={() => toggleExpand(index)}
            >
              <img className="certi w-full h-full" src={cert.src} alt={cert.alt} />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Education;
