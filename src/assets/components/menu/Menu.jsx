import "./menu.css";

export default function Menu({ categoryLists, isLoading, nanoid }) {
  const intl = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "symbol",
  });
  return (
    <section id="menu">
      <div className="categories-bloc">
        {categoryLists.map((element) => {
          return (
            <div key={nanoid()}>
              <h2>{element?.name}</h2>
              <div className="meals-bloc">
                {element.meals.map((meal) => {
                  return (
                    <div className="meal-single" key={meal.id}>
                      <div className="meal-text">
                        <h3>{meal.title}</h3>
                        {meal.description && <p>{meal.description}</p>}
                        <div>
                          <span className="price">
                            {intl.format(meal.price)}
                          </span>
                          {meal.popular && (
                            <span className="popular">
                              <i className="icon-STAR_FILL"></i> Populaire
                            </span>
                          )}
                        </div>
                      </div>
                      {meal.picture ? <img src={meal.picture} alt="" /> : ""}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="shop-bloc">PANIER</div>
    </section>
  );
}
