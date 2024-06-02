import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { FcHome } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { LuCakeSlice } from "react-icons/lu";
import './Nav.css';

function Nav() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><FcHome /> <Link to="/" className="direc">Home</Link></Navbar.Brand>
                <Navbar.Brand href="#home"><FcContacts /> <Link to="/Contacto" className="direc">Contacto</Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Happy Cake <Image src="holder.js/171x180" rounded />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    )
}

export default Nav