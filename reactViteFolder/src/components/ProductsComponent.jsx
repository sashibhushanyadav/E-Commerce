import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";
import { returnDiscountAmount, returnTotal } from "../utils/helper";

const ProductsComponent = ({
  productDetails,
  deleteHandler,
  editHandler,
  viewHandler,
}) => {
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
        <h4>
          {productDetails.title.length > 5
            ? productDetails.title.slice(0, 4) + "..."
            : productDetails.title}
        </h4>
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
          <b>Discount Amount:</b>${returnDiscountAmount(productDetails)}
        </p>
        <p>
          <b>Total Amount:</b>${returnTotal(productDetails)}
        </p>
      </CardBody>
      <CardFooter>
        <Button
          variant="info"
          className="me-1"
          onClick={(e) => viewHandler(e, productDetails.id)}
        >
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
