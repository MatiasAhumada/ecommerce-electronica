import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      isAdmin: false,
    },
  });

  const onSubmit = (e) => {
  
    console.log(e)
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3 text-center">
          <Col lg={4} md={3}></Col>
          <Col lg={5} sm={12} md={6}>
            <Col lg={12} md={12} sm={12}>
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
                  placeholder="Ingrese su correo electrónico"
                  {...register("email", {
                    required: true,
                    minLength: {
                      value: 5,
                      message: "EL valor minimo del correo es de 5 lugares",
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
                <Form.Text className="text-dark">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <Form.Group>
                <Form.Label className="mt-3">Contraseña</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Ingrese contraseña"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "EL valor minimo del correo es de 8 lugares",
                    },
                    maxLength: {
                      value: 30,
                      message: "El valor maximo es de 30 caracteres",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "La contraseña debe tener 1 minuscula, 1 mayuscula, 1 número, 1 caracter especial y longitud minima de 8 digitos",
                    },
                  })}
                />

                <Form.Text className="text-dark">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>
            </Col>
            <Button type="submit" className="mt-4">
              Iniciar Sesion
            </Button>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Login;
