import { useContext, useState } from "react";
import { BudgetContext } from "../store/AppContext";
import EditMode from "./EditMode";
import ViewMode from "./ViewMode";

const Info = () => {
  const { budget, expensesList } = useContext(BudgetContext);

  const totalExpenses = expensesList.reduce((total, item) => {
    return total + item.cost;
  }, 0);

  const remaining = budget - totalExpenses;

  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <EditMode setIsEditing={setIsEditing}></EditMode>
      ) : (
        <ViewMode setIsEditing={setIsEditing}></ViewMode>
      )}
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
