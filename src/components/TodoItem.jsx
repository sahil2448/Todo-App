import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger "
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDelete></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
