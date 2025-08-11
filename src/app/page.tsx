import { AddTodoForm } from "@/components/AddTodoForm";
import { TodoItem } from "../components/TodoItem";
import { prisma } from "./lib/prisma";

const mockTodos = [
  { id: 1, text: "เรียนรู้ Server Components", completed: true },
  { id: 2, text: "ลองใช้ Server Actions", completed: false },
  { id: 3, text: "สร้างโปรเจกต์แรกให้สำเร็จ!", completed: false },
];

export default async function HomePage() {
  const todos = await prisma.todo.findMany({ orderBy: { creaetedAt: "desc" } });

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 mt-10 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">My To-Do List</h1>

        <AddTodoForm />

        <ul className="mt-6 space-y-2">
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    </main>
  );
}
