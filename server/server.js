const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const productService = require("../server/services/productService");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(cors());

app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/product", productService);

app.use("/", (req, res) => {
  console.log("It hit root controller");
  (Response.ResponseCode = "00"), (Response.ResponseMessage = "It got here");
  res.json(Response);
});

var Response = {
  ResponseCode: String,
  ResponseMessage: String,
  ResponseObject: Object,
};

app.listen(3001, () => {
  console.log("Server Running");
});
