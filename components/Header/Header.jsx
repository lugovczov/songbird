import React from 'react';
import './Header.scss';

export default function Header({ scoreValue }) {
  return (
    <div className="header">
      <div className="header__logo mb-1"></div>
      <h4 className="header__score text-white mt-3">Счёт: {scoreValue}</h4>
    </div>
  );
}
