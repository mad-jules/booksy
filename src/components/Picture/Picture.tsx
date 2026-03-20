import React from "react";
import css from "./styles.module.css";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLPictureElement> {
  desktopPath1x: string;
  desktopPath2x: string;
  tabletPath1x: string;
  tabletPath2x: string;
  mobPath1x: string;
  mobPath2x: string;
  alt: string;
  classNameImg?: string;
}

export default function Picture({
  desktopPath1x,
  desktopPath2x,
  tabletPath1x,
  tabletPath2x,
  mobPath1x,
  mobPath2x,
  alt,
  classNameImg,
}: Props) {
  return (
    <picture>
      <source
        srcSet={`${desktopPath1x} 1x, ${desktopPath2x} 2x`}
        media="(min-width: 1440px)"
      />
      <source
        srcSet={`${tabletPath1x} 1x, ${tabletPath2x} 2x`}
        media="(min-width: 768px)"
      />
      <img
        className={clsx(css.img, classNameImg)}
        srcSet={`${mobPath1x} 1x, ${mobPath2x} 2x`}
        src={mobPath1x}
        alt={alt}
        loading="lazy"
      />
    </picture>
  );
}
