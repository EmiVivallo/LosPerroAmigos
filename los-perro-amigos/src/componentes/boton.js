import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({ label, onClick }) => {
    return (
      <Link to="/teoria" className="custom-button">
        {label}
      </Link>
    );
  };

  export default Button;
