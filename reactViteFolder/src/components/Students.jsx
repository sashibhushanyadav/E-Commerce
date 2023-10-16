import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";

const QuoteDisplay = () => {
  const [id, setId] = useState(1);
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  const toggleQuotes = async (e) => {
    e.preventDefault();

    const { data } = await axios.get("https://dummyjson.com/quotes");
    console.log(data);
    const { quotes } = data;
    console.log(quotes);

    const qts = quotes.find((item) => item.id === id);

    setAuthor(qts.author);
    setQuote(qts.quote);
    setId(id + 1);
  };
  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <div>
          <h3>Menu</h3>
        </div>
        <div>
          <Button variant="danger">Log Out</Button>
        </div>
      </div>
      <div>
      <Card>
        <CardHeader>
          <h1>Quote Display</h1>
        </CardHeader>
        <CardBody>
          {/* <h4>Id:{id}</h4> */}
          <h4>Author:{author}</h4>
          <p>
            <i>Quote:{quote}</i>
          </p>
        </CardBody>
        <CardFooter>
          <Button variant="info" className="me-2" onClick={toggleQuotes}>
            Toggle
          </Button>
        </CardFooter>
      </Card>
      </div>
    </div>
  );
};

export default QuoteDisplay;
