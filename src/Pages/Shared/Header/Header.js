import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='navBackground' sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <span>NUTRIO</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/equipments">Equipments</Nav.Link>
                        </Nav>
                        <Nav>

                            {
                                user
                                    ?
                                    <>
                                        <Nav.Link  >
                                            Manage Items
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/add-product" >
                                            Add Item
                                        </Nav.Link>
                                        <Nav.Link  >
                                            My Items
                                        </Nav.Link>
                                        <Nav.Link eventKey={3} onClick={handleSignOut}>
                                            Sign out
                                        </Nav.Link>
                                    </>
                                    :
                                    <Nav.Link eventKey={2} as={Link} to="/login">
                                        login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;