import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState({ name: "", done: false });
  const [todoList, setTodoList] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo({ name: "", done: false });
  }

  // const sortedList = todoList.slice().sort((a, b) => Number(a.done) - Number(b.done ))
  // setTodoList(sortedList);

  return (
    <div className="flex flex-col items-center p-2 w-full">
      <form onSubmit={onSubmit} className="w-full sm:w-[600px] mx-auto">
        <div className="flex flex-row">
          <input
            className="border-2 border-blue-500 rounded-tl-md rounded-bl-md p-2 flex items-center w-4/5"
            onChange={(e) => setTodo({ ...todo, name: e.target.value, done: false })}
            value={todo.name}
            type="text"
            placeholder="Enter a todo item..."
          />
          <button type="submit" className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-tr-md rounded-br-md w-1/5 hover:bg-blue-400 transition-colors">
            Add
          </button>
        </div>
      </form>
      {todoList.map((item) => (
        <TodoItem key={item.name} item={item} todoList={todoList} setTodoList={setTodoList} />
      ))}
    </div>
  );
}
