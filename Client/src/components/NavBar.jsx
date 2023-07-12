import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap'
import { logoutUser } from '../actions/userAction'

function NavBar() {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartReducer);
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container >
                <Navbar.Brand href="/">
                    <Image src='/images/logo3.png' style={{height : "100px", paddingLeft: "20px", paddingTop: "2px"}} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                    <Nav.Link href="/" activeClassName="active"style={{ color: "#FFC529", fontSize: "16px",fontFamily: "cursive", fontWeight: "bold", paddingLeft: "30px", paddingRight:"30px"}}  >Home</Nav.Link>
                        <Nav.Link href="/about" activeClassName="active" style={{ color: "#FFC529", fontSize: "16px",fontFamily: "cursive", fontWeight: "bold", paddingLeft: "30px", paddingRight:"30px", paddingTop: "10px", paddingBottom: "30px"}}>About Us</Nav.Link>
                        <Nav.Link href="#action/3.1" activeClassName="active" style={{ color: "#FFC529", fontSize: "16px",fontFamily: "cursive", fontWeight: "bold", paddingLeft: "30px", paddingRight:"30px"}}>Action</Nav.Link>
                        <Nav.Link href="/contact" activeClassName="active" style={{ color: "#FFC529", fontSize: "16px",fontFamily: "cursive", fontWeight: "bold", paddingLeft: "30px", paddingRight:"30px"}}>Contact</Nav.Link>
                        <Nav.Link href="/Policy" activeClassName="active" style={{ color: "#FFC529", fontSize: "16px",fontFamily: "cursive", fontWeight: "bold", paddingLeft: "30px", paddingRight:"30px"}}>Policy</Nav.Link>
                        
                        <Nav.Link href='/cart'style={{ color: "#FFC529", fontSize: "16px",fontFamily: "cursive", fontWeight: "bold", paddingLeft: "30px", paddingRight:"30px"}}>Cart {cartState.cartItems.length}</Nav.Link>
                        {currentUser ? (<LinkContainer to="/">
                            {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
                            <NavDropdown className="ms-auto" title={currentUser.name}  id="basic-nav-dropdown">
                                <LinkContainer to="/orders">
                                    <NavDropdown.Item>Order</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={dispatch(logoutUser)}>
                                    Logout
                                </NavDropdown.Item>

                            </NavDropdown></LinkContainer>) :
                            (
                                <>
                                    {" "}
                                    <LinkContainer to="login/">
                                        <Nav.Link>Login</Nav.Link></LinkContainer>
                                    <LinkContainer to="register/">
                                        <Nav.Link>Register</Nav.Link></LinkContainer>
                                </>)}
                                
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;