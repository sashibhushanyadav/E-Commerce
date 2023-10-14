import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = (incre) => {
    incre.preventDefault();
    setCount(count + 1);
  };
  const decrement = (decre) => {
    decre.preventDefault();
    setCount(count - 1);
  };
  const reset = (re) => {
    re.preventDefault();
    setCount(0);
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <h2>Counter</h2>
        </CardHeader>
        <CardBody>
          <h4>{count}</h4>
        </CardBody>
        <CardFooter>
          <Button variant="success" className="me-2" onClick={increment}>
            Increment
          </Button>
          <Button variant="warning" className="me-2" onClick={decrement}>
            Decrement
          </Button>
          <Button variant="danger" onClick={reset}>Reset</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Counter;
