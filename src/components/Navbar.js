import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../assets/logo.png";

function NavScrollExample() {
  return (
    <>
      <Navbar expand="lg" bg="#15306F" className="navbar-custom">
        <Container fluid>
          <Navbar.Brand href="#" style={{ marginLeft: "60px" }}>
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                title="Audit Services"
                id="navbarScrollingDropdown"
                style={{ marginLeft: "140px", color: "#FFF" }}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link
                href="#action1"
                style={{ marginLeft: "50px", color: "#FFF" }}
              >
                Pricing
              </Nav.Link>
              <Nav.Link
                href="#action2"
                style={{ marginLeft: "50px", color: "#FFF" }}
              >
                Blog
              </Nav.Link>
              <NavDropdown
                title="Resources"
                id="navbarScrollingDropdown"
                style={{ marginLeft: "60px" }}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Button style={{ marginRight: "15px" }}>Portfolio</Button>
            </Form>

            <Form className="d-flex">
              <Button style={{ marginRight: "145px" }}>Request An Audit</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;
