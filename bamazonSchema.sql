DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price Float(10,4) default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Netgear Router","Computers Electronics",89.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Microsoft Surface Pro","Computers Electronics",745.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mac Book Pro","Computers Electronics",1984.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Echo Plus","Computers Electronics",149.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Drocon Drone","Toys and Games",69.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Genga","Toys and Games",11.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("RC Car Toy Park","Toys and Games",39.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fire Tv Stick with Alexa Voice remote","Amazon Devices",39.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mr. Coffe Expresso","Kitchen and Dinning",166.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cracking the Coding Interview","Books",34.89, 6);

-- RESET the stock_quantity amounts
USE bamazon;

UPDATE products SET stock_quantity = 15 WHERE item_id = 1;
UPDATE products SET stock_quantity = 30 WHERE item_id = 2;
UPDATE products SET stock_quantity = 16 WHERE item_id = 3;
UPDATE products SET stock_quantity = 15 WHERE item_id = 4;
UPDATE products SET stock_quantity = 18 WHERE item_id = 5;
UPDATE products SET stock_quantity = 22 WHERE item_id = 6;
UPDATE products SET stock_quantity = 10 WHERE item_id = 7;
UPDATE products SET stock_quantity = 15 WHERE item_id = 8;
UPDATE products SET stock_quantity = 25 WHERE item_id = 9;
UPDATE products SET stock_quantity = 20 WHERE item_id = 10;