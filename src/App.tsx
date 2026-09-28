import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Marketplace from "./pages/Marketplace/Marketplace";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/marketplace"
          element={
            <MainLayout>
              <Marketplace />
            </MainLayout>
          }
        />

        <Route
          path="/product/:id"
          element={
            <MainLayout>
              <Product />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;