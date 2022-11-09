import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../../redux/actions/authActions'
import Navigation from './Navigation';


const Layout = ({ checkAuthenticated, load_user, children }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, [checkAuthenticated, load_user]);

    return (
        <>
            <Navigation />
            <div>
                {children}
            </div>
        </>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);

