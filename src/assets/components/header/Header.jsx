import logo from "../../img/logo-teal.svg";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <img src={logo} alt="logo deliveroo en vert" />
      </div>
    </header>
  );
}
