import React from 'react';
import portraitPic from '../assets/portrait.jpeg';

const Card = () => {
  return (
    <div className='card'>
      <img className='card-image' src={portraitPic} alt="profile picture" />
      <h2 className='card-title'>Richard</h2>
      <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis consequatur odio aut. Incidunt tempora quod harum temporibus repellendus quis neque voluptates corporis ea molestiae! Tempora est aliquam veritatis dolor?</p>
    </div>
  );
};

export default Card;