import React from "react";
import clsx from "clsx";

import css from "./styles.module.css";

type Props = React.ComponentPropsWithoutRef<"div">;

export default function Container({ children, className, ...rest }: Props) {
  return (
    <div className={clsx(css.container, className)} {...rest}>
      {children}
    </div>
  );
}
