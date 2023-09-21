import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      {' '}
      { ' ' }
      {' '}
      {}
      {' '}
      { ' ' }
      {' '}
      <div className="logo">
        <Link to="/">
          {' '}
          { ' ' }
          MATH MAGICIANS
          {' '}
          { ' ' }
          {' '}

        </Link>
      </div>

      { /* Navigation links on the right */ }
      {' '}
      { ' ' }
      {' '}
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            exact
            activeClassName="active-link"
          >
            Home
            {' '}
            { ' ' }
          </NavLink>
        </li>
        {' '}
        { ' ' }
        {' '}
        <li>
          <NavLink
            to="/calculator"
            activeClassName="active-link"
          >
            Calculator
            {' '}
            { ' ' }
          </NavLink>
        </li>
        {' '}
        { ' ' }
        {' '}
        <li>
          <NavLink
            to="/quote"
            activeClassName="active-link"
          >
            Quotes
            {' '}
            { ' ' }
          </NavLink>
        </li>
        {' '}
        { ' ' }

      </ul>
      {' '}
      { ' ' }
      {' '}

    </nav>
  );
}

export default Navigation;
