import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/Footer'
import Header from '../../components/global/Header'
import Message from '../../components/Message'
import LoadingMain from '../../components/spinners/LoadingMain'
import { termsAction } from '../../redux/actions/baseActions'
 
const PolicyScreen = () => {

    const termsDetails = useSelector(state => state.termsDetails)
    const { loading, error, terms } = termsDetails
    const policy = terms[0]
    // console.log(terms[0]?.body)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(termsAction())
    }, [dispatch])
    
    const termsStatement = () => {
        return {__html: policy?.body}
    };
  return (
    <>
        <Header />
        <Container className='px-4 pt-5'>
            {loading ? <LoadingMain /> :
                error? <Message variant='danger'>{error}</Message> :
                    (
                        <>
                            <div className='mt-5 mb-5' dangerouslySetInnerHTML={termsStatement()} ></div>
                        </>
                    )
                }
        </Container>
        <Footer />
    </>
  )
}

export default PolicyScreen