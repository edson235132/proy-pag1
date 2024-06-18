
import {Navbar, Container, Nav} from "react-bootstrap";
import { Outlet,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
export const NavBar = () =>{
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(true);
            }
        }
        window.addEventListener("scroll", onScroll)
        return ()=>window.removeEventListener("scroll", onScroll);
    },[])
    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
    
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="/">
                    <img  src="https://cdn-icons-png.flaticon.com/128/1998/1998627.png" alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >

                </Navbar.Toggle >   
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="pog" ><font color="white"><h2>Principal</h2></font></Nav.Link>
    
                        <Nav.Link as={Link} to="http://localhost:3001/" className="pog"><font color="white"><h2>Proyectos</h2></font></Nav.Link>
                        <Nav.Link as={Link} to="/Contactos" className="pog"><font color="white"><h2>Adopta</h2></font></Nav.Link>
                        <Nav.Link as={Link} to="/Contactos" className="pog"><font color="white"><h2>Contactanos</h2></font></Nav.Link>
                        <Nav.Link as={Link} to="https://www.youtube.com/watch?v=rnskTkpEjHM" className="pog"><font color="white" ><h2>Creditos</h2></font></Nav.Link>
                        
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                        
                            <a href="https://www.instagram.com/alberguecanmartinoficial/"> <img  src="https://cdn-icons-png.flaticon.com/128/87/87390.png"/></a>
                            <a href="https://www.facebook.com/AlbergueDorado?locale=es_LA"> <img src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png"/></a>
                            
                        </div>
                        
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}