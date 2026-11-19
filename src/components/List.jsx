import { MdCancel } from "react-icons/md";

const List = () => {
  return (
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Food
        <div className="cross-container">
          <span class="badge text-bg-primary rounded-pill">200</span>
          <button className="cross">
            <MdCancel />
          </button>
        </div>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Tranport
        <div className="cross-container">
          <span class="badge text-bg-primary rounded-pill">100</span>
          <button className="cross">
            <MdCancel />
          </button>
        </div>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Shopping
        <div className="cross-container">
          <span class="badge text-bg-primary rounded-pill">150</span>
          <button className="cross">
            <MdCancel />
          </button>
        </div>
      </li>
    </ul>
  );
};
export default List;
