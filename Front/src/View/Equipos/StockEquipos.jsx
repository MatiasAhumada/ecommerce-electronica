import React from "react";
import { Container, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";

const StockEquipos = () => {
  return (
    <Container>
     <Row className="d-flex justify-content-between aling-items-center gap-3">
        <FormGroup className="col-2 mb-3" controlId="Id">
          <FormLabel>ID</FormLabel>
          <FormControl type="text" placeholder="ID" disabled />
        </FormGroup>

        <FormGroup className="col-3 mb-3" controlId="Modelo">
          <FormLabel>Modelo</FormLabel>
          <FormControl type="text" placeholder="Modelo" disabled />
        </FormGroup>
        <FormGroup className="col-3 mb-3" controlId="Falla">
          <FormLabel>Falla</FormLabel>
          <FormControl type="text" placeholder="Falla" disabled />
        </FormGroup>
        <FormGroup className="col-3 mb-3" controlId="Falla">
          <FormLabel>Estado del Equipo</FormLabel>
          <FormControl type="text" placeholder="Estado" disabled />
        </FormGroup>
      </Row>
      <Row className="d-flex justify-content-between aling-items-center gap-3">
        <FormGroup className="col-2 mb-3" controlId="Id">
          <FormLabel>ID</FormLabel>
          <FormControl type="text" placeholder="#A1" disabled />
        </FormGroup>

        <FormGroup className="col-3 mb-3" controlId="Modelo">
          <FormLabel>Modelo</FormLabel>
          <FormControl type="text" placeholder="G71 5G" disabled />
        </FormGroup>
        <FormGroup className="col-3 mb-3" controlId="Falla">
          <FormLabel>Falla</FormLabel>
          <FormControl type="text" placeholder="Glass" disabled />
        </FormGroup>
        <FormGroup className="col-3 mb-3" controlId="Estado">
          <FormLabel>Estado</FormLabel>
          <FormControl type="text" placeholder="En Revision" disabled />
        </FormGroup>
      </Row>
    </Container>
  );
};

export default StockEquipos;