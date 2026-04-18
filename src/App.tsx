import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";
function App() {
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
    </div>
  );
}

export default App;
