import React from 'react'

const Button = ({ text, color, toggleShow }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={toggleShow}
        style={{ backgrpund: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button
