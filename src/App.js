import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    let nwearray = products.map((obj) => {
      if (obj.id === productId) {
        let newobj = { ...obj, count: obj.count + 1 };
        return newobj;
      } else {
        return obj;
      }
    });
    setProducts(nwearray);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
