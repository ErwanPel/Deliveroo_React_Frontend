import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import axios from "axios";
import Header from "./assets/components/Header";
import "./assets/font/stylesheet.css";
import "./assets/icon/style.css";
import Menu from "./assets/components/Menu";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://site--deliveroo-backend--fwddjdqr85yq.code.run/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    console.log("useEffect activated");
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <span>"En cours de chargement"</span>
      ) : (
        <Menu data={data} isLoading={isLoading} nanoid={nanoid} />
      )}
    </>
  );
}

export default App;
