function Categories({categoryId, onClickCategory}) {

  const categoryTitle = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые"
  ];


  return (
    <div className="categories">
      <ul>
        {categoryTitle.map((value,index) => {

          return (
            <li key={index} onClick={() => {onClickCategory(index)}} className={categoryId === index ? 'active' : ''}>{value}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default Categories;