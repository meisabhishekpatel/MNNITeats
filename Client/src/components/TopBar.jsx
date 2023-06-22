import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopBar() {
    return (
        <Navbar bg="#FFC529" variant='dark' expand="lg" style={{backgroundColor:"#FFC529"}}>
            <Container style={{backgroundColor:"#FFC529"}}>
                <Navbar.Brand href="/"style={{backgroundColor:"#FFC529"}}>MNNITeats</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"style={{backgroundColor:"#FFC529"}} />
                <Navbar.Collapse id="basic-navbar-nav"style={{backgroundColor:"#FFC529"}}>
                    <Nav className="ms-auto"style={{backgroundColor:"#FFC529"}}>
                        <Nav.Link href="/" activeClassName="active"style={{backgroundColor:"#FFC529"}}  >Home</Nav.Link>
                        <Nav.Link href="/about" activeClassName="active" style={{backgroundColor:"#FFC529"}}>About Us</Nav.Link>
                        <NavDropdown title="" id="basic-nav-dropdown" style={{backgroundColor:"#FFC529"}}>
                            <NavDropdown.Item href="#action/3.1"style={{backgroundColor:"#FFC529"}}>Action</NavDropdown.Item>
                            <NavDropdown.Item href="/contact">
                                Contact Us
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/Policy">Policy</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;