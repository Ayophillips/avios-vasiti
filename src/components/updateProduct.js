import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function UpdateProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // On submit of the form, send a POST request with the data to the server.
    fetch("http://localhost:3001/product/add", {
      method: "POST",
      data: {
        productName: name,
        productDescription: description,
        productSize: size,
        productColor: color,
        productQuantity: quantity,
        productImages: images,
        productPrice: price,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        console.log(body);
      });
  };

  return (
    <Form>
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
        <Button type="submit" onClick={handleSubmit}>
          Update
        </Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </FormGroup>
    </Form>
  );
}

export default UpdateProduct;
