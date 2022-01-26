import React, { Fragment } from 'react';
import {Link, NavLink} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, connect } from 'react-redux'
import { logout } from '../../redux/actions/authActions';
import {NavDropdown} from 'react-bootstrap';


const NavbarInfo = ({ toggleSidebar, isAuthenticated, logout }) => {

    const auth = useSelector(state => state.auth)
    const { error, loading, user } = auth
  

    const guestLinks = () => (

        <Fragment>
            <LinkContainer to='/login'>
                <li className="navbar__auth-link">Sign In</li>
            </LinkContainer>
        </Fragment>
    );
  
    const authLinks = () => (
        <Fragment>
            <li className='navbar__list__item'>
                <NavLink className='navbar__link' to='/products'>
                        Drugstore
                </NavLink>
            </li>
            <li className="navbar__auth-link" onClick={logout}>Logout</li>
        </Fragment>
    );

    return(
        <nav className='navbar fixed-top shadow-sm'>
            <div className="navbar__logobtn">
                <span className="navbar__logobtn__btn" >&#9776;</span>
        
                <Link className='navbar__logo' exact to='/'>
                    <img className='navbar__flolog-logo'  src='/assets/icons/logoandname.png' alt="brand-logo" />
                </Link>
            </div>
            <ul className='navbar__list ms-auto'>
                <li className='navbar__list__item'>
                    <NavLink className='navbar__link' exact to='/'>
                        Home
                    </NavLink>
                </li>
                <li className='navbar__list__item'>
                    <NavLink className='navbar__link' to='/services'>
                        Services
                    </NavLink>
                </li>
                
                <li className='navbar__list__item'>
                    <NavLink className='navbar__link' to='/about'>
                        About 
                    </NavLink>
                </li>
                <li className='navbar__list__item'>
                    <NavLink className='navbar__link' to='/posts'>
                        Blog
                    </NavLink>
                </li>

                    {isAuthenticated ? authLinks() : guestLinks()}
        
            </ul>
     
            <div className='navbar__button' onClick={toggleSidebar}>
               
            </div>
            <div>
            </div>  
         
        </nav>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps, { logout })(NavbarInfo);