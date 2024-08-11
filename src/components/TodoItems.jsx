import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items-container items">
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
      {/* <TodoItem todoDate="4/12/23" todoName="Exercise"></TodoItem>
      <TodoItem todoDate="4/12/23" todoName="Drink milk"></TodoItem>
      <TodoItem todoDate="4/12/23" todoName="Go to college"></TodoItem>
      <TodoItem todoDate="4/12/23" todoName="Study"></TodoItem>
      <TodoItem todoDate="4/12/23" todoName="Games"></TodoItem> */}
    </div>
  );
};
export default TodoItems;
