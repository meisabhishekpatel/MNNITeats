import React, {useState} from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux'
import {registerUser} from '../actions/userAction'
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

const registerState = useSelector(state => state.registerUserReducer)
const {error,success,loading} = registerState

  const dispatch=useDispatch()
  const registerHandler = () => {
    if(password!==confirmPassword){
      alert('Password does not match');
    }
    else{
      const user = {name, email, password, confirmPassword};
    
      dispatch(registerUser(user));
      window.location.href="/login"

    }
  }
  return (
    <>
    <Container>
      {loading && <Loader /> }
      {success && <Success success="User Registered Successfully" />}
      {error && <Error error="Something went wrong" /> }
    <Form>
      <h1>Registration</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label style={{color: "#FFC529"}}>Name</Form.Label>
        <Form.Control style={{backgroundColor: "#272D2F", color:"#FFC529"}}
        type="text" 
        placeholder="Enter name" 
        value={name}
        onChange={e => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color: "#FFC529"}}>Email address</Form.Label>
        <Form.Control style={{backgroundColor: "#272D2F", color:"#FFC529"}}
        type="email" 
        placeholder="Enter email" 
        value={email}
        onChange={e => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color: "#FFC529"}}>Password</Form.Label>
        <Form.Control style={{backgroundColor: "#272D2F", color:"#FFC529"}}
        type="password"
         placeholder="Password" 
         value={password}
        onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label style={{color: "#FFC529"}}>Confirm Password</Form.Label>
        <Form.Control style={{backgroundColor: "#272D2F", color:"#FFC529"}}
        type="password" 
        placeholder ="Confirm Password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check style={{backgroundColor: "#272D2F", WebkitTextFillColor: "#FFC529"}} type="checkbox" label="Check me out" />
      </Form.Group>
      <Button style={{backgroundColor: "#272D2F", WebkitTextFillColor: "#FFC529", borderColor: "#FFC529"}} variant="primary"
        onClick={registerHandler}>
        Register
      </Button>
    </Form>
    </Container>
    </>
  );   
};

export default Register
