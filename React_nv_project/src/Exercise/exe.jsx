import React, { useState } from "react";

export default function Exe() {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [theme, setTheme] = useState("light");

  // toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // add item
  const addItem = () => {
    if (!name || price <= 0 || quantity <= 0) return;

    const newItem = {
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };

    setCartItems([...cartItems, newItem]);
    setName("");
    setPrice("");
    setQuantity("");
  };

  // update qty
  const updateQuantity = (index, newQty) => {
    const updated = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: parseInt(newQty) } : item
    );
    setCartItems(updated);
  };

  // remove item
  const removeItem = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  // totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h2>Shopping Cart</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

      <p>Current Theme: {theme}</p>

      <input
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={addItem}>Add Item</button>

      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} ×
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(index, e.target.value)}
            />
            = ${item.price * item.quantity}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Total: ${total.toFixed(2)}</p>

      <button onClick={() => setCartItems([])}>Clear Cart</button>
    </div>
  );
}
