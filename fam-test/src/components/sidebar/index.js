import React from 'react';
import {
  NavLink
} from 'react-router-dom';
import { StyledSideBar } from './styled';

function SideBar() {
  return (
    <StyledSideBar>
      <li className="name-app">FAM^ TEST  </li>
      <li>
        <NavLink exact to="/">Counter</NavLink>
      </li>
      <li>
        <NavLink to="/data-list">Employees</NavLink>
      </li>
    </StyledSideBar>
  );
}

export default SideBar;
