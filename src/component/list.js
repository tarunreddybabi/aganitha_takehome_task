import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./card";

export default function List() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [filteredItem, setFilteredItem] = useState("all");
  const [searchBox, setSearchBox] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearchBox(e.target.value);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((val) => {
        setData(val);

        const unique = val.map((item) => item.category);
        const uniqueCategories = unique.filter(
          (val, ind) => unique.indexOf(val) === ind
        );
        setCategory(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filtering = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(searchBox.toLowerCase()) ||
      item.category.toLowerCase().includes(searchBox.toLowerCase())
  );

  const displayData =
    filteredItem === "all"
      ? filtering
      : filtering.filter((item) => item.category === filteredItem);

  return (
    <div>
      <form style={{ display: "flex", margin: "4px" }} onSubmit={handleSubmit}>
        <input
          style={{ marginRight: "5px" }}
          type="text"
          value={searchBox}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <button
        style={{ marginRight: "10px", marginTop: "5px" }}
        onClick={() => setFilteredItem("all")}
      >
        All
      </button>
      {category.map((val, ind) => (
        <button
          key={ind}
          style={{ marginRight: "10px", marginTop: "5px" }}
          onClick={() => {
            setFilteredItem(val);
          }}
        >
          {val}
        </button>
      ))}
      {displayData?.map((val) => (
        <div key={val.id}>
          <Card image={val.image} price={val.price} title={val.title} />
        </div>
      ))}
    </div>
  );
}
