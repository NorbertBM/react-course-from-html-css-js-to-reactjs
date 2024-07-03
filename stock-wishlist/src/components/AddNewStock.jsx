import React from "react";
import Button from "./Button";
import { IoMdAddCircle } from "react-icons/io";
import Input from "./Input";
export default function AddNewStock() {
  return (
    <section className="flex mb-4 sm:flex-col md:flex-row gap-2">
      <Input />
      <Input />
      <Input />
      <Button classes="bg-teal-500 hover:bg-teal-700">
        <IoMdAddCircle size={25} />
      </Button>
    </section>
  );
}
