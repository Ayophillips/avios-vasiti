import "./App.css";
import { useState } from "react";
import http from "httpclient";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="App">
      <div className="product-info">
        <label> Product Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label> Product Description:</label>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <label> Product Size:</label>
        <input
          type="number"
          onChange={(event) => {
            setSize(event.target.value);
          }}
        />
        <label> Product Color:</label>
        <input
          type="text"
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <label> Quantity of Product:</label>
        <input
          type="number"
          onChange={(event) => {
            setQuantity(event.target.value);
          }}
        />
        <label> Product Images:</label>
        <input
          type="text"
          onChange={(event) => {
            setImages(event.target.value);
          }}
        />
        <label> Product Price:</label>
        <input
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <button
          onClick={fetch("http://localhost:3001/product/add").then((response) =>
            response.json()
          )}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
