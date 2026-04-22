/*
import { useRef } from "react";
import { useState } from "react";
*/

import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name field must be atleast 3 characters" }),
  age: z
    .number({ message: "Age field must be a number" })
    .min(18, { message: "Age must be atleast 18" }),
});

type FormData = z.infer<typeof schema>;

// interface FormData {
// to show our input fields in errors of the useForm() hook.
//   name: string;
//   age: number;
// }

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, //nested destructuring
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  //const formAction = () => {};
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          name="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          name="age"
          type="number"
          className="form-control"
        />
      </div>
      {errors.age && <p className="text-danger">{errors.age.message}</p>}
      <button className="btn btn-primary" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default Form;

/* using useRef()
<input ref={nameRef}>
<input ref={ageRef}>

const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { fullname: "", age: 0 };

  const formAction = () => {
    if (nameRef.current !== null) person.fullname = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };
  */

/* using useState() 
<input onChange={(event) =>setPerson({ ...person, age: parseInt(event.target.value) })} value={person.age}>
<input onChange={(event) =>setPerson({ ...person, age: parseInt(event.target.value) })}value={person.age}>
 const [person, setPerson] = useState({
    fullname: "",
    age: 0,
  });
  */
