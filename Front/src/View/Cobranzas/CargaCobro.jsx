import React from 'react';
import { Button, Container, Form, InputGroup} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const CargaCobro = () => {
    return (
        <Container className='mb-5 mt-3 text-center w-50'>
            <Form>
                <Form.Group className='mt-3'>
                    <Form.Label>Nombre del Equipo</Form.Label>
            <Form.Select >
      <option>Equipos</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
                </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>DNI Cliente</Form.Label>
        <Form.Control type="number" placeholder="Ej:43026159" />
      </Form.Group>
                <Form.Group className='mt-3'>
            <Form.Label>Metodos de pagos</Form.Label>
            <Form.Select >
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
        <Button as={Link} to="/muestraCobro">Cobrar</Button>
        </Container>
    );
};

export default CargaCobro;
