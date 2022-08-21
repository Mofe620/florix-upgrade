import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/Footer'
import Header from '../../components/global/Header'
import Message from '../../components/Message'
import LoadingMain from '../../components/spinners/LoadingMain'

import Button from 'react-bootstrap/Button';
import Terms from '../../components/Terms';

const TermsScreen = () => {
    const [modalShow, setModalShow] = React.useState(true);
    return (
      <Container>
        <Terms
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    );
}

export default TermsScreen