import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import {ReactComponent as CrwnLogo } from '../../assets/crown.svg';


const Navigation = () => {
  return (
    <Fragment>
    <div className="navigation">
    <Link className='logo-container' to='/'>
    <CrwnLogo className='logo' />
    </Link>
    
      <div className="nav-links-container">
        <Link className='nav-link'to="/shop">
        SHOP
        
        </Link>
        
      </div>
      <div className="navigation__item">
        <Link to="/contact">Contact</Link>
      </div>
      <Outlet />
    </div>
    </Fragment>
  );
}

export default Navigation;