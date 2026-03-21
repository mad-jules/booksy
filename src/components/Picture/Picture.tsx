import React from "react";
import clsx from "clsx";

import css from "./styles.module.css";

type Density = `${1 | 2 | 3}x`;

export interface Source {
  srcSet: `${string} ${Density}`[];
  media?: string;
}

interface Props extends React.HTMLAttributes<HTMLPictureElement> {
  sources: Source[];
  src: string;
  alt: string;
  classNameImg?: string;
}

export default function Picture({ sources, alt, src, classNameImg }: Props) {
  return (
    <picture>
      {sources.map(({ media, srcSet }, i) => {
        return <source key={i} srcSet={srcSet.join(", ")} media={media} />;
      })}
      <img
        className={clsx(css.img, classNameImg)}
        src={src}
        alt={alt}
        loading="lazy"
      />
    </picture>
  );
}
