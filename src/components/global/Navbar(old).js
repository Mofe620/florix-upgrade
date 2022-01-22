import React, { Fragment, useState } from 'react';
import {Link, Redirect} from 'react-router-dom'
import { useDispatch, useSelector, connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../../redux/actions/authActions';
import {Container, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';



const Navigate = ({ logout, isAuthenticated }) =>{
  const [redirect, setRedirect] = useState(false);

  const auth = useSelector(state => state.auth)
  const { error, loading, user } = auth

  const dispatch = useDispatch()
  const logoutHandler = () => {
    logout()
    setRedirect(true);
  }



  const guestLinks = () => (
    <Fragment>
      <LinkContainer to='/register'>
        <NavDropdown.Item>Register</NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to='/login'>
        <NavDropdown.Item>Login</NavDropdown.Item>
        </LinkContainer>
    </Fragment>
  );

  const authLinks = () => (
    <Fragment>
      <LinkContainer to='/profile'>
        <NavDropdown.Item>Profile</NavDropdown.Item>
      </LinkContainer>

    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
    </Fragment>
  );

    return (
      
      <nav
      className="navbar navbar-expand-lg navbar-light fixed-top main-navigation shadow-sm"
    >
      <div className="navbar__search-box">
                <form className="d-flex px-3 px-lg-2">
                <input
                    className="form-control mr-2 search-input"
                    type="search"
                    placeholder="Search Products"
                    aria-label="Search"
                />
                <span className="mt-2 ms-2"><i className="fas fa-search"></i></span>
                </form>
            </div>
            
      <div className="container-fluid">
        <Link to="/"><img className='flolog-logo'  src='/assets/icons/flolog-logo.png' alt="brand-logo" /></Link>
        
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="overlay d-flex d-lg-none"></div>

        <div className="order-lg-2 d-lg-flex w-100 sidebar pb-3 pb-lg-0">
          <ul className="navbar-nav mr-lg-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link px-3 px-lg-2 active" aria-current="page" to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 px-lg-2" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 px-lg-2" to="/">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 px-lg-2" to="/">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 px-lg-2" to="/">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 px-lg-2" to="/contact-us">Contact Us</Link>
            </li>
          </ul>
          
          <div className="ms-auto"></div>
          <NavDropdown title="Account" id="basic-nav-dropdown">
       
        </NavDropdown>
        
        {/* {isAuthenticated ? <p>{user.username}</p> : ''} */}
          <div className="search-box ms-auto">
            <form className="d-flex px-3 px-lg-2">
              <input
                className="form-control mr-2 search-input"
                type="search"
                placeholder="Search Products"
                aria-label="Search"
              />
              <span className="mt-2 ms-2"><i className="fas fa-search"></i></span>
            </form>
          </div>
        </div>
      </div>
      {redirect ? <Redirect to='/' /> : <Fragment></Fragment>}
    </nav>
    )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navigate);
