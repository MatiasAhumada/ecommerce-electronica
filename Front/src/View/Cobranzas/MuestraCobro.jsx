import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";

const MuestraCobro = () => {
  return (
    <>
      <Container className="d-flex justify-content-center mt-5 mb-5">
        <Form className="text-center w-50" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="cliente">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" placeholder="Pedro Juarez" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cliente">
            <Form.Label>Contacto o Email</Form.Label>
            <Form.Control type="text" placeholder="3813528658" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>DNI Cliente</Form.Label>
            <Form.Control type="number" placeholder="Ej:43026159" />
          </Form.Group>
        </Form>
      </Container>
      <Container className="d-flex justify-content-center mt-5 mb-5">
        <Form.Group className="mb-3" controlId="Marca">
          <Form.Label>Marca</Form.Label>
          <Form.Control type="text" placeholder="Samsung" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Modelo">
          <Form.Label>Modelo</Form.Label>
          <Form.Control type="text" placeholder="A54" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="falla">
          <Form.Label>Falla</Form.Label>
          <Form.Control type="text" placeholder="Cambio pin de carga" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcion">
          <Form.Label>Descripcion de falla</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="presupuesto dado">
          <Form.Label>Presupuesto Dado</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
            <Form.Control type="number" aria-label="presupuesto" />
          </InputGroup>
        </Form.Group>
      </Container>
      <Container className="mb-5 mt-3 text-center w-50">
        <Form>
          <Form.Group className="mt-3">
            <Form.Label>Nombre del Equipo</Form.Label>
            <Form.Select>
              <option>Equipos</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Monto a Cobrar</Form.Label>
            <Form.Control type="number" placeholder="Ej:$100.000" />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Metodos de pagos</Form.Label>
            <Form.Select>
              <option>Metodos de pagos</option>
              <option value="Mercado Pago">Mercado Pago</option>
              <option value="Credito/Debito">Credito/Debito</option>
              <option value="Transferencia">Transferencia</option>
              <option value="QR">QR</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Form.Group className="mb-3" controlId="Monto a Cobrar">
          <Form.Label>Monto a Cobrar</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
            <Form.Control type="number" aria-label="presupuesto" />
          </InputGroup>
        </Form.Group>
        <Button as={Link} to="/muestraCobro">
          Cobrar
        </Button>
      </Container>
    </>
  );
};

export default MuestraCobro;
