"use server";

export async function addTodo(formData: FormData) {
  const text = formData.get("text") as string;

  if (!text) return;

  console.log("New To-Do from Server Action:", text);

  await new Promise((res) => setTimeout(res, 1000));

  // TODO: ในอนาคต เราจะเพิ่มโค้ดบันทึกลง Database ที่นี่
  // TODO: และเราจะเรียก revalidatePath('/') เพื่ออัปเดต UI
}
