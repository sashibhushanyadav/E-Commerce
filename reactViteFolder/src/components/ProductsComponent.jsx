import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";

const ProductsComponent = ({ productDetails, deleteHandler, editHandler }) => {
  //   console.log('productDetails', productDetails)
  return (
    <Card className="w-25" style={{ height: "600px" }} key={productDetails.id}>
      <CardHeader>
        <Card.Img
          style={{ height: "200px" }}
          src={productDetails.thumbnail}
        ></Card.Img>
      </CardHeader>
      <CardBody>
        <h2>
          {productDetails.title.length > 5
            ? productDetails.title.slice(0, 4) + "..."
            : productDetails.title}
        </h2>
        <p>
          {productDetails.description.length > 10
            ? productDetails.description.slice(0, 9) + "..."
            : productDetails.description}
        </p>
        <p>
          <b>SubTotal:</b>${productDetails.price}
        </p>
        <p>
          <b>Discount(%):</b>
          {productDetails.discountPercentage}
        </p>
        <p>
          <b>Discount Amount:</b>$
          {(
            productDetails.discountPercentage *
            productDetails.price *
            0.001
          ).toFixed(2)}
        </p>
        <p>
          <b>Total Amount:</b>$
          {(
            productDetails.price *
            (1 - productDetails.discountPercentage * 0.001)
          ).toFixed(2)}
        </p>
      </CardBody>
      <CardFooter>
        <Button variant="info" className="me-1">
          View
        </Button>
        <Button
          variant="secondary"
          className="me-1"
          onClick={(e) => editHandler(e, productDetails.id)}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={(e) => deleteHandler(e, productDetails.id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductsComponent;
