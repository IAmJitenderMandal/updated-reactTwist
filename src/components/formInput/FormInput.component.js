import React from "react";
import "./formInput.styles.scss";

export default function FormInput({ type, placeholder, ...otherInputProps }) {
  return (
    <div className="form-input">
      <input type={type} placeholder={placeholder} {...otherInputProps} />
    </div>
  );
}
