import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/authActions';
import { FaBars, FaTimes } from "react-icons/fa";


const NavbarInfo = ({ toggleSidebar, showSidebar, isAuthenticated, logout }) => {

    // const auth = useSelector(state => state.auth)
    // const { error, loading, user } = auth
  
    const guestLinks = () => (

        <>
            <li className='navbar__list__item'>
                <NavLink className="navbar__link" to='/login'>
                    Sign In
                </NavLink>
            </li>
        </>
    );
  
    const authLinks = () => (
        <>
            <li className='navbar__list__item'>
                <NavLink className='navbar__link' to='/shop'>
                        Wholesale Store
                </NavLink>
            </li>
            <li className='navbar__list__item'>
                <NavLink className='navbar__link' to='/emergency/request'>
                        EMS
                </NavLink>
            </li>
            <li className="navbar__auth-link" onClick={logout}><i class="fa fa-sign-out-alt"></i> Logout</li>
        </>
    );

    return(
        <nav className='navbar shadow-sm w-100'>
            <div className="navbar__logobtn">
                <Link className='navbar__logo' exact to='/'>
                    <img className='navbar__flolog-logo'  src='/assets/images/icons/flolog-logo.png' alt="flolog-logo" />
                </Link>
            </div>
            <ul className='navbar__list ms-auto'>
                <li className='navbar__list__item'>
                    <NavLink className='navbar__link' exact to='/'>
                        Home
                    </NavLink>
                </li>
                <li className='navbar__list__item'>
                    <NavLink className='navbar__link' to='/about'>
                        About Us
                    </NavLink>
                </li>
                <li className='navbar__list__item'>
                    <NavLink className='navbar__link' to='/blog/posts'>
                        Blog
                    </NavLink>
                </li>

                    {isAuthenticated ? authLinks() : guestLinks()}
        
            </ul>
            <div className='navbar__button' onClick={toggleSidebar}>
             {showSidebar ? <FaTimes/> :  <FaBars />}
            </div>
        </nav>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps, { logout })(NavbarInfo);