import React from "react";
import clsx from "clsx";

import { IconName } from "./types";

import css from "./styles.module.css";

interface Props {
  name: `${IconName}`;
  className?: string;
  style?: React.CSSProperties;
}

export function Icon({ name, className, style }: Props) {
  return (
    <svg className={clsx(css.svg, className)} style={style}>
      <use href={`/assets/icon-sprite.svg#${name}`} />
    </svg>
  );
}
