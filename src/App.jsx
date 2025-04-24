import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const { Fragment, useRef, useEffect } = React;


const List = ({ items }) => {
  const selectedItemsRef = useRef([]);

  const handleClick = (e, itemName) => {
    const el = e.target;

    // Toggle selected class.
    el.classList.toggle("selected");

    // AAgreee o remove of the array of selected.
    const index = selectedItemsRef.current.indexOf(itemName);
    if (index === -1) {
      selectedItemsRef.current.push(itemName);
    } else {
      selectedItemsRef.current.splice(index, 1);
    }

    // Show selected of the PC.
    const selectedList = document.getElementById("selected");
    selectedList.innerHTML = selectedItemsRef.current.map(name => `<li>${name}</li>`).join("");
  };

  return (
    <Fragment>
      <h3>Selected Items:</h3>
      <ul id="selected"></ul>

      <ul className="List">
        {items.map(item => (
          <li
            key={item.name}
            className={`List__item List__item--${item.color}`}
            onClick={(e) => handleClick(e, item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};


// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <List items={items}/>,
);