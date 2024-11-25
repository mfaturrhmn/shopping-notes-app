import { useState } from "react";

export default function Form({onAddItems}) {
  const [name, setName] = useState("");

  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;

    const newItem = {
      name: name,
      quantity: quantity,
      check: false,
      id: Date.now,
    };

    onAddItems(newItem)

    setName("");
    setQuantity(1);
  };

  const quantityNum = [...Array(10)].map((_, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang... "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}
