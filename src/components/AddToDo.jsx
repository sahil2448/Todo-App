import { useRef } from "react";
import { MdOutlineDownloadDone } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    console.log(`${todoName} due on: ${dueDate}`);
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-4">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter task here"
          />
        </div>
        <div className="col-4">
          <input title="date" ref={dueDateElement} type="date" />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success kg-button"
            // onClick={}
          >
            <MdOutlineDownloadDone></MdOutlineDownloadDone>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
