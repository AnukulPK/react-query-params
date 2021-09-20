import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: '0px 5vw',
      }}
    >
      <h3>Logo</h3>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          listStyleType: 'none',
        }}
      >
        <Link to="/comp1">
          <li style={{ paddingLeft: '2vw' }}>comp1</li>
        </Link>
        <Link to="/comp">
          <li style={{ paddingLeft: '2vw' }}>comp2</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
