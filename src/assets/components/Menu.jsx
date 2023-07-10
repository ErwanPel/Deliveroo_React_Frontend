export default function Menu({ data, isLoading, nanoid }) {
  const intl = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "symbol",
  });
  return (
    <main>
      <section id="presentation" className="wrapper">
        <div>
          <h1>{data?.restaurant?.name}</h1>
          <p>{data?.restaurant?.description}</p>
        </div>
        <img src={data?.restaurant?.picture} alt="" />
      </section>
      <section id="menu">
        <div className="categories wrapper">
          {data.categories.map((element) => {
            if (element.meals.length > 0) {
              return (
                <div key={nanoid()}>
                  <h2>{element?.name}</h2>
                  <div className="meals">
                    {element.meals.map((meal) => {
                      return (
                        <div className="meal" key={meal.id}>
                          <div>
                            <h3>{meal.title}</h3>
                            <p>{meal.description}</p>
                            <div>
                              <span className="price">
                                {intl.format(meal.price)}
                              </span>
                              {meal.popular ? (
                                <span className="popular">
                                  <i className="icon-STAR_FILL"></i> Populaire
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          {meal.picture ? (
                            <img src={meal.picture} alt="" />
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="shop-bag">panier</div>
      </section>
    </main>
  );
}
