import { useState } from "react";
import {
  Container,
  Button,
  Col,
  Form,
  InputGroup,
  Row,
  FormControl,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue: {
      email: "",
      password: "",
      isAdmin: false,
    },
  });

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3 text-center">
          <Form.Group
            as={Col}
            lg="12"
            md="12"
            sm="12"
            controlId="validationCustom01"
          >
            <Form.Label className="mt-3">Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Ingrese su correo electronico"
              {...register("email", {
                required: true,
                minLength: {
                  value: 5,
                  message: "El valor minimo del correo es de 5 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "El valor maximo es de 30 caracteres",
                },
                pattern: {
                  value:
                    /[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/,
                  message: "Ingrese un email valido",
                },
              })}
            />
            <Form.Text className="text-dark">{errors.email?.message}</Form.Text>
          </Form.Group>
          
          <Form.Group as={Col} lg="12" md="12" sm="12">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Ingrese contraseña"
              {...register("password", {
                required:true,
                minLength: {
                  value: 8,
                  message:
                    "El valor minimo de la contraseña es de 8 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "El valor maximo es de 30 caracteres",
                 
                },
                pattern: {
                    value:
                      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
                    message:
                      "La contraseña debe tener 1 minuscula, 1 mayuscula, 1 número, 1 caracter especial y mínimo 8 digitos",
                  },
              })}
            />
            <Form.Text className="text-dark">
              {errors.password?.message}
            </Form.Text>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
}

export default Login;
