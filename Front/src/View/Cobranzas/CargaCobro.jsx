import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import MuestraCobro from "./MuestraCobro";

const CargaCobro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombreEquipo: "",
      DNI: "",
      MPago: "",
      monto: "",
    },
  });
  const onSubmit = (e) => {
    console.log(e);
    console.log(JSON.stringify(e))
    localStorage.setItem("cobro",JSON.stringify(e));
  };

  return (
    <Container className="mb-5 mt-3 text-center w-50">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mt-3 ">
          <Form.Label>Nombre del equipo</Form.Label>
          <Form.Select {...register("nombreEquipo")}> 
            <option>Equipos</option>
            <option value="uno" >uno</option>
            <option value="dos">dos</option>
            <option value="tres" >tres</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mt-3 " controlId="formGroupEmail">
          <Form.Label>DNI Cliente</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 42499732"
            {...register("DNI")}
          />
        </Form.Group>
        <Form.Group className="mt-3 ">
          <Form.Label>Metodos de pago</Form.Label>
          <Form.Select {...register("MPago")}>
            <option>Metodos de pagos</option>
            <option value="Mercado Pago">Mercado Pago</option>
            <option value="Credito/Debito">Credito/Debito</option>
            <option value="Transferencia">Transferencia</option>
            <option value="QR">QR</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="presupuesto">
          <Form.Label>Monto a cobrar</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
            <Form.Control type="number"{...register("monto")}/>
          </InputGroup>
        </Form.Group>
        <Button type="submit"  >
   
          Cobrar
        </Button>
      </Form>
    </Container>
  );
};

export default CargaCobro;
