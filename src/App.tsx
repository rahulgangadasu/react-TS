import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisiblity(false)}>My Alert</Alert>
      )}
      <Button color="dark" onClick={() => setAlertVisiblity(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
