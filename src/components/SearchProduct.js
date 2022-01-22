import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
const SearchProduct = () => {

    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            console.log(keyword)
            history.push(`/products?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form className="auth-form px-4" onSubmit={submitHandler}>
        <Form.Group controlId='searchbox' inline>
            <Form.Control
                className="auth-input" 
                type='text'
                placeholder="Enter product..."
                name='q'
                onChange={(e) => { 
                    setKeyword(e.target.value)
                }}
            >
            </Form.Control>
        </Form.Group>
        {/*}
        <Button
                type='submit'
                variant='outline-success'
                className='p-2'
            >
                Submit
            </Button>
            */}
        </Form>
    )
}

export default SearchProduct
