import React from 'react';

const ProfilePicture = () => {
   const imageUrl = './src/assets/portrait.jpeg';
   const handleClick = (e) => e.target.style.display = "none";

  return (
    <img onClick={(e) => handleClick(e)} src={imageUrl} />
  );
};

export default ProfilePicture;