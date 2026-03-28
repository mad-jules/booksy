import { IconName } from "../../../../components/Icon/types";
import type { MarkerProps } from "../../../../components/Map/Map";

const shops: MarkerProps[] = [
  {
    img: "/assets/img/desktop-webp/banner-1-desktop.webp",
    alt: "Booksy Store inside",
    title: "Booksy",
    description: "Discover Your Next Great Read Today!",
    address: "123 Books St, Sydney NSW 2000 AU",
    time: "Monday-Sunday | 10am-9pm",
    subTitle: "Book store",
    coords: [-33.68091, 151.27056],
  },
];

enum ContactType {
  Email = "email",
  Tel = "tel",
  Address = "address",
}

interface ContactDataItem {
  iconName: IconName;
  href?: string;
  type: ContactType;
  label: string;
  value: string;
}

const contactData: ContactDataItem[] = [
  {
    iconName: IconName.Envelope,
    href: "mailto:",
    type: ContactType.Email,
    label: "Email",
    value: "hello@booksy.com",
  },
  {
    iconName: IconName.Phone,
    href: "tel:",
    type: ContactType.Tel,
    label: "Phone",
    value: "+61 (241) 304-3012",
  },
  {
    iconName: IconName.Map,
    type: ContactType.Address,
    label: "Office",
    value: "123 Books St, Sydney NSW 2000 AU",
  },
];

export { type ContactDataItem, ContactType, contactData, shops };
