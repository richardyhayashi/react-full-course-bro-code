import React, {useEffect, useRef, useState } from 'react';

const MyComponent = () => {
   let [number, setNumber] = useState(0);

   useEffect(() => {
      console.log("COMPONENT RENDERED");
   });

   const handleClick = () => {
      setNumber(n => n + 1);
   }

   return (
      <button onClick={handleClick}>
         Click me!
      </button>
   );
};

export default MyComponent;