import { useState } from "react";
import ExpenseList from "./ExpenseTracker/Components/ExpenseList";
import ExpenseFilter from "./ExpenseTracker/Components/ExpenseFilter";
import ExpenseForm from "./ExpenseTracker/Components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 5, category: "Dairy" },
    { id: 2, description: "Curd", amount: 8, category: "Dairy" },
    { id: 3, description: "Tomatoes", amount: 6, category: "Vegetables" },
    { id: 4, description: "Onions", amount: 3, category: "Vegetables" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}
export default App;
