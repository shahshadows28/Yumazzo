import React, { forwardRef, Ref } from "react";

interface Option {
  id: number;
  name: string;
  className?: string;
}

type Variant = "main" | "table";

interface SelectProps {
  className?: string;
  options: Option[];
  variant?: Variant;
  selected?: Option;
  setSelected: (option: Option) => void;
  label?: string;
  description?: string;
  errors?: Record<string, any>;
  placeholder?: string;
  name: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      options,
      variant = "main",
      selected,
      setSelected,
      label,
      description,
      errors,
      placeholder,
      name,
      ...props
    },
    ref: Ref<HTMLSelectElement>
  ) => {
    return (
      <>
        {label && (
          <label className="block text-ss font-semibold mb-2 xl:text-sm">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            className={`input ${variant === "main" ? "py-2" : "py-1 xl:py-2"} ${
              errors && errors[name]
                ? "border-red text-red placeholder-red"
                : ""
            } ${className}`}
            value={selected?.id || ""}
            onChange={(e) => {
              const selectedOption = options.find(
                (option) => option.id === parseInt(e.target.value)
              );
              setSelected(selectedOption || { id: 0, name: "" });
            }}
            ref={ref}
            {...props}
          >
            <option value="">{placeholder}</option>
            {Array.isArray(options) &&
              options.map((option, index) => (
                <option key={`opt-${index}`} value={option.id}>
                  {option.name}
                </option>
              ))}
          </select>
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

export default Select;
