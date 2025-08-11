import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// ตรวจสอบว่ามี prisma instance ใน global หรือยัง
// ถ้ายังไม่มี ก็ให้สร้างขึ้นมาใหม่
// วิธีนี้จะป้องกันการสร้าง connection ใหม่ทุกครั้งที่เกิด hot-reload ใน development
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // Optional: ให้ log ทุก query ที่ถูกรันออกมาใน console
  });

// ใน production ไม่ต้องทำแบบนี้
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
