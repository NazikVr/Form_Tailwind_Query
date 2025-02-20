import { UseFormRegister } from "react-hook-form";
import { ITextInput } from "../types/ITextInput";

export const getInputsData = (register: UseFormRegister<any>, errors: any): ITextInput[] => [
  {
    placeholder: "Name",
    name: "name",
    register: register("name", {
      required: "The name field is required",
      pattern: { value: /^[A-Z]{1}[a-z]{1,20}$/i, message: "Invalid name" },
    }),
    error: errors.name?.message || undefined,
  },
  {
    placeholder: "Surname",
    name: "surname",
    register: register("surname", {
      required: "The surname field is required",
      pattern: { value: /^[A-Z]{1}[a-z]{1,20}$/i, message: "Invalid surname" },
    }),
    error: errors.surname?.message || undefined,
  },
  {
    placeholder: "E-mail",
    name: "e-mail",
    register: register("e-mail", {
      required: "The e-mail field is required",
      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid e-mail" },
    }),
    error: errors["e-mail"]?.message || undefined,
  },
  {
    placeholder: "Telegram",
    name: "telegram",
    register: register("telegram"), // Не обов'язкове поле, тому без правил
  },
  {
    placeholder: "Salary expectations",
    name: "salary",
    register: register("salary", {
      required: "The salary field is required",
      pattern: { value: /^[0-9]{1,6}$/i, message: "Invalid salary" },
    }),
    error: errors.salary?.message || undefined,
  },
];
