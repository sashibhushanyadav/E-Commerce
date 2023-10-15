import React from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { returnDiscountAmount, returnTotal } from "../utils/helper";

const EditProduct = ({
  showPopupEdit,
  handleCloseEdit,
  editedProduct,
  handleEditChange,
  editProductHandler,
}) => {
  // console.log(editedProduct)
  return (
    <div>
      <Modal show={showPopupEdit} handleCloseEdit={handleCloseEdit}>
        <Modal.Header closeButton>Edit Product Form</Modal.Header>
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
              value={editedProduct.thumbnail}
              onChange={handleEditChange}
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
              value={editedProduct.title}
              onChange={handleEditChange}
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
              value={editedProduct.description}
              onChange={handleEditChange}
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
              value={"$" + editedProduct.price}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingDiscountPercentage"
            label="Discount Percentage (%)"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="discountPercentage"
              placeholder="Discount Percentage"
              value={editedProduct.discountPercentage}
              onChange={handleEditChange}
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
              value={"$" + returnDiscountAmount(editedProduct)}
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
              value={"$" + returnTotal(editedProduct)}
            />
          </FloatingLabel>
        </Form>
        <Modal.Footer>
          <Button variant="danger" 
          onClick={handleCloseEdit}>
            Cancel
          </Button>
          <Button variant="primary" onClick={(e) => editProductHandler(e)}>
            Edit Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditProduct;
