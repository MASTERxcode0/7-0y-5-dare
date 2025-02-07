import React, { useState } from "react";
import useShoppingCardState from "../store/useShoppingCard";

function ShoppingCart() {
  const [inputValue, setInputValue] = useState("");
  const { shoppingCard, add, remove, edit, clear } = useShoppingCardState();

  const handleAdd = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return; 
    add({ item: inputValue, id: Date.now() });
    setInputValue("");
  };

  const handleEdit = (id) => {
    const newName = prompt("Enter the new name:");
    if (newName && newName.trim() !== "") {
      edit({ id, item: newName });
    }
  };

  return (
    <div className="container mx-auto mt-10 mb-10">
      <form
        className="flex flex-col items-center justify-center mt-10 mb-10 gap-5  p-5 transition duration-500 ease-in-out transform "
        onSubmit={handleAdd}
      >
        <h1>Shopping Cart</h1>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className="border-2 p-2"
          placeholder="Add an item"
        />
        <button type="submit" className="border-2 px-4 py-2">
          ADD
        </button>
      </form>

      <div className="flex flex-col items-center justify-center gap-5 mt-10 mb-10">
        {shoppingCard.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-5 border border-black p-5"
          >
            <h1>{item.item}</h1>
            <button
              onClick={() => remove(item.id)}
              className="border-2 px-4 py-2"
            >
              DELETE
            </button>
            <button
              onClick={() => handleEdit(item.id)}
              className="border-2 px-4 py-2"
            >
              EDIT
            </button>
          </div>
        ))}
        <button
          className="border-2 px-4 py-2"
          onClick={() => clear()} 
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
