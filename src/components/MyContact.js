import React from 'react';
import './Contact.css';

const MyContact = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+919133115115';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:sampujyam@gmail.com';
  };

  const handleClick = () => {
    alert('Thank you for visting my Portfolio!'); 
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className='container'>
          <div className='row'>
            <div className='Mycard '>
              <img className='con' src='call.PNG' alt='call' height={200} width={200}></img>
              <a href="tel:+919133115115" className="phone-number" onClick={handlePhoneClick}>+91 9133115115</a><br></br>
            </div>
            <div className='Mycard'>
              <img className='con' src='mail.PNG' alt='mail' height={200} width={200}></img>
              <a href="mailto:sampujyam@gmail.com" className="email-address" onClick={handleEmailClick}>sampujyam@gmail.com</a><br></br>
            </div>
            <div className='Mycard '>
              <img className='con' src='logolk.png' alt='linkedin logo' height={200} width={200}></img>
              <a href='www.linkedin.com/in/sampujya-musunuri'>linkedin profile</a>
            </div>
            <div className='Mycard '>
              <img className='con' src='github.PNG' alt='github' height={200} width={200}></img>
              <a href="https://github.com/sampujya123">My Github link</a><br></br>
           </div>
         </div>
        </div>
      </div>
      <div className="Thanku">
      <button onClick={handleClick} className="thankyou-button">
        Thank You
      </button>
    </div>
    </section>
  );
};

export default MyContact;
