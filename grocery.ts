class Grocery {
  name: string;
  description: string;
  quantity: number;
  price: number;

  constructor(name: string, description: string, quantity: number, price: number){
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
  }  
}

const milk = new Grocery("Milk", "Organic Whole Milk", 3, 3.50);
const bread = new Grocery("Bread", "Nature's own Butter Bread", 6, 3.12);
const eggs = new Grocery("Eggs", "Organic Eggs", 11, 2.50);

const groceryList = [milk, bread, eggs];

const table = document.getElementById('grocery') as HTMLTableElement;

groceryList.map((grocery, index) => {
  const { name, description, quantity, price } = grocery;
  const row = table.insertRow()
  row.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td id="name">${name}</td>
            <td id="desc">${description}</td>
            <td id="qty">${quantity}</td>
            <td id="price">${price}</td>`;
});