import { toggleTodo, deleteTodo } from "@/app/actions";

type TodoItemProps = {
  id: number;
  text: string;
  completed: boolean;
};

export function TodoItem({ id, text, completed }: TodoItemProps) {
  return (
    <li className="flex items-center gap-2 p-2 border rounded">
      {/* ส่วนของ Checkbox และข้อความ */}
      <form action={toggleTodo} className="flex items-center gap-2">
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="completed" value={String(completed)} />
        <button
          type="submit"
          className={`w-6 h-6 border-2 rounded-full ${
            completed ? "bg-green-500 border-green-500" : "border-gray-400"
          }`}
        ></button>
      </form>
      <span
        className={`flex-grow ${completed ? "text-gray-500 line-through" : ""}`}
      >
        {text}
      </span>

      {/* ส่วนของปุ่ม Delete */}
      <form action={deleteTodo}>
        <input type="hidden" name="id" value={id} />
        <button
          type="submit"
          className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </form>
    </li>
  );
}
