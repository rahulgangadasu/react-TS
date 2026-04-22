/*
import { useRef } from "react";
import { useState } from "react";
*/

import { useForm, type FieldValues } from "react-hook-form";

interface FormData {
  //to show our input fields in errors of the useForm() hook.
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, //nested destructuring
  } = useForm<FormData>();
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
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          name="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && ( //?. this is optional chaining.
          <p className="text-danger">This name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          name="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
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
