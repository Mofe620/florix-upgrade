import React, { Fragment } from 'react';
import {Link, NavLink} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, connect } from 'react-redux'
import { logout } from '../../redux/actions/authActions';
import {Dropdown, NavDropdown} from 'react-bootstrap';

const Sidebar = ({
    isAuthenticated, 
    logout, 
    isOpen,
    closeSidebar
}) => {
    const styles = isOpen ? 'sidebar sidebar--open' : 'sidebar sidebar--closed';

    
const guestLinks = () => (

        <Fragment>
            <LinkContainer className='sidebar__link' to='/register'>
                <li className='sidebar__list__item sidebar__auth-link' onClick={closeSidebar}>Sign Up</li>
            </LinkContainer>
            <LinkContainer className='sidebar__link' to='/login'>
                <li className='sidebar__list__item sidebar__auth-link' onClick={closeSidebar}>Sign In</li>
            </LinkContainer>
        </Fragment>
    );
    
    const authLinks = () => (
        <Fragment>
            <li className='sidebar__list__item' onClick={closeSidebar}>
                <NavLink className='sidebar__link' to='/shop'><img src="/assets/icons/Store.png" alt="" style={{height:"25px", marginRight:"20px"}}/>
                    Wholesale Store
                </NavLink>
            </li>
            <li className='sidebar__list__item' onClick={closeSidebar}>
                <NavLink className='sidebar__link' to='/emergency/request'><img src="/assets/icons/Product_icon.png" alt="" style={{height:"25px", marginRight:"20px"}}/>
                    Emergency
                </NavLink>
            </li>
       <LinkContainer className='sidebar__link' to='/profile'>
            <li className='sidebar__list__item' onClick={closeSidebar}><img src="/assets/icons/Profile.png" alt="" style={{height:"25px", marginRight:"20px"}}/>
                Profile
            </li>
        </LinkContainer>

            <li className='sidebar__list__item sidebar__auth-link' onClick={closeSidebar} onClick={logout}>Logout</li>
        </Fragment>
    );

    return (
        <Fragment>
            {isOpen ? <div className='sidebar__backdrop' onClick={closeSidebar}></div> : <Fragment></Fragment>}
            <nav className={`${styles}`}>
                <ul className='sidebar__list mt-5'>
                    <div className='sidebar__logo'>
                        Navbar App
                    </div>
                    <li className='sidebar__list__item' onClick={closeSidebar}>
                        <NavLink className='sidebar__link' exact to='/'><img src="/assets/icons/Home_icon.png" alt="" style={{height:"25px", marginRight:"20px"}}/>
                            Home
                        </NavLink>
                    </li>
                
                    <li className='sidebar__list__item' onClick={closeSidebar}>
                        <NavLink className='sidebar__link' to='/services'><img src="/assets/icons/Product_icon.png" alt="" style={{height:"25px", marginRight:"20px"}}/>
                            Services
                        </NavLink>
                    </li>
                    <li className='sidebar__list__item' onClick={closeSidebar}>
                        <NavLink className='sidebar__link' to='/about'><img src="/assets/icons/AboutUs_icon.png" alt="" style={{height:"25px", marginRight:"20px"}}/>
                            About Us
                        </NavLink>
                    </li>
                    <li className='sidebar__list__item' onClick={closeSidebar}>
                        <NavLink className='sidebar__link' to='/blog/posts'><img src="/assets/icons/Blog.png" alt="" style={{height:"25px", marginRight:"20px"}}/>
                            Blog
                        </NavLink>
                    </li>
                   
                    <Dropdown.Divider />
                    {isAuthenticated ? authLinks() : guestLinks()}
                    
                </ul>
            </nav>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps, { logout })(Sidebar);