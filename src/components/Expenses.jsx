import { useContext, useRef } from "react";
import List from "./List";
import { BudgetContext } from "../store/AppContext";

const Expenses = () => {
  const { expensesList, showSearch, searchTerm } = useContext(BudgetContext);
  const filteredExpenses = expensesList.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="expense">
      <h3>Expenses</h3>
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Type to search..."
          className="search-expense"
          onChange={(e) => showSearch(e.target.value)}
        />
      </div>
      <ul className="list-group">
        {filteredExpenses.map((expense) => (
          <List key={expense.id} expense={expense}></List>
        ))}
      </ul>
    </div>
  );
};
export default Expenses;
