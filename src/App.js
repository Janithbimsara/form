import { useState } from "react";
import "./App.css";
import { FormInputs } from "./components/FormInputs";

function App() {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    birthDay: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "User Name",
      errorMessage: "",
      label: "User Name",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "",
      label: "Email",
    },
    {
      id: 3,
      name: "birthDay",
      type: "text",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "",
      label: "Confirm Password",
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
