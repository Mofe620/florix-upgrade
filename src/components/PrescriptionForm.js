// import React, { useState } from 'react'
// import { Button, Container, Form } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
// import { uploadPrescription } from '../redux/actions/prescriptionAction'

// const PrescriptionForm = () =>{

//     const [name, setName]=useState("")
//     const [center, setCenter] = useState("")
//     const [profession, setProfession] = useState("")
//     const [tel, setTel]=useState("")
//     const [fileUpload, setFileUpload]=useState({})
//     const [extraInfo, setExtraInfo]=useState("")

//     const dispatch = useDispatch()
//     const submitHandler = (e) =>{
//         e.preventDefault()
//          dispatch(uploadPrescription(profession, name, center, tel, fileUpload, extraInfo))
//     }

//     return(
//         <Container className='pform'>
//             <Form>
//                 <Form.Group className='pform__group'>
//                     <Form.Control 
//                         className='pform__input' 
//                         as="select" 
//                         aria-label="Default select example"
//                         value={profession}
//                         onChange={(e)=>setProfession(e.target.value)}
//                         >
//                             <option>Are you a Healthcare Professional?</option>
//                             <option value="No">No</option>
//                             <option value="Yes">Yes</option>
//                     </Form.Control>
//                 </Form.Group>
//                 <Form.Group className='pform__group'>
//                     <Form.Label>Name<strong style={{color:"red"}}>*</strong></Form.Label>
//                     <Form.Control 
//                         className='pform__input' 
//                         placeholder="Enter name on prescription" 
//                         value={name}
//                         onChange={(e)=>setName(e.target.value)}
//                         />
//                 </Form.Group>
//                 <div className='pform__group__wrapper my-5'>
//                     <Form.Group className='pform__group__first-half'>
//                         <Form.Label>Healthcare Center<strong style={{color:"red"}}>*</strong></Form.Label>
//                         <Form.Control 
//                             className='pform__input ' 
//                             placeholder="Please enter the name of center you saw you prescriber" 
//                             value={center}
//                             onChange={(e)=>setCenter(e.target.value)}
//                             />
//                     </Form.Group>
//                     <Form.Group className='pform__group__second-half'>
//                         <Form.Label>Phone Number<strong style={{color:"red"}}>*</strong></Form.Label>
//                         <Form.Control 
//                             className='pform__input ms-2' 
//                             placeholder="Phone number" 
//                             value={tel}
//                             onChange={(e)=>setTel(e.target.value)}
//                             />
//                     </Form.Group>
//                 </div>
//                 <Form.Group className='pform__group'>
//                     <Form.Label>Upload Prescription File. <strong style={{color:"red"}}>(PDF, JPEG, JPG)</strong></Form.Label>
//                     <Form.Control 
//                         type="file"
//                         className='' 
//                         // value={fileUpload}
//                         // onChange={(e)=>setFileUpload(e.target.value)}
//                         />
//                 </Form.Group>

//                 <Form.Group className='pform__group mt-5'>
//                         <Form.Label>Extra Details on Prescription (Optional)</Form.Label>
//                         <Form.Control 
//                             className='pform__textarea' 
//                             as="textarea" 
//                             placeholder="Start typing..." 
//                             value={extraInfo}
//                             onChange={(e)=>setExtraInfo(e.target.value)}
//                             />
//                 </Form.Group>
//                 <Button className='pform__btn' onClick={submitHandler}>Submit Prescription</Button>
//             </Form>
//         </Container>
//     )
// }

// export default PrescriptionForm