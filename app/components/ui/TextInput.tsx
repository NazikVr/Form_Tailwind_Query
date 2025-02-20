import { ITextInput } from "../types/ITextInput";

export default function TextInput({ placeholder, register, error }: ITextInput) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <input
        type="text"
        placeholder={placeholder}
        {...register}
        className="border border-gray-300 p-2 rounded"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}