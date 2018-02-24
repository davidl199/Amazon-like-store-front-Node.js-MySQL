//Require needed modules
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table2');

var table = new Table();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
  //Show the products available
  console.log('\n');
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;

    table = new Table({
      head: ['Item ID', 'Product Name', 'Price'],
      colWidths: [10, 40, 10]
    });

    for (var i = 0; i < results.length; i++) {

      table.push([results[i].item_id, results[i].product_name, results[i].price]);
    }
    console.log(table.toString());

    purchaseProducts();
  });
}

function purchaseProducts() {
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "Choose the item number you would like to buy?",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "quantity",
        type: "input",
        message: "Choose the quantity you would like to buy?",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function (answer) {
      connection.query(
        "SELECT item_id, stock_quantity, price FROM products WHERE ?",
        [
          {
            item_id: answer.item
          }
        ],
        function (err, results) {
          if (err) throw err;

          var qty = results[0].stock_quantity;
          var id = results[0].item_id;
          var price = results[0].price;
          var cost = answer.quantity * price;

          if (qty != 0 && answer.quantity <= qty) {
            qty = qty - answer.quantity;
            updateProduct(qty, id, cost);
          }
          else {
            console.log("\nInsufficient quantity! Try again later\n");
            EndShopping();
          }
        }
      );
    });
}

function updateProduct(qty, id, cost) {
  connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: qty
      },
      {
        item_id: id
      }
    ],
    function (err, res) {
      if (err) throw err;

      console.log("\n");
      console.log("--------------------------------------------------------------------------");
      console.log("   Total cost of purchase $" + cost);
      console.log("--------------------------------------------------------------------------");
      console.log("\n");
      EndShopping();
    }
  );
}

function EndShopping() {
  inquirer
    .prompt({
      name: "end",
      type: "rawlist",
      message: "Would you like to Continue Shopping?",
      choices: ["Y", "N"]
    })
    .then(function (answer) {
      if (answer.end.toUpperCase() === "N") {
        console.log("\nThanks for Your Purchases!");
        connection.end();
      }
      else {
        start();
      }
    });
}