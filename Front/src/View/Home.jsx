import { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { consulta } from "../service/queries";

const Home = () => {
  const [dataObj, setDataObj] = useState([]);

  useEffect(() => {
    try {
      consulta().then((res) => {
        setDataObj(res);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const mapeo = () => {
    return dataObj.map((r) => (
      <Col key={r.id} lg={4} md={6} sm={12}>
        <Card style={{ width: "18rem" }} className="mt-3 text-center">
          <Card.Img variant="top" src={r.image} />
          <Card.Body>
            <Card.Title>{r.name}</Card.Title>
            <Card.Subtitle className="mt-1">{r.species}</Card.Subtitle>
            <Card.Subtitle className="mt-1">{r.status}</Card.Subtitle>
            <Card.Subtitle className="mt-1">{r.location.name}</Card.Subtitle>
            <Button variant="primary" className="mt-2">Ver Mas</Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <Container>
      <Row>{mapeo()}</Row>
    </Container>
  );
};

export default Home;
