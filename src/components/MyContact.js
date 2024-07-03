import React from 'react';
import './css/Contact.css';
import images from './images';
const MyContact = () => {
  const handleClick = (event, link) => {
    if (link.startsWith('tel:') || link.startsWith('mailto:')) {
      event.preventDefault();
      window.location.href = link;
    }
  };
  const socialIcons = [
    { src: images.callicon, alt: "call", link: 'tel:+919133115115', text: '+91 9133115115' },
    { src: images.mailicon, alt: "mail", link: 'mailto:sampujyam@gmail.com', text: 'sampujyam@gmail.com' },
    { src: images.linkedIn, alt: "linkedin logo", link: 'https://www.linkedin.com/in/sampujya-musunuri/', text: 'Linkedin profile' },
    { src: images.githubicon, alt: "github", link: 'https://github.com/sampujya123', text: 'My Github link' },
  ];
  return (
    <section className="contact bg-slate-100 md:h-screen">
      <h2 className='m-8'>Contact Me</h2>
      <div className="contact-info md:my-20">
          <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-3'>
          {socialIcons.map((icon, index) => (
              <div className='Mycard h-44 items-center' key={index}>
                <img className='con w-20 h-20 rounded-full mx-auto mt-6 mb-3' src={icon.src} alt={icon.alt}></img>
                <a 
                  href={icon.link} 
                  className="social-link no-underline md:text-lg text-base font-bold text-slate-800" 
                  onClick={event => handleClick(event, icon.link)} 
                  target={icon.link.startsWith('http') ? "_blank" : "_self"}
                  rel={icon.link.startsWith('http') ? "noopener noreferrer" : ""}
                >
                  {icon.text}
                </a>
              </div>
            ))}
         </div>
      </div>
      <div className="Thanku">
      <button onClick={() => alert('Thank you for visiting my Portfolio!')} className="thankyou-button my-4">
          Thank You
        </button>
    </div>
    </section>
  );
};

export default MyContact;
