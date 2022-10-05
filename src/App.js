import { data } from "./Data";
import { useState } from "react";
export default function App() {
  const [store, setStore] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("Beer");
  const category = [...new Set(data.map((item) => item.category))];

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="App">
      <div className="head">Liquor Recommendation App</div>
      <div className="categories">
        {category.map((eachCategory, index) => {
          const isSelected = eachCategory === selectedCategory;
          return (
            <button
              disabled={isSelected}
              key={index}
              onClick={() => handleSelectCategory(eachCategory)}
            >
              {eachCategory}
            </button>
          );
        })}
      </div>
      <div className="items">
        {store
          .filter((eachCategory) => eachCategory.category === selectedCategory)
          .map((eachItem, index) => (
            <div key={index}>
              <h3>Name: {eachItem.name} </h3>
              <h4>Category: {eachItem.category} </h4>
              <p> {eachItem.rating} </p>
            </div>
          ))}
      </div>
    </div>
  );
}
