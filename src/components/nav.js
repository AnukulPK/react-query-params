import React from 'react';

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
        }}
      >
        <li>comp1</li>
        <li>comp2</li>
      </ul>
    </nav>
  );
};

export default Nav;
