import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import './dashboard.css';
import { IconContext } from 'react-icons';
import Home from '../dashboardpages/page1';
import Week1 from '../dashboardpages/page2';
import Week2 from '../dashboardpages/page3';
import Form1 from '../dashboardpages/form1';



function Side() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active'  : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars' class = 'd-lg-none'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

function Dshbrd(){
  return(
    <>
    <Side />
      <BrowserRouter>
       
       <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/Week1' component={Week1} />
       <Route path='/Week2' component={Week2} />
       
       
       </Switch>
       </BrowserRouter>
    </>
  )
}

export default Dshbrd;