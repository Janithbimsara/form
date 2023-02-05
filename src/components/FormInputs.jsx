import React from "react";
import "./FormInputs.css";

export const FormInputs = (props) => {
  const { label, errorMessage, id, onChange, ...inputProps } = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  );
};
