import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@flaticon/flaticon-uicons/css/all/all.css";

const Header = ({ editor }: { editor: any }) => {
  const currentType = editor?.getAttributes("heading")?.level || "paragraph";

  return (
    <>
      {/* First Row of Navbar */}
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-dark">
            Untitled Document
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="File" id="fileDropdown">
                <NavDropdown.Item href="#new">New</NavDropdown.Item>
                <NavDropdown.Item href="#open">Open</NavDropdown.Item>
                <NavDropdown.Item href="#save">Save</NavDropdown.Item>
                <NavDropdown.Item href="#download">Download</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title="User" id="userDropdown" align="end">
                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>

              <Button variant="outline-primary" className="ms-2">
                Share
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Second Row of Navbar (Toolbar with editing buttons) */}
      <nav className="navbar bg-light p-3 border-bottom">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left Section: Undo and Redo Icons */}
          <div className="d-flex align-items-center">
            <button
              className="btn"
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
            >
              <i className="fi fi-rr-undo-alt fs-5" title="Undo"></i>
            </button>
            <button
              className="btn"
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
            >
              <i className="fi fi-rr-redo-alt fs-5" title="Redo"></i>
            </button>
          </div>

          {/* Center Section: Dropdowns and Toolbar */}
          <div className="d-flex align-items-center gap-3 mx-auto">
            {/* Normal Text Dropdown */}

            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {currentType === "paragraph"
                  ? "Normal Text"
                  : `Heading ${currentType}`}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => editor.chain().focus().setParagraph().run()}
                  >
                    Normal Text
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      currentType === "1" ? "is-active" : ""
                    }`}
                    onClick={() =>
                      editor.chain().focus().toggleHeading({ level: 1 }).run()
                    }
                  >
                    Heading 1
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      currentType === "1" ? "is-active" : ""
                    }`}
                    onClick={() =>
                      editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                  >
                    Heading 2
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      currentType === "1" ? "is-active" : ""
                    }`}
                    onClick={() =>
                      editor.chain().focus().toggleHeading({ level: 3 }).run()
                    }
                  >
                    Heading 3
                  </button>
                </li>
              </ul>
            </div>

            {/* Alignment Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fi fi-rr-align-left"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">
                    <i className="fi fi-rr-align-left"></i> Align Left
                  </button>
                </li>
                <li>
                  <button className="dropdown-item">
                    <i className="fi fi-rr-align-center"></i> Align Center
                  </button>
                </li>
                <li>
                  <button className="dropdown-item">
                    <i className="fi fi-rr-symbol"></i> Align Right
                  </button>
                </li>
                <li>
                  <button className="dropdown-item">
                    <i className="fi fi-rr-align-justify"></i> Justify
                  </button>
                </li>
              </ul>
            </div>

            {/* Font Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Font
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">Arial</button>
                </li>
                <li>
                  <button className="dropdown-item">Times New Roman</button>
                </li>
                <li>
                  <button className="dropdown-item">Roboto</button>
                </li>
              </ul>
            </div>

            {/* Font Size Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                12
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">10</button>
                </li>
                <li>
                  <button className="dropdown-item">12</button>
                </li>
                <li>
                  <button className="dropdown-item">14</button>
                </li>
              </ul>
            </div>

            {/* Font Color Picker */}
            <input
              type="color"
              className="form-control form-control-color"
              title="Font Color"
            />

            {/* Formatting Icons */}
            <button
              className="btn btn-outline-secondary"
              onClick={() => editor.chain().focus().toggleBold().run()}
            >
              <b>B</b>
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => editor.chain().focus().toggleItalic().run()}
            >
              <i>I</i>
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => editor.chain().focus().toggleUnderline().run()}
            >
              <u>U</u>
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => editor.chain().focus().toggleStrike().run()}
            >
              <s>S</s>
            </button>
            <button
              className="btn btn-outline-secondary"
              title="Highlight"
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .toggleHighlight({ color: "#ffc078" })
                  .run()
              }
            >
              <i className="fi fi-rr-highlighter-line"></i>
            </button>
            <button
              className="btn btn-outline-secondary"
              title="Erase Formatting"
              onClick={() => editor.chain().focus().unsetAllMarks().run()}
            >
              <i className="fi fi-rr-eraser"></i>
            </button>

            {/* List and Insert Icons */}
            <button className="btn btn-outline-secondary" title="Bullet Points">
              <i className="fi fi-rr-list"></i>
            </button>
            <button className="btn btn-outline-secondary" title="Insert Image">
              <i className="fi fi-rr-picture"></i>
            </button>
            <button className="btn btn-outline-secondary" title="Insert Link">
              <i className="fi fi-rr-link"></i>
            </button>
          </div>

          {/* Empty Div for Right Section */}
          <div></div>
        </div>
      </nav>
    </>
  );
};

export default Header;
