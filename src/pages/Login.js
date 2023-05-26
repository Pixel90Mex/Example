import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {fetchUser} from '../slices/userSlice';

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch()
    const {user, loading: userLoading, error} = useSelector(state => state.user)
    console.log(user, error, userLoading)
    const navigate = useNavigate()
    useEffect(() => {
        if (user?.email && user?.email.length > 0) {
            navigate('../home', {replace: true})
        }
    }, [navigate, user])
    const handleChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch(fetchUser(formData))
    }

    return (
        <Form className='m-5' onSubmit={handleSubmit}>
            <Form.Control
                onChange={handleChange}
                value={formData.email}
                type="email"
                placeholder="insert email"
                className="my-2"
                aria-label="email"
            />
            <Form.Control
                onChange={handleChange}
                value={formData.password}
                type="password"
                placeholder="insert password"
                className="my-2"
                aria-label="password"
            />
            <Button type="Submit">
                Login
            </Button>
        </Form>
    )
}

export default Login