import React from 'react';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/authActions';
import { FaHome, FaUsers, FaBookmark } from "react-icons/fa";

const Sidebar = ({
    isAuthenticated, 
    logout, 
    isOpen,
    closeSidebar
}) => {
        
const styles = isOpen ? 'sidebar sidebar--open' : 'sidebar sidebar--closed';
    
const guestLinks = () => (

    <>
        <div className='sidebar__link' to='/login'>
            <li className='sidebar__list__item sidebar__auth-link' onClick={closeSidebar}>Sign In</li>
        </div>
        <div className='sidebar__link' to='/register'>
            <li className='sidebar__list__item sidebar__auth-link' onClick={closeSidebar}>Sign Up</li>
        </div>
    </>
    );
    
    const authLinks = () => (
        <>
            <li className='sidebar__list__item' onClick={closeSidebar}>
                <NavLink className='sidebar__link' to='/shop'><img src="/assets/icons/Store.png" alt="" style={{height:"25px", marginRight:"20px"}}/>
                    Wholesale Store
                </NavLink>
            </li>
            <li className='sidebar__list__item' onClick={closeSidebar}>
                <NavLink className='sidebar__link' to='/emergency/request'><img src="/assets/icons/Product_icon.png" alt="" style={{height:"25px", marginRight:"20px"}}/>
                    EMS
                </NavLink>
            </li>
        <div className='sidebar__link' to='/profile'>
            <li className='sidebar__list__item' onClick={closeSidebar}><img src="/assets/icons/Profile.png" alt="" style={{height:"25px", marginRight:"20px"}}/>
                Profile
            </li>
        </div>
            <li className='sidebar__list__item sidebar__auth-link' onClick={logout}>Logout</li>
        </>
    );

    return (
        <>
            {isOpen ? <div className='sidebar__backdrop' onClick={closeSidebar}></div> : <></>}
            <nav className={`${styles}`}>
                <ul className='sidebar__list'>
                    <div className='sidebar__list__item' onClick={closeSidebar}>
                        <NavLink className='sidebar__logo' exact to='/'>
                            <img className='sidebar__flolog-logo'  src='/assets/images/icons/flolog-logo.png' alt="flolog-logo" />
                        </NavLink>
                    </div>
                    <li className='sidebar__list__item' onClick={closeSidebar}>
                        <NavLink className='sidebar__link' exact to='/'>
                            <FaHome />Home
                        </NavLink>
                    </li>
                    <li className='sidebar__list__item' onClick={closeSidebar}>
                        <NavLink className='sidebar__link' to='/about'>
                           <FaUsers/> About Us
                        </NavLink>
                    </li>
                    <li className='sidebar__list__item' onClick={closeSidebar}>
                        <NavLink className='sidebar__link' to='/blog/posts'>
                            <FaBookmark />Blog
                        </NavLink>
                    </li>
                    {isAuthenticated ? authLinks() : guestLinks()}
                    
                </ul>
            </nav>
        </>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps, { logout })(Sidebar);