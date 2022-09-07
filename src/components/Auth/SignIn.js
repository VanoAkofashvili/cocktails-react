import { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValues),
    });

    const data = await response.json();
    localStorage.setItem("token", data.token);
    navigate("/cocktails");
  }

  return (
    <div>
      <form
        className={"flex flex-col gap-5  items-center py-20"}
        onSubmit={handleSubmit}
      >
        <input
          className={"border border-gray-700 rounded-md px-2 py-3"}
          type={"email"}
          name={"email"}
          value={inputValues.email}
          onChange={handleChange}
        />
        <input
          className={"border border-gray-700 rounded-md px-2 py-3"}
          type={"password"}
          name={"password"}
          value={inputValues.password}
          onChange={handleChange}
        />

        <Button type={"submit"}>Submit</Button>
      </form>
    </div>
  );
}
