import { UseFormRegisterReturn } from "react-hook-form";

export interface ITextInput {
  placeholder: string;
  name: string;
  register: UseFormRegisterReturn<any>;
  required?: string;
  pattern?: { value: RegExp; message: string };
  error?: string;
}
