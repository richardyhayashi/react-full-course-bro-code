import React from 'react';

const List = () => {
  const fruits = [
    { id: 1, name: 'Apple', calories: 95 },
    { id: 2, name: 'Orange', calories: 45 },
    { id: 3, name: 'Banana', calories: 105 },
    { id: 4, name: 'Coconut', calories: 159 },
    { id: 5, name: 'Pineapple', calories: 37 },
  ];

  //fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
  //fruits.sort((a, b) => a.calories - b.calories); // NUMERICAL
  //fruits.sort((a, b) => b.calories - a.calories); // NUMERICAL

  //const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  //const hiCalFruits = fruits.filter(fruit => fruit.calories >= 100);

   //const listItems = lowCalFruits.map((fruit) => (
   //const listItems = hiCalFruits.map((fruit) => (
   const listItems = fruits.map((fruit) => (
     <li key={fruit.id}>
       {fruit.name}: &nbsp;<b>{fruit.calories}</b>
     </li>
   ));

  return <ol>{listItems}</ol>;
};

export default List;