import React, { Fragment } from 'react';
import {Link, NavLink} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, connect } from 'react-redux'
import { logout } from '../../redux/actions/authActions';
import {NavDropdown} from 'react-bootstrap';


const AuthNavigation = ({ toggleSidebar, isAuthenticated, logout }) => {

    const auth = useSelector(state => state.auth)
    const { error, loading, user } = auth
  

    const guestLinks = () => (

        <Fragment>
            <LinkContainer to='/login'>
                <li className="navbar__auth-link"><i class="fa fa-sign-in-alt"></i> Sign In</li>
            </LinkContainer>
        </Fragment>
    );
  
    const authLinks = () => (
        <Fragment>
            <li className="navbar__auth-link" onClick={logout}><i class="fa fa-sign-out-alt"></i> Logout</li>
        </Fragment>
    );

    return(
        <nav className='navbar fixed-top shadow-sm'>
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
                        About 
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
  
export default connect(mapStateToProps, { logout })(AuthNavigation);