import { useContext } from "react";
import List from "./List";
import { BudgetContext } from "../store/AppContext";

const Expenses = () => {
  const { expensesList } = useContext(BudgetContext);
  return (
    <div className="expense">
      <h3>Expenses</h3>
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Type to search..."
          className="search-expense"
        />
      </div>
      <ul class="list-group">
        {expensesList.map((expense) => (
          <List key={expense.id} expense={expense}></List>
        ))}
      </ul>
    </div>
  );
};
export default Expenses;
