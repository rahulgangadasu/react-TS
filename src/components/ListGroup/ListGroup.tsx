import { useState } from "react";
<<<<<<< HEAD
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "yellowgreen" : "lightgray")};
`;
=======
import listGroupStyles from "./ListGroup.module.css";
>>>>>>> f3fb6e7280a32e7e3683d8ba659ad9a8e3292ee2

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //State Hook
  const [selectedIndex, setSelectedIndex] = useState(0); //useState() returns two array elements [variable, updater function]
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items to display</p>}
<<<<<<< HEAD
      <List>
=======
      <ul
        className={[listGroupStyles.listGroup, listGroupStyles.container].join(
          " ",
        )}
      >
>>>>>>> f3fb6e7280a32e7e3683d8ba659ad9a8e3292ee2
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
