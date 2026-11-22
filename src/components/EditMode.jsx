import { useContext, useRef } from "react";
import { BudgetContext } from "../store/AppContext";

const EditMode = ({ setIsEditing }) => {
  const { budget, editBudget } = useContext(BudgetContext);
  const newbudget = useRef();
  const handleSave = () => {
    setIsEditing(false);
    editBudget(newbudget.current.value);
  };
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder={budget}
          ref={newbudget}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditMode;
