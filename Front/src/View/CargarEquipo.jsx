import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";

const CargarEquipo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <Container>
      <Form className="text-center w-50" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label>ID Recepcion</Form.Label>
          <Form.Control type="text" disabled />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cliente">
          <Form.Label>Cliente</Form.Label>
          <Form.Control type="text" placeholder="Pedro Juarez" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cliente">
          <Form.Label>Telefono de contacto</Form.Label>
          <Form.Control type="number" placeholder="3813528658" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Equipo / Modelo</Form.Label>
          <Form.Control type="text" placeholder="Moto Edge 20" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="falla">
          <Form.Label>Falla</Form.Label>
          <Form.Control type="text" placeholder="Cambio pin de carga" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcion">
          <Form.Label>Descripcion de falla</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="presupuesto">
          <Form.Label>Presupuesto</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
            <Form.Control type="number" aria-label="presupuesto" />
          </InputGroup>
        </Form.Group>
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};

export default CargarEquipo;
