import Form from "react-bootstrap/Form";

function Register() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control type="name" placeholder="¿Cómo te llamas?" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa tu correo electronico"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresa tu contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control
          type="confirmpassword"
          placeholder="Confirma tu contraseña"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEdad">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="Edad" placeholder="¿Qué edad tienes?" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupAdress">
        <Form.Label>Dirección Local</Form.Label>
        <Form.Control type="Adress" placeholder="¿Dónde vives?" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupContact">
        <Form.Label>Contacto</Form.Label>
        <Form.Control
          type="Contact"
          placeholder="Número de Télefono / Whatsapp"
        />
      </Form.Group>
    </Form>
  );
}

export default Register;