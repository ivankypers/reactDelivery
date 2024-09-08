import Categories from "../components/Categories.jsx";
import Sort from "../components/Sort.jsx";
import Skeleton from "../components/PizzaBlock/Skeleton.jsx";
import PizzaBlock from "../components/PizzaBlock";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice.js"

function Home() {
  const categoryId = useSelector((state) => state.filter.categoryId)
  const sortType = useSelector(state => state.filter.sort.sortProperty)
  const searchInput = useSelector((state) => state.filter.searchValue);
  const dispatch = useDispatch();




  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    setLoading(true);
    fetch(`https://dd8d26ae4d9e607c.mokky.dev/pizzas?${categoryId > 0 ? 'category=' + categoryId  : ''}` + `&sortBy=-` + sortType)
      .then(res => res.json())
      .then(arr => {
        setPizzas(arr)
        setLoading(false);
      })

  }, [categoryId, sortType]);

  const items = pizzas.filter(obj => {
    if (obj.title.toLowerCase().includes(searchInput.toLowerCase())) {
      return true;
    }

  }).map((pizzas) => <PizzaBlock
    key={pizzas.id} {...pizzas} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={(id) => dispatch(setCategoryId(id))} />
        <Sort />
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