import {React, useState} from "react";
import {AddCategory} from "./componets/AddCategory";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai Champloo",
  ]);

  const onAddCategory = (onNewValue) => {
    if (categories.includes(onNewValue)) return;

    setCategories([onNewValue, ...categories]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewValue={onAddCategory}
      />

      <ol>
        {categories.map((category) => (
          <div key={category}>
            <li>{category}</li>;
          </div>
        ))}
      </ol>
    </>
  );
};
