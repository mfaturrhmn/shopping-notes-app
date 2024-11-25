export default function ShoppingList({ items }) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <List item={item} key={item.id} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button>Bersihkan Daftar</button>
      </div>
    </>
  );
}

function List(props) {
  return (
    <li key={props.item.id}>
      <input type="checkbox"></input>
      <span style={props.item.check ? { textDecoration: "line-through" } : {}}>
        {props.item.quantity} {props.item.name}
      </span>
      <button>&times;</button>
    </li>
  );
}
