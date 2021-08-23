//var sql = require("mssql");
var mysql = require("mysql2");

var config = {
  user: "root",
  password: "Richboy1997$",
  database: "aviosdb",
  host: "127.0.0.1",
  port: 3306,
  charset: "utf8mb4",
};

// sql.connect(config, (error) => {
//   if (error) {
//     console.log("Unable to connect to database. | Error: " + error);
//     throw "Unable to connect to database";
//   } else {
//     console.log("Connected To Database Successfully");
//   }
// });

//creating sql request object
//var request = new sql.Request();

//exporting module
//module.exports = request;

var connection = mysql.createConnection(config);
//var connection = mysql.createConnection('mysql://*root:*Richboy1997$@*localhost/*aviosdb?charset=utf8_general_ci&timezone=-0700');
connection.connect((err) => {
  if (!err) {
    console.log("DB Connected successfully");
  } else {
    console.log("Error while attempting to connect to the database " + err);
  }
});

//Create Product table
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE Products (id INT AUTO_INCREMENT PRIMARY KEY, product_name VARCHAR(255), product_description VARCHAR(255), product_size BIGINT, product_color VARCHAR(255), product_quantity BIGINT, product_images VARCHAR(255), product_price DOUBLE, date_uploaded DATETIME, date_edited DATETIME)";
  connection.query(sql, function (err, result) {
    if (err) {
      console.log("Product table exist");
    } else {
      console.log("Porduct Table created");
    }
  });
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE ProductCart (id INT AUTO_INCREMENT PRIMARY KEY, product_id BIGINT, date_added DATETIME)";
  connection.query(sql, function (err, result) {
    if (err) {
      console.log("ProductCart table exist");
    } else {
      console.log("PorductCart Table created");
    }
  });
});

module.exports = connection;
