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
        <Form.Label style={{color: "#FFC529"}}>Email address</Form.Label>
        <Form.Control style={{backgroundColor: "#272D2F", color:"#FFC529"}} type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color: "#FFC529"}}>Password</Form.Label>
        <Form.Control style={{backgroundColor: "#272D2F", color:"#FFC529"}} type="password" value={password} onChange={(p) => setPassword(p.target.value)} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check style={{color: "#FFC529"}} type="checkbox" label="Check me out" />
      </Form.Group>
      <Button style={{backgroundColor: "#272D2F", WebkitTextFillColor: "#FFC529", borderColor: "#FFC529"}} variant="primary"  onClick={loginHandler}>
        Submit
      </Button>
    </Form>
    </Container>
    </>
  );
}

export default Login;