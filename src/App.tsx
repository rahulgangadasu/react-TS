import ListGroup from "./Components/ListGroup";
function App() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const handleSelectItem = (item: string) => {
    alert(`You selected ${item}`);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
