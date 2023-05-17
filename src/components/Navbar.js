import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'HOME',
    },
    {
      id: 2,
      path: '/about',
      text: 'ABOUT',
    },
  ];

  return (
    <nav className="py-2 bg-gray-00 items-center border-b border-b-gray-200">
      <div className="flex justify-between space-x-14 items-center mx-5">

        <h1 className="text-3xl font-bold text-blue-700">COGNITH</h1>
        <ul className="flex space-x-14 text-2l font-thin">
          {links.map(({ id, path, text }) => (
            <li key={id}>
              <NavLink
                end
                to={path}
                className="active:text-gray-400"
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;