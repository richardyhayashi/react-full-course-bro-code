import { useState } from "react";

const MyComponent = () => {
   const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]); 

   const handleAddFood = () => {
      const newFood = document.getElementById('foodInput').value;
      document.getElementById('foodInput').value = "";

      setFoods(f => [ ...f, newFood]);
   };

   const handleRemoveFood = (index) => {
      setFoods(foods.filter((_, idx) => idx !== index))
   }

    return (
      <div>
         <h2>List of Food</h2>
         <ul>
            {foods.map((food, index) =>
               <li key={index} onClick={() => handleRemoveFood(index)}>
                  {food}
               </li>
            )}
         </ul>
         <input type="text" id="foodInput" placeholder="Enter food name" />
         <button onClick={handleAddFood}>Add Food</button>
      </div>
    );
};

export default MyComponent;