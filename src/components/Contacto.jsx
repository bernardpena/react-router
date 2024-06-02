import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Contacto.css";

function Contacto() {
    return (
        <Form>
            <h1>Cuéntanos, ¿en que te podemos ayudar?</h1>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3 btn-enviar" as="lg" controlId="exampleForm.ControlTextarea1">
                <Button variant="outline-danger">Enviar</Button>{' '}
            </Form.Group>

        </Form>
    )
}

export default Contacto