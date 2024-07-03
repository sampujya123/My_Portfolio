import React from 'react';
import './css/Header.css';
import { useState, useEffect } from 'react';
import images from './images';
const AnimatedName = ({ name }) => {
  const [displayedName, setDisplayedName] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < name.length) {
      const interval = setInterval(() => {
        setDisplayedName((prev) => prev + name[index]);
        setIndex((prev) => prev + 1);
      }, 100); 
      return () => clearInterval(interval);
    }
  }, [index, name]);

  return (
    <h1>{displayedName}</h1>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className='container items-center justify-center flex'>
        <div className='row'>
          <div className="col-12 col-md-6">
            <h2 className='uppercase'>I am <AnimatedName name={"Sampujya"}/></h2>
            <h2>Welcome to My Portfolio</h2>
            <p>Discover my work and projects.</p>
          </div>
          <div className="col-12 col-md-6">
            <img className='fade-in mx-auto w-auto h-[55vh] md:h-[60vh]'src={images.profilepic} alt="sampujya" height={400} width={300} />
          </div>
        </div>   
      </div>
    </header>
  );
};
export default Header;
