import { useRef } from "react";
import clsx from "clsx";

import { Icon } from "../Icon/Icon";
import type { IconName } from "../Icon/types";

import css from "./styles.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: `${IconName}`;
  iconStyle?: React.CSSProperties;
  iconProps?: React.ComponentPropsWithoutRef<"svg">;
  onClick: (e: React.MouseEvent) => void;
}

export default function IconButton({
  iconName,
  className,
  iconStyle,
  iconProps,
  onClick,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    onClick(e);
    ref.current?.blur();
  };

  return (
    <button
      ref={ref}
      className={clsx(css.button, className)}
      onClick={handleClick}
      {...rest}
    >
      <Icon style={iconStyle} iconName={iconName} {...iconProps} />
    </button>
  );
}
