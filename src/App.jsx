import Header from "./components/Header.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Cart from "./pages/Cart.jsx";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [SearchValue, setSearchValue] = useState('');

  return (
    <>
      <div className="wrapper">
        <Header searchValue={SearchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Routes>
            <Route path="/" element={ <Home searchValue={SearchValue} />} />
            <Route path="/cart" element={ <Cart />} />
            <Route path="*" element={ <NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  )
    ;
}

export default App;
