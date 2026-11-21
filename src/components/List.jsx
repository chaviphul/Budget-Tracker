import { useContext } from "react";
import { MdCancel } from "react-icons/md";
import { BudgetContext } from "../store/AppContext";

const List = ({ expense }) => {
  const { deleteExpense } = useContext(BudgetContext);
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {expense.name}
      <div className="cross-container">
        <span class="badge text-bg-primary rounded-pill">{expense.cost}</span>
        <button className="cross" onClick={() => deleteExpense(expense.id)}>
          <MdCancel />
        </button>
      </div>
    </li>
  );
};
export default List;
