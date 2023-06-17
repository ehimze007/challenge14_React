import React from "react";
import product from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import { Card, Container } from "react-bootstrap";

const firstName = prompt("What is your first name?");
const App = () => {
  return (
    <Container>
      <Card className="my-card">
        <Card.Body>
          <Card.Title className="my-card-title">
            <Name name={product.name} />
          </Card.Title>
          <Card.Text>
            <Price price={product.price} />
            <Description description={product.description} />
            <Image image={product.image} />
          </Card.Text>
        </Card.Body>
      </Card>
      <p className="greeting">
        Hello, {firstName !== "YourFirstName" ? firstName : "there"}!
        {firstName && <Image image={product.image} />}
      </p>
    </Container>
  );
};

export default App;
