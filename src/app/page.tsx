import { AddTodoForm } from "@/components/AddTodoForm";

const mockTodos = [
  { id: 1, text: "เรียนรู้ Server Components", completed: true },
  { id: 2, text: "ลองใช้ Server Actions", completed: false },
  { id: 3, text: "สร้างโปรเจกต์แรกให้สำเร็จ!", completed: false },
];

export default function HomePage() {
  const todos = mockTodos;

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 mt-10 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">My To-Do List</h1>

        {/* 2. นำฟอร์มมาวางไว้ตรงนี้ */}
        <AddTodoForm />

        <ul className="mt-6 space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`p-2 border rounded ${
                todo.completed ? "bg-green-100 text-gray-500 line-through" : ""
              }`}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
