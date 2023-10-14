import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import QuoteDisplay from "./components/Students";
import LoginPaga from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer, toast } from "react-toastify";
import ProductsPage from "./pages/ProductsPage";
import SecureRoute from "./routes/SecureRoute";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Counter />} /> this component is noramal for practice purpose only */}
        <Route path="/" element={<LoginPaga />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path='' element={<SecureRoute/>}> */}
          <Route path="/quotes" element={<QuoteDisplay />} />
          <Route path="/products" element={<ProductsPage />} />
        {/* </Route> */}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
