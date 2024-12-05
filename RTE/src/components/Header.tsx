import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <div>
      {/* First Row of Navbar */}
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-dark">Untitled Document</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="File" id="fileDropdown">
                <NavDropdown.Item href="#new">New</NavDropdown.Item>
                <NavDropdown.Item href="#open">Open</NavDropdown.Item>
                <NavDropdown.Item href="#save">Save</NavDropdown.Item>
                <NavDropdown.Item href="#download">Download</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Edit" id="editDropdown">
                <NavDropdown.Item href="#undo">Undo</NavDropdown.Item>
                <NavDropdown.Item href="#redo">Redo</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#cut">Cut</NavDropdown.Item>
                <NavDropdown.Item href="#copy">Copy</NavDropdown.Item>
                <NavDropdown.Item href="#paste">Paste</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title="User" id="userDropdown" align="end">
                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>

              <Button variant="outline-primary" className="ms-2">Share</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Second Row of Navbar (Toolbar with editing buttons) */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav className="me-auto">
            <Button variant="outline-secondary" className="me-2">Bold</Button>
            <Button variant="outline-secondary" className="me-2">Italic</Button>
            <Button variant="outline-secondary" className="me-2">Underline</Button>
            <Button variant="outline-secondary" className="me-2">Align Left</Button>
            <Button variant="outline-secondary" className="me-2">Align Center</Button>
            <Button variant="outline-secondary" className="me-2">Align Right</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
