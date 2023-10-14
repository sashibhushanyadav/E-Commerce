import React from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

const AddProduct = ({
  showPopup,
  handleClose,
  handleChange,
  addProductHandler,
}) => {
  return (
    <div>
      <Modal show={showPopup} onHide={handleClose}>
        <Modal.Header closeButton>Add Product Form</Modal.Header>
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
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Title"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Description">
            <Form.Control
              type="text"
              name="description"
              as="textarea"
              placeholder="Description"
              onChange={handleChange}
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Form>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProductHandler}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProduct;
