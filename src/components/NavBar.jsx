import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidged';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand ><NavLink to="/">Home </NavLink></Navbar.Brand>
      <Nav className="me-auto ml-2">
        <NavLink to="/">Recetas </NavLink>
        <NavLink to="tipo/vegetariano">Vegetariano </NavLink>
        <NavLink to="tipo/novegetariano">No Vegetariano </NavLink>
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar>

  );
};
