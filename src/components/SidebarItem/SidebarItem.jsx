import React from 'react';

const SidebarItem = ({ icon, name, onClick }) => {
  return (
    <li className="flex flex-row items-center mb-2 hover:bg-gray-800 p-2 rounded" onClick={onClick}>
      {icon && <span className="mr-2">{icon}</span>}
      <a href="#">{name}</a>
    </li>
  );
};

export default SidebarItem;
