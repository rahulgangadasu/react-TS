import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  //State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); //useState() returns two array elements [variable, updater function]
  return (
    <>
      <h1>List of Cities</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
