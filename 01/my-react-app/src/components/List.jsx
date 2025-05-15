import React from 'react';

const List = ({itemList=[], category="Category"}) => {
   const listItems = itemList.map((item) => (
     <li key={item.id}>
       {item.name}: &nbsp;<b>{item.calories}</b>
     </li>
   ));

    return (
      <>
        <h3 className='list-categories'>{category}</h3>
        <ol className='list-items'>{listItems}</ol>
      </>
    );
};

export default List;