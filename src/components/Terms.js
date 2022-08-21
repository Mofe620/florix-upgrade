import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { termsAction } from '../redux/actions/baseActions';
import { useDispatch, useSelector } from 'react-redux'
import LoadingMain from './spinners/LoadingMain';
import Message from './Message';

const Terms = (props) => {

    const termsDetails = useSelector(state => state.termsDetails)
    const { loading, error, terms } = termsDetails

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(termsAction())
    }, [dispatch])
    
    const termsStatement = () => {
        return {__html: terms[1]?.body}
    };
  return (
    <>
      {loading ? <LoadingMain /> :
        error? <Message variant='danger'>{error}</Message> :
          (
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Body>
                <div>
                    {/* <h2>{policy?.title}</h2> */}
                    <div className='' dangerouslySetInnerHTML={termsStatement()} ></div>
                </div>
                    <p>
                      <a href='/'>Back to Home</a>
                    </p>
                {/* <Button onClick={props.onHide, ()=>{}} variant='light'>Close</Button> */}
              </Modal.Body>
            </Modal>
          )
      }
    </> 
  );
}

export default Terms