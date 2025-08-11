"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      // 3. ถ้า pending เป็น true ให้ disable ปุ่ม
      disabled={pending}
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 disabled:bg-gray-400"
    >
      {/* 4. ถ้า pending เป็น true ให้เปลี่ยนข้อความ */}
      {pending ? "Adding..." : "Add"}
    </button>
  );
}
