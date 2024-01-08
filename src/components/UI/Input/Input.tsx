import { useState, ChangeEvent } from "react";
import classNames from "classnames";

import "./Input.scss";

type InputProps = {
  name: string;
  id?: string,
  type?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
  required?: boolean;
};

const Input = ({
  name,
  id = name,
  type = "text",
  value = "",
  placeholder = "",
  label,
  hasError = false,
  errorMessage = "",
  required = false
}: InputProps) => {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <label htmlFor={id} className={classNames('Input', {
        'has-error': hasError
    })}>
        {label && <span className="Input__label">{label} {required && <span className="Input__required">*</span>}</span>}
        <input
            className={classNames("InputField")}
            name={name}
            id={id}
            type={type}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
            autoComplete="off"
            required={required}
        />
        {hasError && <p className="Input__error">{errorMessage}</p>}
    </label>
  );
};

export default Input;
