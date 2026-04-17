import type { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List of Cities</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

/* -> <h1>List </h1> returning multiple tags is not allowed in React, 
      so we should wrap them in a <div> tag or import { Fragment } from "react";.
      or we can use <Fragment> or empty <>(angular brackets).
*/

/*-> we use curly braces {} to render data dynamically.
     In JSX we can only use html elements or other react components.
     For conditional rendering like items.length === 0 ? <p>No items to display</p> : null
     true && 'something' displays 'something' in console.
     false && 'nothing' displays false, so we can use && in place of ternary (?:) operator.
 */
