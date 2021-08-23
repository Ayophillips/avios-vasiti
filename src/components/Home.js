import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Header } from "./Header";

export const Home = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState("");
  const { addProduct, products } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    // const newProduct = {
    //   id: products.length + 1,
    //   name,
    //   description,
    //   size,
    //   color,
    //   quantity,
    //   images,
    //   price,
    // };
    // addProduct(newProduct);
    // history.push("/displayproduct");

    // On submit of the form, send a POST request with the data to the server.

    const newProduct = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };
    fetch("http://localhost:3001/product/add", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Product Name</Label>
          <Input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="Enter Product Name"
          ></Input>
          <Label>Product Description</Label>
          <Input
            type="text"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            placeholder="Enter Product Description"
          ></Input>
          <Label>Product Size</Label>
          <Input
            type="number"
            onChange={(event) => {
              setSize(event.target.value);
            }}
            placeholder="Enter Product Size"
          ></Input>
          <Label>Product Color</Label>
          <Input
            type="text"
            onChange={(event) => {
              setColor(event.target.value);
            }}
            placeholder="Enter Product Color"
          ></Input>
          <Label>Product Quantity</Label>
          <Input
            type="number"
            onChange={(event) => {
              setQuantity(event.target.value);
            }}
            placeholder="Enter Product Quantity"
          ></Input>
          <Label>Product images</Label>
          <Input
            type="file"
            onChange={(event) => {
              setImages(event.target.value);
            }}
            placeholder="Upload Product Images"
          ></Input>
          <Label>Product Price</Label>
          <Input
            type="number"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            placeholder="Enter Product Price"
          ></Input>
          <Button type="submit">Submit</Button>
          <Link to="/" className="btn btn-danger ml-2">
            Cancel
          </Link>
        </FormGroup>
      </Form>
    </div>
  );
};
