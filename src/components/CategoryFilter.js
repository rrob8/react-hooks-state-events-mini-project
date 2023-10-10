import React from "react";

function CategoryFilter({categories,selectedCategory, updateCategory}) {

function handleCategory (event, category) {
  event.target.className = 'selected'
  updateCategory(category)
  
}

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category=> {
        return (
          <button key={category}
          onClick={(event)=>handleCategory(event,category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
