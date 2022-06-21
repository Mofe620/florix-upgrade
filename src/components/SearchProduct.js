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
        <Form className="shop__bar__form" onSubmit={submitHandler}>
        <Form.Group className='shop__bar___form__group' controlId='searchbox' inline>
            <Form.Control
                variant="lg"
                className="shop__bar__form__control"
                type='text'
                placeholder="Search Product"
                name='q'
                style={{backgroundColor:"white"}}
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
