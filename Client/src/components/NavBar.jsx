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
        <Navbar collapseOnSelect expand="lg" bg="#808080" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <Image src='/images/logo.png' style={{ height: '80px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {currentUser ? (<LinkContainer to="/">
                            {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
                            <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                                <LinkContainer to="/orders">
                                    <NavDropdown.Item >Order</NavDropdown.Item>
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

                        <Nav.Link href='/cart'>Cart {cartState.cartItems.length}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;