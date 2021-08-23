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

router.get("/displayproduct", (req, res) => {
  const query = "SELECT * FROM aviosdb.products;";
  try {
    const queryResult = dbConnection.query(query, (err, result, fields) => {
      console.log(result);
    });
    console.log("Query executed");
    Response.ResponseCode = "00";
    Response.ResponseMessage = "Fetched Successfully";
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

router.put("/update", (req, res) => {
  console.log("Request reached update product");
  var product = {
    name: req.body.productName,
    description: req.body.productDescription,
    size: req.body.productSize,
    color: req.body.productColor,
    quantity: req.body.productQuantity,
    images: req.body.productImages,
    price: req.body.productPrice,
    id: req.body.productId,
  };

  var currentDate = new Date().toISOString().slice(0, 19).replace("T", " ");
  const query =
    "UPDATE Products SET product_name = '" +
    product.name +
    "', product_description = '" +
    product.description +
    "', product_size = " +
    product.size +
    ", product_color = '" +
    product.color +
    "', product_quantity = " +
    product.quantity +
    ", product_images = '" +
    product.images +
    "', product_price = '" +
    product.price +
    "', date_edited = '" +
    currentDate +
    "' WHERE id = " +
    product.id;

  console.log("Query formed: " + query);
  console.log("About to execute query");

  try {
    const queryResult = dbConnection.query(query);
    console.log("Query executed");
    Response.ResponseCode = "00";
    Response.ResponseMessage = "Updated Successfully";
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

router.post("/addtocart", (req, res) => {
  const productCart = {
    Id: req.body.productId,
  };
  var currentDate = new Date().toISOString().slice(0, 19).replace("T", " ");
  const query =
    "INSERT INTO productCart (product_id, date_added) VALUES ('" +
    productCart.Id +
    "', '" +
    currentDate +
    "')";

  console.log("Query formed: " + query);
  console.log("About to execute query");

  try {
    const queryResult = dbConnection.query(query);
    console.log("Query executed");
    Response.ResponseCode = "00";
    Response.ResponseMessage = "Product Successfully Added to Cart";
    //Response.ResponseObject = queryResult;

    res.json(Response);
    return;
  } catch (err) {
    Response.ResponseCode = "-03";
    Response.ResponseMessage = "Failed To Save Product To Cart: " + err;

    res.json(Response);
    return;
  }
});

module.exports = router;
