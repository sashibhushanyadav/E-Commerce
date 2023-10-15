import React from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { returnDiscountAmount, returnTotal } from "../utils/helper";

const ViewProduct = ({
  showPopupView,
  handleCloseView,
  viewedProduct,
}) => {
  return (
    <div>
      <Modal show={showPopupView} handleCloseView={handleCloseView}>
        <Modal.Header closeButton>Product Details</Modal.Header>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Image URL"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="thumbnail"
              placeholder="Image URL"
              value={viewedProduct.thumbnail}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTitle"
            label="Title"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="title"
              placeholder="Title"
              value={viewedProduct.title}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingDescription"
            label="Description"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="description"
              as="textarea"
              placeholder="Description"
              value={viewedProduct.description}
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSubTotal"
            label="SubTotal"
            className="mb-3"
          >
            <Form.Control
              type="text"
              readOnly
              value={"$" + viewedProduct.price}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingDiscountPercentage"
            label="Discount Percentage (%)"
            className="mb-3"
          >
            <Form.Control
              type="text"
              readOnly
              value={viewedProduct.discountPercentage}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingDiscountAmount"
            label="Discount Amount"
            className="mb-3"
          >
            <Form.Control
              type="text"
              readOnly
              placeholder="Discount Amount"
              value={"$" + returnDiscountAmount(viewedProduct)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTotal"
            label="Total"
            className="mb-3"
          >
            <Form.Control
              type="text"
              readOnly
              placeholder="Total"
              value={"$" + returnTotal(viewedProduct)}
            />
          </FloatingLabel>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" 
          onClick={handleCloseView}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewProduct;
