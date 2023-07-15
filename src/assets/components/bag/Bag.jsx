import "./bag.css";

export default function Bag({ shopLists, setShopLists, intl, formMobile }) {
  let sum = 0;
  shopLists.map((element) => {
    sum = sum + element.price * element.quantity;
  });
  let article = 0;
  shopLists.map((element) => {
    article = article + element.quantity;
  });
  let shippingFees = 2.5;
  return (
    <div>
      <div>
        {shopLists.map((element) => {
          let findId = shopLists.filter((id) => element.id);

          return (
            <div className="meal-bag" key={element.id + "bag"} id={element.id}>
              <div>
                <div className="quantity-bloc">
                  <button
                    type="button"
                    onClick={() => {
                      const findId = shopLists.find(
                        (id) => id.id === element.id
                      );
                      let mealQuantity = {};
                      mealQuantity = { ...findId };
                      mealQuantity.quantity--;

                      const currentList = [...shopLists];
                      if (mealQuantity.quantity === 0) {
                        currentList.splice(
                          currentList.findIndex((id) => id.id === element.id),
                          1
                        );
                        setShopLists(currentList);
                      } else {
                        currentList[
                          currentList.findIndex((id) => id.id === element.id)
                        ] = mealQuantity;
                        setShopLists(currentList);
                      }
                    }}
                  >
                    -
                  </button>
                  <span>{element.quantity}</span>
                  <button
                    type="button"
                    onClick={() => {
                      const findId = shopLists.find(
                        (id) => id.id === element.id
                      );
                      let mealQuantity = {};
                      mealQuantity = { ...findId };
                      mealQuantity.quantity++;
                      const currentList = [...shopLists];
                      currentList[
                        currentList.findIndex((id) => id.id === element.id)
                      ] = mealQuantity;
                      setShopLists(currentList);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="title-menu-bag">
                  <span>{element.title}</span>
                </div>
              </div>
              <div>{intl.format(element.price * element.quantity)}</div>
            </div>
          );
        })}
      </div>
      <div className="total-step1">
        <div>
          <span>sous-total</span>
          <span>{intl.format(sum)}</span>
        </div>
        <div>
          {" "}
          <span>frais de livraison</span>
          <span>{intl.format(shippingFees)}</span>
        </div>
      </div>
      <div className="total-end">
        <span>Total</span>
        <span>{intl.format(sum + shippingFees)}</span>
      </div>
    </div>
  );
}
