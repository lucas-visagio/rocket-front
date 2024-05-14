import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductPage from "./pages/Product";
import UserPage from "./pages/Users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="user" element={<UserPage />} />
          <Route path="products" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
