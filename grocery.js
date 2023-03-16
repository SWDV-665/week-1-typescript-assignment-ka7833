var Grocery = /** @class */ (function () {
    function Grocery(name, description, quantity, price) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
var milk = new Grocery("Milk", "Organic Whole Milk", 3, 3.50);
var bread = new Grocery("Bread", "Nature's own Butter Bread", 6, 3.12);
var eggs = new Grocery("Eggs", "Organic Eggs", 11, 2.50);
var groceryList = [milk, bread, eggs];
var table = document.getElementById('grocery');
groceryList.map(function (grocery, index) {
    var name = grocery.name, description = grocery.description, quantity = grocery.quantity, price = grocery.price;
    var row = table.insertRow();
    row.innerHTML = "\n            <th scope=\"row\">".concat(index + 1, "</th>\n            <td id=\"name\">").concat(name, "</td>\n            <td id=\"desc\">").concat(description, "</td>\n            <td id=\"qty\">").concat(quantity, "</td>\n            <td id=\"price\">").concat(price, "</td>");
});
