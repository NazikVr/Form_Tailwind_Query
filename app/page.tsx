"use client";

export interface IForm {
  "e-mail": string;
  name: string;
  surname: string;
  telegram: string;
  salary: number;
  position: string;
  level: string;
  phone: number;
}

import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "./components/ui/TextInput";
import { getInputsData } from "./components/data/inputsData";

export default function Home() {
  const { register, handleSubmit, formState, reset } =
    useForm<IForm>({
      mode: "onChange",
    });

  const { errors } = formState;

  const inputsData = getInputsData(register, errors);
  console.log(inputsData);

  const onSubmit: SubmitHandler<IForm> = (data: any) => {
    console.log(data);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 items-center"
        >

          {getInputsData(register, errors).map((input) => (
            <TextInput key={input.name} {...input} />
          ))}
          {/* <input type='text' placeholder="Phone"/> */}
          {/* <input type='text' placeholder="Position"/> */}
          {/* <input type='text' placeholder="Level"/> */}

          <button type="submit">submit</button>
          <button onClick={() => reset()}>RESET</button>
        </form>
      </main>
    </div>
  );
}
