import { useContext, useRef } from "react";
import { BudgetContext } from "../store/AppContext";

const AddExpenses = () => {
  const { addExpense } = useContext(BudgetContext);
  const expenseName = useRef();
  const expenseCost = useRef();

  const handleSave = () => {
    const name = expenseName.current.value;
    const cost = expenseCost.current.value;
    if (!name || !cost) return;

    addExpense(name, cost);
    expenseName.current.value = "";
    expenseCost.current.value = "";
  };

  return (
    <div>
      <h3 style={{ marginTop: "20px" }}>Add Expense</h3>
      <div className="add-expense">
        <div>
          <h5>Name</h5>
          <input type="text" ref={expenseName} />
        </div>
        <div>
          <h5>Cost</h5>
          <input type="text" ref={expenseCost} />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        style={{ marginTop: "20px" }}
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};
export default AddExpenses;
