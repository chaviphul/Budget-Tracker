import List from "./List";

const Expenses = () => {
  return (
    <div className="expense">
      <h3>Expenses</h3>
      <div class="input-group mb-3">
        <input
          type="text"
          placeholder="Type to search..."
          className="search-expense"
        />
      </div>
      <List></List>
    </div>
  );
};
export default Expenses;
