// src/app/actions.ts
"use server";

import { prisma } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addTodo(formData: FormData) {
  const text = formData.get("text") as string;

  if (!text) {
    return;
  }

  // 2. เปลี่ยนจาก console.log เป็นการสร้างข้อมูลใน DB
  await prisma.todo.create({
    data: {
      text: text,
    },
  });

  revalidatePath("/"); // 3. สั่งให้หน้าแรกโหลดข้อมูลใหม่
}

export async function toggleTodo(formData: FormData) {
  const id = Number(formData.get("id"));
  const completed = formData.get("completed") === "true";

  // 4. เปลี่ยนเป็นคำสั่งอัปเดตข้อมูลใน DB
  await prisma.todo.update({
    where: { id: id },
    data: { completed: !completed },
  });

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const id = Number(formData.get("id"));

  // 5. เปลี่ยนเป็นคำสั่งลบข้อมูลใน DB
  await prisma.todo.delete({
    where: { id: id },
  });

  revalidatePath("/");
}
