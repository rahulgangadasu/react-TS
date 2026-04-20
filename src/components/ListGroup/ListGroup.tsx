import { useState } from "react";
import listGroupStyles from "./ListGroup.module.css";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); //useState() returns two array elements [variable, updater function]
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul
        className={[listGroupStyles.listGroup, listGroupStyles.container].join(
          " ",
        )}
      >
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
