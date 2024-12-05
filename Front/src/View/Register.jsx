import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue: {
      nomAp: "",
      edad: "",
      direccion: "",
      contacto: "",
      email: "",
      password: "",
      confirmPassword: "",
      isAdmin: false,
    },
  });

  const onSubmit = (event) => {
    console.log(event)
  };
  return (
  <Container> 
<Row className="mt-4 mb-4">
  <Col lg={3}></Col>
  <Col lg={6}>
  
  <Form onSubmit={handleSubmit(onSubmit)} className="text-center">
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control type="text" placeholder="¿Cómo te llamas?" 
        required
        {...register("nomAp", {
        
                minLength: {
                  value: 10,
                  message: "El valor minimo del nombre es de 10 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "El valor maximo es de 50 caracteres",
                },
        })}/>
        <Form.Text className="text-dark">{errors.nomAp?.message}</Form.Text>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formGroupEdad">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="text" placeholder="¿Qué edad tienes?"  
        required
        {...register("edad", {
          
                minLength: {
                  value: 2,
                  message: "La edad minima es 18",
                },
                maxLength: {
                  value: 2,
                  message: "La edad maxima es 99",
                }
        })}/>
        <Form.Text className="text-dark">{errors.edad?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupAdress">
        <Form.Label>Dirección Local</Form.Label>
        <Form.Control type="text" placeholder="¿Dónde vives?" 
        required
        {...register("direccion", {
       
                minLength: {
                  value: 10,
                  message: "El valor minimo de la direccion es de 10 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "El valor maximo es de 50 caracteres",
                }
        })}/>
        <Form.Text className="text-dark">{errors.direccion?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupContact">
        <Form.Label>Contacto</Form.Label>
        <Form.Control
          type="number"
          placeholder="Número de Télefono / Whatsapp"
          required
          {...register("contacto", {
           
                minLength: {
                  value: 10,
                  message: "El valor minimo del numero es de 10 caracteres",
                },
                maxLength: {
                  value: 10,
                  message: "El valor maximo es de 10 caracteres",
                }
          })}/>
        <Form.Text className="text-dark">{errors.contacto?.message}</Form.Text>
      </Form.Group>
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
      <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control
                  required
                  type="password"
                  placeholder="Confirme contraseña"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "EL valor minimo de la contraseña es de 8 lugares",
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
          {errors.confirmPassword?.message}
        </Form.Text>
      </Form.Group>
      <Button type="submit">Registrarse</Button>
    </Form>
  </Col>
  <Col lg={3}></Col>
</Row>

  </Container>
  );
}

export default Register;