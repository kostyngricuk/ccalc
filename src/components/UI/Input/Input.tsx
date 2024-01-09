import { useState, ChangeEvent } from "react";
import classNames from "classnames";

import "./Input.scss";

type InputProps = Omit<JSX.IntrinsicElements['input'], 'value'> & {
  value?: string,
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
};

const Input = ({
  name,
  id = name,
  type = "text",
  value = "",
  placeholder,
  required,
  label,
  hasError = false,
  errorMessage = "",
  ...allProps
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
            className="InputField"
            name={name}
            id={id}
            type={type}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
            autoComplete="off"
            required={required}
            {...allProps}
        />
        {hasError && <p className="Input__error">{errorMessage}</p>}
    </label>
  );
};

export default Input;
