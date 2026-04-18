// Import necessary states, effects, components
import { useState } from "react";
import React from "react";

function PlantCard({ plant }) {
  // Set state of sold out plant
  const [soldOut, setSoldOut] = useState(false);

  return (
    <li className="card" data-testid="plant-item">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>
      {soldOut ? (
        <button onClick={() => setSoldOut(false)}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={() => setSoldOut(true)}>In  Stock</button>
      )}
    </li>
  );
}

// Make it globally available
export default PlantCard;
