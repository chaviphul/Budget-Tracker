import { MdCancel } from "react-icons/md";

const List = ({ expense }) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {expense.name}
      <div className="cross-container">
        <span class="badge text-bg-primary rounded-pill">{expense.cost}</span>
        <button className="cross">
          <MdCancel />
        </button>
      </div>
    </li>
  );
};
export default List;
