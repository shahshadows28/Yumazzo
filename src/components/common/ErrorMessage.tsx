import React from "react";

interface ErrorMessageProps {
  errors?: Record<string, any>;
  name: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errors, name }) => {
  return (
    <>
      {errors && errors[name] && (
        <p className="flex mt-1.25 text-xs lg:text-ss text-red">
          <span className="ml-1">{errors[name]?.message}</span>
        </p>
      )}
    </>
  );
};

export default ErrorMessage;
