import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { AllProducts } from "./pages/AllProducts";
import { AllCategories } from "./pages/AllCategories";
import { AddProduct } from "./pages/AddProduct";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row" style={{maxWidth: '100%'}}>
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="" element={<Home />} />

            <Route path="products">
              <Route index element={<AllProducts />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>

            <Route path="categories" element={<AllCategories />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
