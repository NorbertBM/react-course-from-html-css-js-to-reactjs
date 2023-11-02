import React, { useRef, useState, useEffect } from "react";
import Title from "../Title";
import Button from "../Button";
import FormGroup from "../FormGroup";

export default function RegistrationForm({
  handleCancel,
  showLogin,
  registered,
  handleRegistration,
}) {
  // References

  let fullName = useRef();
  useEffect(() => {
    fullName.current.focus();
  }, []);

  // state

  const [registration, setRegistration] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConf: "",
  });
  // Handlers
  const handlerInputChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  function handleRegistration(e) {
    e.preventDefault();
    console.log("first");
    const events = {
      fullName: registration.fullName,
      email: registration.email,
      password: registration.password,
      passwordConf: registration.passwordConf,
      id: Math.floor(Math.random() * 1000),
    };
    // console.log(events);

    const validateRegistrationForm = (obj) => {
      console.log(obj);
      if (
        Object.values(obj).every(
          (value) => value || (typeof value === "number" && value === 0)
        )
      ) {
        resetForm();
        window.alert("Success");
        showLogin();
      } else {
        window.alert("Complete all fields");
      }
    };
    validateRegistrationForm(events);
  }
  function resetForm() {
    setRegistration({
      fullName: "",
      email: "",
      password: "",
      passwordConf: "",
    });
  }
  return (
    <div className="form fadeIn" style={{ maxWidth: 500 }}>
      <Title text="Register" classes={"text-center mb-4"} />
      <Button
        className={"btn-close"}
        text={"x"}
        style={{ position: "absolute", top: 20, right: 30 }}
        onClick={handleCancel}
      />
      <form onSubmit={handleRegistration}>
        <FormGroup
          label={"Name"}
          placeholder={"Enter your name"}
          reference={fullName}
          value={registration.fullName}
          onChange={handlerInputChange}
          name="fullName"
        />{" "}
        <FormGroup
          label={"Email"}
          type={"email"}
          placeholder={"Enter your email"}
          value={registration.email}
          onChange={handlerInputChange}
          name="email"
        />{" "}
        <FormGroup
          label={"Password"}
          type={"password"}
          name="password"
          placeholder={"Enter your password"}
          value={registration.password}
          onChange={handlerInputChange}
        />{" "}
        <FormGroup
          label={"Name"}
          placeholder={"Enter your name"}
          type={"password"}
          name="passwordConf"
          value={registration.passwordConf}
          onChange={handlerInputChange}
        />
        <div className="d-flex space-between">
          <Button
            classes={"btn-primary btn-lg"}
            type={"submit"}
            text={"Register"}
            onClick={() => console.log("Registered")}
          />

          <Button
            type={"button"}
            classes={"btn-lg"}
            text={"Login"}
            onClick={showLogin}
          />
        </div>
      </form>
    </div>
  );
}
