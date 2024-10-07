import React from 'react';
import './Myself.css';
import profilePhoto from '../assets/mephoto.jpeg'; 

const Myself = () => {
  return (
    <div className="about-container">
      <div className="profile-image-container">
        <img src={profilePhoto} alt="Profile" className="profile-image" />
      </div>
      <div className="description-container">
        <h2>Hello, I'm Natalia</h2>
        <p>
          I am a Data Science MSc student, with a passion for mental health studies. I enjoy exploring the intersection of art and psychology, particularly how creative expression influences mental health and well-being.
        </p>
        <p>
          With a background in Psychology, I strive to use both research and creativity to understand human behavior. My goal is to help others tap into their creative potential and experience the therapeutic benefits of art.
        </p>
        <p>
          In my free time, I love hiking and watercolour painting.
        </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      

    </div>
    
  );
};

export default Myself;
