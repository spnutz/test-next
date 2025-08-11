// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ลบข้อมูลเก่าทิ้งทั้งหมด
  await prisma.todo.deleteMany();

  // เพิ่มข้อมูลใหม่
  await prisma.todo.create({
    data: {
      text: "เรียนรู้ Next.js Server Components",
      completed: true,
    },
  });

  await prisma.todo.create({
    data: {
      text: "สร้าง To-Do List โปรเจกต์แรก",
    },
  });

  await prisma.todo.create({
    data: {
      text: "Deploy โปรเจกต์ขึ้น Vercel",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
