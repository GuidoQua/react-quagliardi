import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidgetContainer from '../CartWidget/CartWidget';
import './NavbarBs.css'

function NavbarBs() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <div className='nav-style'>
                <Navbar.Brand href="#home"><img className="logo" src="/logo.png"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex gap-lg-5">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Calzado</Nav.Link>
                <Nav.Link href="#link">Indumentaria</Nav.Link>
                <Nav.Link href="#link">Accesorios</Nav.Link>
            </Nav>
            <CartWidgetContainer/>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavbarBs;