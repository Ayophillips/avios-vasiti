const express = require("express");
const router = express.Router();
const dbConnection = require("../dbconnect");

var Response = {
  ResponseCode: String,
  ResponseMessage: String,
  ResponseObject: Object,
};

router.post("/add", (req, res) => {
  console.log("Request reached add product");
  var product = {
    name: req.body.productName,
    description: req.body.productDescription,
    size: req.body.productSize,
    color: req.body.productColor,
    quantity: req.body.productQuantity,
    images: req.body.productImages,
    price: req.body.productPrice,
  };

  var currentDate = new Date().toISOString().slice(0, 19).replace("T", " ");
  const query =
    "INSERT INTO Products (product_name, product_description, product_size, product_color, product_quantity, product_images, product_price, date_uploaded, date_edited) VALUES ('" +
    product.name +
    "', '" +
    product.description +
    "', '" +
    product.size +
    "', '" +
    product.color +
    "', '" +
    product.quantity +
    "', '" +
    product.images +
    "', '" +
    product.price +
    "', '" +
    currentDate +
    "', '" +
    currentDate +
    "')";

  console.log("Query formed: " + query);
  console.log("About to execute query");

  try {
    const queryResult = dbConnection.query(query);
    console.log("Query executed");
    Response.ResponseCode = "00";
    Response.ResponseMessage = "Created Successfully";
    //Response.ResponseObject = queryResult;

    res.json(Response);
    return;
  } catch (err) {
    Response.ResponseCode = "-03";
    Response.ResponseMessage = "Failed To Save Product Record: " + err;

    res.json(Response);
    return;
  }
});

module.exports = router;
