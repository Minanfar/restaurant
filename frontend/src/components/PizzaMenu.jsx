import { useState, useEffect } from "react";
import axios from "axios";
import backendUrl from "../../config/config";

const PizzaMenu = () => {
  const [selectedPizza, setSelectedPizza] = useState("");
  useEffect(() => {
    try {
      const response = axios.get(`${backendUrl}`);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handlePizzaChange = (event) => {
    setSelectedPizza(event.target.value);
  };

  return (
    <div>
      <label>
        Select Pizza:
        <select value={selectedPizza} onChange={handlePizzaChange}>
          <option value=''>Select a Pizza</option>
          <option value='pepperoni'>Pepperoni</option>
          <option value='margherita'>Margherita</option>
          <option value='vegetarian'>Vegetarian</option>
          <option value='supreme'>Supreme</option>
        </select>
      </label>
    </div>
  );
};

export default PizzaMenu;
