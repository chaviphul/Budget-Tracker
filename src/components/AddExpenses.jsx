const AddExpenses = () => {
  return (
    <div>
      <h3 style={{ marginTop: "20px" }}>Add Expense</h3>
      <div className="add-expense">
        <div>
          <h5>Name</h5>
          <input type="text" />
        </div>
        <div>
          <h5>Cost</h5>
          <input type="text" />
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        style={{ marginTop: "20px" }}
      >
        Save
      </button>
    </div>
  );
};
export default AddExpenses;
