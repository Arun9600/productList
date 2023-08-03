import "./App.css";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
let App = () => {
  let [search, setSearch] = useState("");
  let [stocks, setStocks] = useState(false);
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  return (
    <>
      <div className="container">
        <h1>Simple Product List & Filter</h1>
        <SearchBar
          search={search}
          stocks={stocks}
          setSearch={setSearch}
          setStocks={setStocks}
        />
        <ProductTable products={PRODUCTS} search={search} stocks={stocks} />
      </div>
    </>
  );
};

export default App;
