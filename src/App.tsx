import { Route, Routes } from "react-router";
import RootLayout from "./components/RootLayout/RootLayout";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
