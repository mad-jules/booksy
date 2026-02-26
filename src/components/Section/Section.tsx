import React from "react";
import clsx from "clsx";

import css from "./styles.module.css";

type Props = React.ComponentPropsWithoutRef<"section">;

export default function Section({ children, className, ...rest }: Props) {
  return (
    <section className={clsx(css.section, className)} {...rest}>
      {children}
    </section>
  );
}
