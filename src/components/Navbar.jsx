import 'bootstrap/dist/css/bootstrap.css';
import {Navbar ,Container ,Nav } from "react-bootstrap"
import logo from '../assets/logo192.png'
const navbar = () => {
	return (
		<>
        <Navbar  fixed="top" bg="dark" variant="dark">
    <Container >
    <Navbar.Brand href="#home">
    <img src={logo} alt="" width="20" height="20"/>
    </Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
    </Container>
</Navbar>
		</>
	);
};

export default navbar;
