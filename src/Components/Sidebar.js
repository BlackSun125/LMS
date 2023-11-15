// Sidebar.js
import React from 'react';
import '../App.css';
import { SidebarData } from './SidebarData';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate

function Sidebar() {
  
    const navigate = useNavigate(); 

    const location=useLocation();

  return (
    <div className="SideBar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => (
          <li className={` ${val.link === location.pathname ? 'active' : ''}`} 
          key={key} onClick={() => navigate(val.link)}>
            <Link className="row" to={val.link}>
              <div>{val.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
