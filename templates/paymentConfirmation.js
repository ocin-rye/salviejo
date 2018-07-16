module.exports = (cart, checkout) => {
  const cartItems = [];

  cart.forEach((item) => {
    cartItems.push(`<p>${item.name} - ${item.style} - Quantity: ${item.quantity} - Unit Price: ${
      item.price
    }</p>`);
  });

  console.log(checkout);

  return `
    <h1>Thank you for your order!</h1>
    <h2>Order Details:</h2>
    <p>The amount paid was</p>
    ${cartItems
    .toString()
    .split(',')
    .join('')}
    `;
};
