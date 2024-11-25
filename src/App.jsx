import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import ShoppingList from "./components/List";

const shoppingItem = [
  {
    id: 1,
    name: "Kopi",
    quantity: 5,
    check: true,
  },
  {
    id: 2,
    name: "Gula",
    quantity: 3,
    check: false,
  },
  {
    id: 3,
    name: "Tepung",
    quantity: 4,
    check: false,
  },
];

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems([...items, item]);
  };

  console.log(items);
  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <ShoppingList items={items} />
      <Footer />
    </div>
  );
}

export default App;
