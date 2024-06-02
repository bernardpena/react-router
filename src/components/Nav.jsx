import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Image from 'react-bootstrap/Image';
import { FcHome } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { LuCakeSlice } from "react-icons/lu";
import img2 from "../assets/img/Cuke.jpg"
import './Nav.css';

function Nav() {
    return (
        <Navbar className="bg-body-tertiary barra" data-bs-theme="dark">
            <Container className='container'>
                <Navbar.Brand href="#home"><FcHome /> <Link to="/" className="direc">Home</Link></Navbar.Brand>
                <Navbar.Brand href="#home"><FcContacts /> <Link to="/Contacto" className="direc">Contacto</Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="">Happy Cake</a> <Image src={img2} thumbnail className='imgcuke' />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    )
}

export default Nav