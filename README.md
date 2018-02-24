# Node.js-MySQL

This application is an Amazon - like Store Front command line appication developed using Node.js and MySQL.

# How the program works

From the command line you can run the following command.
1. `node bamazonCustomer.js`

2. Running this application will first display all of the items available for sale. Including the item ID, names, and prices of products for sale.

3. The app should then prompt you with two messages.

   * The first prompt will ask you the ID of the product you would like to buy.
   * The second prompt will ask you how many units of the product you would like to buy.

4. Once you have placed your order, the application should check if the store has enough of the product to meet the your purchase request.

   * If not, the app will log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

5. However, if the store does have enough of the product, your order should be fulfilled.
   * The app will then display the total cost of your purchase.

# npm modules used
1. `mysql`
2. `inquirer`
3. `cli-table2`