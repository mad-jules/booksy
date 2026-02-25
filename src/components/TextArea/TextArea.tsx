import React from "react";
import clsx from "clsx";

import css from "./styles.module.css";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
  classNameLabel?: string;
  classNameWrapper?: string;
  classNameErrorMessage?: string;
  name: string;
}

export default function TextArea({
  label,
  errorMessage,
  className,
  classNameLabel,
  classNameWrapper,
  classNameErrorMessage,
  name,
  ...rest
}: Props) {
  const isError = Boolean(errorMessage);

  return (
    <div className={clsx(css.wrapper, classNameWrapper)}>
      {label && (
        <label
          htmlFor={name}
          className={clsx(css.label, classNameLabel)}
          data-is-error={isError}
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        className={clsx(css["text-area"], className)}
        data-is-error={isError}
        {...rest}
      />
      {errorMessage && (
        <span className={clsx(css["error-message"], classNameErrorMessage)}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}
