import { useState } from "react";

function Categories() {
  const [categories, setCategories] = useState(0);

  const categoryTitle = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые"
  ];

  const handleCategoryClick = (index) => {
    setCategories(index);
  }


  return (
    <div className="categories">
      <ul>
        {categoryTitle.map((item,index) => {
          return (
            <li key={index} onClick={() => {handleCategoryClick(index)}} className={categories === index ? 'active' : ''}>{item}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default Categories;