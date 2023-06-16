import React, { forwardRef } from "react";

interface InputProps {
  type: string;
  className?: string;
  name: string;
  placeholder?: string;
  label?: string;
  htmlFor?: string;
  errors?: Record<string, any>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type, className, name, placeholder, label, htmlFor, errors, ...props },
    ref
  ) => {
    return (
      <>
        <div className="w-full flex flex-col">
          {label && (
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor={htmlFor}
            >
              {label}
            </label>
          )}
          <input
            type={type}
            className={`input ${
              errors?.[name]
                ? "border-red placeholder-red focus:border-red"
                : ""
            } ${className}`}
            name={name}
            placeholder={placeholder}
            ref={ref}
            {...props}
          />

          {errors && errors[name] && (
            <p className="flex mt-1.25 text-xs lg:text-ss text-red">
              <span className="ml-1">{errors[name]?.message}</span>
            </p>
          )}
        </div>
      </>
    );
  }
);

export default Input;
