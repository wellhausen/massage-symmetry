import React from 'react';
import Menu from './Menu';
import '../../styles/global.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
