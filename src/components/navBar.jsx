import { Component } from "react"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Search, Bell, PersonCircle } from 'react-bootstrap-icons';

class NavBar extends Component{
    render(){
        return(
            <>
                {/* <Navbar expand="lg" bg="dark" data-bs-theme="dark" style= {{ color: "#fff" }}>
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">TV shows</Nav.Link>
                                <Nav.Link href="#link">Movies</Nav.Link>
                                <Nav.Link href="#link">Recently Added</Nav.Link>
                                <Nav.Link href="#link">My List</Nav.Link>
                            </Nav>
                            <div>
                                <Search color="#f5f5f1" size={20} />
                                <Bell color="#f5f5f1" size={20} />
                                <PersonCircle color="#f5f5f1" size={20} />
                            </div>
                            
                        </Navbar.Collapse>
                        
                    </Container>
                </Navbar> */}
                    <nav
                        className="navbar navbar-expand-lg navbar-dark"
                        style={{backgroundColor: "#221f1f"}}
                    >
                        <a className="navbar-brand" href="#Link">
                        <img src="assets/logo.png" style={{width: "100px", height: "55px"}} alt=""/>
                        </a>
                        <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link font-weight-bold" href="#Link" >Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link font-weight-bold" href="#Link">TV Shows</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-weight-bold" href="#Link">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-weight-bold" href="#Link">Recently Added</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-weight-bold" href="#Link">My List</a>
                            </li>
                        </ul>
                        <Search color="#f5f5f1" size={20} />
                        <div id="kids">KIDS</div>
                            <Bell color="#f5f5f1" size={20} />
                            <PersonCircle color="#f5f5f1" size={20} />
                        </div>
                    </nav>
                

            </>
        )
    }
}

export default NavBar

