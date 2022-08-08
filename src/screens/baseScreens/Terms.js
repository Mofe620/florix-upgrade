import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/Footer'
import Header from '../../components/global/Header'
import Message from '../../components/Message'
import LoadingMain from '../../components/spinners/LoadingMain'
import { termsAction } from '../../redux/actions/baseActions'
 
const Terms = () => {

    const termsDetails = useSelector(state => state.termsDetails)
    const { loading, error, terms } = termsDetails

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(termsAction())
    }, [dispatch])
    
    const termsStatement = () => {
        return {__html: terms[0]?.body}
    };
  return (
    <>
        <Header />
        <Container className='mt-4'>
            {loading ? <LoadingMain /> :
                error? <Message variant='danger'>{error}</Message> :
                    (
                        <>
                           <h2>Hello</h2>
                            <div className='mt-5 mb-5' dangerouslySetInnerHTML={termsStatement()} ></div>
                        </>
                    )
                }
        </Container>
        <Footer />
    </>
  )
}

export default Terms