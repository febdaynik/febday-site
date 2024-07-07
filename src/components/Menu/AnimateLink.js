import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomLink = ({ to, onClick, style, children }) => {
  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();
    if (onClick) {
      await onClick();
    }
    navigate(to);
  };

  return (
    <a href={to} data-href={to} style={style} onClick={handleClick}>
      {children}
    </a>
  );
};

export default CustomLink;