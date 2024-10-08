import Header from "./components/Header.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Cart from "./pages/Cart.jsx";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";


function App() {

  return (
    <>
      <div className="wrapper">
        <Provider store={store}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="/cart" element={ <Cart />} />
              <Route path="*" element={ <NotFound />} />
            </Routes>
          </div>
        </Provider>
      </div>
    </>
  )
    ;
}

export default App;
