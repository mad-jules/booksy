import clsx from "clsx";
import css from "./styles.module.css";
import { Icon } from "../Icon/Icon";
import { IconName } from "../Icon/types";

export interface PopUpContent {
  img: string;
  alt: string;
  title: string;
  subTitle: string;
  description: string;
  address: string;
  time: string;
}

export default function PopupComponent({
  img,
  alt,
  title,
  description,
  address,
  time,
  subTitle,
}: PopUpContent) {
  return (
    <div className={clsx(css["popUpWrapper"])}>
      <img src={img} alt={alt} className={clsx(css["image"])} />
      <h2 className={clsx(css["title"])}>{title}</h2>
      <div className={clsx(css["subTitle"])}>{subTitle}</div>
      <div className={clsx(css["description"])}>{description}</div>
      <div className={clsx(css["iconWrapper"])}>
        <Icon iconName={IconName.Map} className={clsx(css["icon"])} />
        <div className={clsx(css["address"])}>{address}</div>
      </div>
      <div className={clsx(css["iconWrapper"])}>
        <Icon iconName={IconName.Clock} className={clsx(css["icon"])} />
        <div className={clsx(css["time"])}>{time}</div>
      </div>
    </div>
  );
}
