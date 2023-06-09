import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {useDispatch,useSelector} from 'react-redux';
import {loginUser} from '../actions/userAction';
const Login =() => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
  useEffect(()=>{
    if(localStorage.getItem('currentUser')){
      window.location.href="/"
    }
  },[]);
  const loginHandler=()=>{
    const user={email,password}
    dispatch(loginUser(user))
  }
  return (
    <>
    <Container>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(p) => setPassword(p.target.value)} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary"  onClick={loginHandler}>
        Submit
      </Button>
    </Form>
    </Container>
    </>
  );
}

export default Login;