import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/global/Header'
import PrescriptionForm from '../../components/PrescriptionForm'

const PrescriptionFormSreen = () => {
  return (
    <>
      <Header />
      <Container className='content'>
          <div className='pform'>
              <h1 className='pform__header'>Upload Valid Drug Prescription</h1>
              <p>Please fill in information on your prescription with much details as possible</p>
          </div>
          <div className=''>
              <PrescriptionForm />
          </div>
      </Container>
      <Footer />
    </>
  )
}

export default PrescriptionFormSreen