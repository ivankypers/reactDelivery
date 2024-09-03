import Categories from "../components/Categories.jsx";
import Sort from "../components/Sort.jsx";
import Skeleton from "../components/PizzaBlock/Skeleton.jsx";
import PizzaBlock from "../components/PizzaBlock/index.jsx";
import { useEffect, useState } from "react";

function Home({searchValue}) {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryType, setCategoryType] = useState(0);
  const [activeSort, setActiveSort] = useState(0);

  const sortUrlList = ['rating', 'price', 'title']

  useEffect(() => {
    setLoading(true);
    fetch(`https://dd8d26ae4d9e607c.mokky.dev/pizzas?${categoryType > 0 ? 'category=' + categoryType  : ''}` + `&sortBy=-` + sortUrlList[activeSort])
      .then(res => res.json())
      .then(arr => {
        setPizzas(arr)
        setLoading(false);
      })

  }, [categoryType, activeSort]);

  const items = pizzas.filter(obj => {
    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }

  }).map((pizzas) => <PizzaBlock
    key={pizzas.id} {...pizzas} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryType} onClickCategory={(id) => {setCategoryType(id)}} />
        <Sort sortValue={activeSort} onSortChange={(value) => {setActiveSort(value)}} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          loading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : items
        }
      </div>
    </div>
  );
}

export default Home;