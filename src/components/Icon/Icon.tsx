import React from "react";
import clsx from "clsx";

import { IconName } from "./types";

import css from "./styles.module.css";

interface Props extends React.ComponentPropsWithoutRef<"svg"> {
  iconName: `${IconName}`;
}

export function Icon({ iconName, className, ...rest }: Props) {
  return (
    <svg className={clsx(css.svg, className)} {...rest}>
      <use href={`/assets/icon-sprite.svg#${iconName}`} />
    </svg>
  );
}
