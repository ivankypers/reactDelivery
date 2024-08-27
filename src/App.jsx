import Header from "./components/Header.jsx";
import Categories from "./components/Categories.jsx";
import Sort from "./components/Sort.jsx";
import PizzaBlock from "./components/PizzaBlock.jsx";
import "./App.css";
import pizzas from "./assets/pizzas.json";

function App() {
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
              {pizzas.map((pizza) => {
                return (
                  <PizzaBlock title={pizza.title} price={pizza.price} imageUrl={pizza.imageUrl} key={pizza.id} sizes={pizza.sizes} types={pizza.types} />
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
