import { addTodo } from "@/app/actions";

export function AddTodoForm() {
  return (
    <form action={addTodo}>
      <input
        type="text"
        name="text" // 'name' ต้องตรงกับที่เราใช้ใน formData.get('text')
        placeholder="What needs to be done?"
        className="flex-grow p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}
