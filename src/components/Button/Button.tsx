import React from "react";
import clsx from "clsx";

import { ButtonSize, ButtonVariant } from "./types";

import css from "./styles.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: `${ButtonVariant}`;
  size?: `${ButtonSize}`;
}

export default function Button({
  text,
  variant = "primary",
  className,
  size = "medium",
  type = "button",
  ...rest
}: Props) {
  const classNames = [css.button, css[variant], css[size], className];

  return (
    <button type={type} className={clsx(classNames)} {...rest}>
      {text}
    </button>
  );
}
