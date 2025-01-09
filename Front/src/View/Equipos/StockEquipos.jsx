import React from 'react';
import { Container, FormGroup, Row } from 'react-bootstrap';

const StockEquipos = () => {
    return (
        <Container>
            <Row>
            <Form.Group className="mb-3" controlId="id">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" disabled />
        </Form.Group>
            <Form.Group className="mb-3" controlId="text">
          <Form.Label>Modelo</Form.Label>
          <Form.Control type="text" disabled />
        </Form.Group>
            <Form.Group className="mb-3" controlId="text">
          <Form.Label>Falla</Form.Label>
          <Form.Control type="text" disabled />
        </Form.Group>
            <Form.Group className="mb-3" controlId="text">
    <Form.Select aria-label="Estado">
      <option>Estado</option>
      <option value="1">Recepcionado</option>
      <option value="2">En Revision</option>
      <option value="3">Entregado</option>
    </Form.Select>
        </Form.Group>
            </Row>
            <Row>
            <Form.Group className="mb-3" controlId="id">
          <Form.Label>#A5</Form.Label>
          <Form.Control type="text" disabled />
        </Form.Group>
            <Form.Group className="mb-3" controlId="text">
          <Form.Label>G71</Form.Label>
          <Form.Control type="text" disabled />
        </Form.Group>
            <Form.Group className="mb-3" controlId="text">
          <Form.Label>Glass</Form.Label>
          <Form.Control type="text" disabled />
        </Form.Group>
            <Form.Group className="mb-3" controlId="text">
    <Form.Select aria-label="Estado">
      <option>Estado</option>
      <option value="1">Recepcionado</option>
      <option value="2">En Revision</option>
      <option value="3">Entregado</option>
    </Form.Select>
        </Form.Group>
            </Row>
        </Container>
    );
};

export default StockEquipos;