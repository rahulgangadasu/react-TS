//Building and Styling Components Practice
import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";
import Like from "./Components/Like";
//import "./Components/ListGroup/ListGroup.css";
import "./App.css";
import { IoCalendarNumberSharp } from "react-icons/io5";
function App1() {
  const [alertVisible, setAlertVisiblity] = useState(false);
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item) => console.log(item)}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisiblity(false)}>Thanks! Close!!!</Alert>
      )}
      <Button color="dark" onClick={() => setAlertVisiblity(true)}>
        Let's Go
      </Button>
      <IoCalendarNumberSharp size="30" />
      <Like onClick={() => console.log("Like toggled")} />
    </div>
  );
}

export default App1;
