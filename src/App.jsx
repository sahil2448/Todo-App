import AppName from "./components/AppName";
import WelcomeMessage from "./components/WelcomeMessage";
import AddTodo from "./components/AddToDo";
// import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
function App() {
  const initialToDoItems = [
    // {
    //   name: "Exercise",
    //   dueDate: "4/10/2023",
    // },
    // {
    //   name: "Drink milk",
    //   dueDate: "4/10/2023",
    // },
    // {
    //   name: "Go to college",
    //   dueDate: "4/10/2023",
    // },
    // {
    //   name: "Study",
    //   dueDate: "4/10/2023",
    // },
    // {
    //   name: "Games",
    //   dueDate: "4/10/2023",
    // },
  ];

  const [todoItems, setTodoItems] = useState([]);
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item Deleted: ${todoItemName}`);
  };

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName} Date:${itemDueDate}`);

    setTodoItems((currValue) => [
      ...currValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  return (
    <div className="background">
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
      </center>
    </div>
  );
}

export default App;
