import Bag from "../bag/Bag";
import "./menu.css";

export default function Menu({
  categoryLists,
  nanoid,
  shopLists,
  setShopLists,
  formMobile,
  setFormMobile,
}) {
  const intl = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "symbol",
  });

  const getMobileForm = (event) => {
    if (shopLists.lenght !== 0) setFormMobile(() => true);
  };

  let sum = 0;
  shopLists.map((element) => {
    sum = sum + element.price * element.quantity;
  });

  let article = 0;
  shopLists.map((element) => {
    article = article + element.quantity;
  });
  console.log("ici", shopLists.length);

  shopLists.length === 0 && setFormMobile(false);

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
                    <div
                      className="meal-single"
                      key={meal.id}
                      onClick={() => {
                        const findId = shopLists.find(
                          (id) => id.id === meal.id
                        );
                        let mealQuantity = {};
                        if (findId) {
                          mealQuantity = { ...findId };
                          mealQuantity.quantity++;
                          const currentList = [...shopLists];
                          currentList[
                            currentList.findIndex((id) => id.id === meal.id)
                          ] = mealQuantity;
                          setShopLists(currentList);
                        } else {
                          mealQuantity = { ...meal };
                          mealQuantity.quantity = 1;
                          const currentList = [...shopLists];
                          currentList.push(mealQuantity);
                          setShopLists(currentList);
                        }
                      }}
                    >
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
      <div className="shop-bloc">
        {!formMobile ? (
          <button
            type="button"
            className={
              shopLists.length === 0
                ? "see-bag mobile-button"
                : "see-bag-buy mobile-button"
            }
            onClick={getMobileForm}
          >
            {" "}
            Voir le panier
          </button>
        ) : (
          <button
            type="submit"
            className={
              shopLists.length === 0
                ? "see-bag mobile-button"
                : "see-bag-buy mobile-button"
            }
            onClick={getMobileForm}
          >
            {" "}
            Valider le panier
          </button>
        )}
        <div className="article-mobile">
          {shopLists.length > 0 && (
            <p
              style={{
                backgroundColor:
                  shopLists.length > 0 ? "rgb(59, 59, 63)" : "transparent",
                padding: shopLists.length > 0 && "0.8rem",
              }}
            >
              {article}
            </p>
          )}
        </div>
        <div className="price-mobile">
          {shopLists.length > 0 && <p>{intl.format(sum + 2.5)}</p>}
        </div>
        <form className={formMobile ? "" : "hidden"}>
          <p className="mobile-close" onClick={() => setFormMobile(false)}>
            X
          </p>
          <button
            type="submit"
            className={
              shopLists.length === 0
                ? "button-disabled hidden"
                : "button-buy hidden"
            }
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Valider mon panier
          </button>
          <div className="shop-form">
            {shopLists.length === 0 ? (
              <p className="empty-bag hidden">Votre panier est vide</p>
            ) : (
              <Bag
                shopLists={shopLists}
                setShopLists={setShopLists}
                intl={intl}
                formMobile={formMobile}
              />
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
