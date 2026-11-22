import { useContext } from "react";
import { BudgetContext } from "../store/AppContext";

const Info = () => {
  const { budget, expensesList } = useContext(BudgetContext);

  const totalExpenses = expensesList.reduce((total, item) => {
    return total + item.cost;
  }, 0);

  const remaining = budget - totalExpenses;

  return (
    <>
      <div className=" budget alert alert-primary box">
        <div>Budget: {budget}</div>
        <button type="button" className="btn btn-primary">
          Edit
        </button>
      </div>
      {remaining < 0 ? (
        <div class="alert alert-danger box" role="alert">
          Overbudget: {Math.abs(remaining)}
        </div>
      ) : (
        <div className="alert alert-success box">Remaining:{remaining}</div>
      )}

      <div className="spent alert alert-info box">
        Spent so far: {totalExpenses}
      </div>
    </>
  );
};
export default Info;
