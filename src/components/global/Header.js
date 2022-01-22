import React, { Fragment, useEffect } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../../redux/actions/authActions'
import Navigation from './Navigation';
import { Container } from 'react-bootstrap';


const Layout = ({ checkAuthenticated, load_user, children }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);

    return (
        <Fragment>
            <Navigation />
            <Container >
                {children}
            </Container>
        </Fragment>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);

