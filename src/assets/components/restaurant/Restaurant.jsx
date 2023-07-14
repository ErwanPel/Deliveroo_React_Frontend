import "./restaurant.css";

export default function Restaurant({ restaurant }) {
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
