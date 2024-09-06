import Header from "./components/Header.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Cart from "./pages/Cart.jsx";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const SearchContext = createContext('');

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div className="wrapper">
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="/cart" element={ <Cart />} />
              <Route path="*" element={ <NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </>
  )
    ;
}

export default App;
