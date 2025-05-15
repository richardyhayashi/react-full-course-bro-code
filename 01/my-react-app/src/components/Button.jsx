import React from 'react';

const Button = () => {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "hsl(0, 0%, 100%)",
    padding: "10px 20px",
    borderRadius: "5px",
    borderWidth: "none",
    cursor: "pointer"
  }

  return (
    <button style={styles}>Click me</button>
  );
};

export default Button;