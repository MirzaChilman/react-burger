import React from 'react';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import './Toolbar.css';

const toolbar = props => (
  <header className="Toolbar">
    <div>MENU</div>
    <Logo height="80%" />
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);
export default toolbar;
