import { useContext } from "react";
import { BudgetContext } from "../store/AppContext";

const ViewMode = ({ setIsEditing }) => {
  const { budget } = useContext(BudgetContext);
  return (
    <>
      <div className=" budget alert alert-primary box">
        <div>Budget: {budget}</div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </div>
    </>
  );
};

export default ViewMode;
