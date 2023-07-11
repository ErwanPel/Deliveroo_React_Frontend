import "./restaurant.css";

export default function Restaurant({ restaurant }) {
  console.log("restaurant =====", restaurant);
  return (
    <section id="presentation" className="wrapper">
      <div>
        <h1>{restaurant?.name}</h1>
        <p>{restaurant?.description}</p>
      </div>
      <img src={restaurant?.picture} alt="" />
    </section>
  );
}
