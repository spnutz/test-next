import { addTodo } from "@/app/actions";
import { SubmitButton } from "./SubmitButton";

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
      <SubmitButton />
    </form>
  );
}
