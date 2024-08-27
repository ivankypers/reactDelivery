import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Categories from "./components/Categories.jsx";
import Sort from "./components/Sort.jsx";
import "./App.css";
import Skeleton from "./components/PizzaBlock/Skeleton.jsx";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dd8d26ae4d9e607c.mokky.dev/pizzas")
      .then(res => res.json())
      .then(arr => {
        setPizzas(arr)
        setLoading(false);
      })

  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {
                loading ? [...new Array(6)].map((_ ,index) => <Skeleton key={index} />) : pizzas.map((pizzas) => <PizzaBlock key={pizzas.id} {...pizzas} />)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
    ;
}

export default App;
