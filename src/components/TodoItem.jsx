import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdOutlineDoneOutline } from "react-icons/md";


export default function TodoItem({ item, todoList, setTodoList }) {
  function deleteTask(item) {
    // console.log("deleteTask", item);
    setTodoList(todoList.filter((todo) => todo !== item));
  }
  function doneTask(item) {
    const updatedList = todoList.map((todo) =>
      todo === item ? { ...todo, done: !todo.done } : todo
    );
    // const sortedList = [...updatedList].sort((a, b) => {
    //   if (a.done === b.done) return 0;
    //   return a.done ? 1 : -1;
    // });
    const sortedList = updatedList.slice().sort((a, b) => Number(a.done) - Number(b.done));
    setTodoList(sortedList);
  }

  return (
    <div className="flex items-center justify-between p-3 sm:p-4 border-2 border-black rounded-md my-2 w-full sm:w-[600px] mx-auto">
      <div className="flex-1 min-w-0 pr-2">
        <h1 className={`${item.done ? "opacity-50 line-through" : "opacity-100 font-bold"} text-sm sm:text-base truncate`}>
          {item.name}
        </h1>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <span>
          <button
            onClick={() => doneTask(item)}
            className={`${item.done ? "bg-yellow-500 hover:bg-yellow-400" : "bg-blue-500 hover:bg-blue-400"} text-white p-1.5 sm:p-2 rounded-md flex items-center transition-all duration-300 group`}>
            <MdOutlineDoneOutline className="text-lg sm:text-xl" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[60px] transition-all duration-300 ease-in-out">
              <span className="pl-1 text-sm sm:text-base">{item.done ? "Redo" : "Done"}</span>
            </span>
          </button>
        </span>
        <span>
          <button
            onClick={() => deleteTask(item)}
            className="bg-red-500 text-white p-1.5 sm:p-2 rounded-md hover:bg-red-400 flex items-center transition-all duration-300 group">
            <RiDeleteBin6Fill className="text-lg sm:text-xl" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[60px] transition-all duration-300 ease-in-out">
              <span className="pl-1 text-sm sm:text-base">Delete</span>
            </span>
          </button>
        </span>
      </div>
    </div>
  );
}
