let order = [
    { name: "white-caramel", quantity: 0 },
    { name: "chocolate", quantity: 0 },
    { name: "sprinkles", quantity: 0 }
  ];
  
  function addToOrder() {
    const topping = document.getElementById("topping").value;
    const itemIndex = order.findIndex(item => item.name === topping);
    order[itemIndex].quantity += 1;
  
    const currentOrderList = document.getElementById("current-order");
    currentOrderList.innerHTML = "";
  
    order.forEach(item => {
      if (item.quantity > 0) {
        const li = document.createElement("li");
        li.innerText = `${item.name}: ${item.quantity}`;
        currentOrderList.appendChild(li);
      }
    });
  }
  
  function placeOrder() {
    let total = 0;
  
    order.forEach(item => {
      if (item.quantity > 0) {
        const price = getPrice(item.name);
        total += price * item.quantity;
        item.quantity = 0;
      }
    });
  
    alert(`Your total is $${total.toFixed(2)}. Thank you for your order!`);
  
    const currentOrderList = document.getElementById("current-order");
    currentOrderList.innerHTML = "";
  }
  
  function getPrice(topping) {
    switch(topping) {
      case "white-caramel":
        return 2.50;

      case "chocolate":
        return 2.50;

      case "sprinkles":
        return 2.50;
      default:
        return 0;
    }
  }
  
