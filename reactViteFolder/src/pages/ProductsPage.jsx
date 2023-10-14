import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsComponent from "../components/ProductsComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../components/Loader";
import { errorToast } from "../services/toastServices";
import { Button, FloatingLabel, Spinner } from "react-bootstrap";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import { Form } from "react-bootstrap";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [addProduct, setAddProduct] = useState({
    thumbnail: "",
    title: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showModelEdit, setShowModelEdit] = useState(false);
  const [editedProduct2, setEditedProduct2] = useState({});
  // console.log(import.meta.env.VITE_BACKEND_URL)
  const URL = import.meta.env.VITE_BACKEND_URL;

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(URL + "product");
      // const users = await axios.get(URL + "students");

      setProducts(data.products);
      setOriginalProducts(data.products);

      const categories = data.products.map((product) => {
        return product.category;
      });
      const uniqueCategories = [...new Set(categories)];
      setCategories(uniqueCategories);
      // console.log(uniqueCategories);

      setIsLoading(false);
    } catch (error) {
      errorToast(error.response.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = (e, id) => {
    e.preventDefault();
    const filterProducts = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(filterProducts);
    // console.log(filterProducts);
  };
  const editButtonHandler = (e, id) => {
    e.preventDefault();
    const prod = products.find((product) => {
      return product.id === id;
    });
    // console.log(prod)
    setEditedProduct2(prod);
    setShowModelEdit(true);
  };
  function handleEditProductChange(e) {
    // console.log(e.target.name,e.target.value)
    setEditedProduct2((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  const showProduct = (e) => {
    e.preventDefault();
    setShowModel(true);
  };

  function closeAddProductModel() {
    setShowModel(false);
  }
  function closeEditProductModel() {
    setShowModelEdit(false);
  }

  const addProductHandleChange = (e) => {
    e.preventDefault();
    // setAddProduct({
    //   ...addProduct,
    //   [e.target.name]: e.target.value,
    //   id: Date.now(),
    // });
    // OR
    setAddProduct((prev) => {
      // console.log({...addProduct,[e.target.name]:e.target.value})
      return { ...prev, [e.target.name]: e.target.value, id: Date.now() };
    });
  };

  const addProductButtonHandler = (e) => {
    e.preventDefault();
    // console.log(products);
    products.unshift(addProduct);
    setAddProduct(...products);
    setShowModel(false);
    // setAddProduct([...products, addProduct]);
  };

  const editedProductHandler = (e) => {
    e.preventDefault();
    console.log("click", editedProduct2);
    console.log(products);

    const updatedProd = products.map((product) => {
      return product.id === editedProduct2.id ? editedProduct2 : product;
    });
    console.log(updatedProd);
    setProducts(updatedProd);
    setShowModelEdit(false);
  };

  const searchProduct = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    // console.log(products[0].title.toLowerCase().includes(e.target.value.toLowerCase()))
    const searchedData = originalProducts.filter((product) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(searchedData);
    setProducts(searchedData);
  };

  function filterProduct(data) {
    if (data !== "") {
      const filterProd = originalProducts.filter((item) => {
        return item.category === data;
      });
      setProducts(filterProd);
    } else {
      setProducts(originalProducts);
    }
  }

  return (
    <>
      {isLoading ? (
        <Spinner animation="border" variant="dark" />
      ) : (
        <>
          <div className="d-flex justify-content-between mb-3">
            <Button variant="info" onClick={showProduct}>
              Add Products
            </Button>
            <Form.Select
              style={{ width: "200px" }}
              size="sm"
              onChange={(e) => filterProduct(e.target.value)}
            >
              <option value="">Filter by Catagory</option>
              {categories.map((category) => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })}
            </Form.Select>
            <FloatingLabel controlId="floatingInput" label="Search Product">
              <Form.Control
                type="text"
                name="searchkey"
                placeholder="Search Product"
                onChange={searchProduct}
              />
            </FloatingLabel>
          </div>
          <div className="d-flex flex-wrap gap-4 justify-content-between">
            {products.map((product) => {
              return (
                <ProductsComponent
                  productDetails={product}
                  deleteHandler={deleteHandler}
                  editHandler={editButtonHandler}
                />
              );
            })}
          </div>
          <AddProduct
            showPopup={showModel}
            handleClose={closeAddProductModel}
            handleChange={addProductHandleChange}
            addProductHandler={addProductButtonHandler}
          />
          <EditProduct
            showPopupEdit={showModelEdit}
            handleCloseEdit={closeEditProductModel}
            editedProduct={editedProduct2}
            handleEditChange={handleEditProductChange}
            editProductHandler={editedProductHandler}
          />
        </>
      )}
    </>
  );
};

export default ProductsPage;
