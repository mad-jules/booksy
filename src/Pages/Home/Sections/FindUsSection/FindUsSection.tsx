import clsx from "clsx";

import Container from "../../../../components/Container/Container";
import Section from "../../../../components/Section/Section";
import { Icon } from "../../../../components/Icon/Icon";
import Map from "../../../../components/Map/Map";
import {
  contactData,
  ContactType,
  shops,
  type ContactDataItem,
} from "./constants";

import css from "./styles.module.css";

export default function FindUsSection() {
  const renderContactData = (item: ContactDataItem, i: number) => {
    const renderContact = () => {
      switch (item.type) {
        case ContactType.Address:
          return (
            <p className={clsx(css.a)} style={{ textDecoration: "none" }}>
              {item.value}
            </p>
          );

        default:
          return (
            <a className={clsx(css.a)} href={`${item.href}${item.value}`}>
              {item.value}
            </a>
          );
      }
    };

    return (
      <li key={i} className={clsx(css.li)}>
        <div className={clsx(css.contactWrapper)}>
          <Icon iconName={item.iconName} />
          <p>{item.label}</p>
        </div>
        {renderContact()}
      </li>
    );
  };

  return (
    <Section>
      <Container>
        <div className={clsx(css.container)}>
          <div className={clsx(css.texWrapper)}>
            <h3 className={clsx(css.h3)}>Location</h3>
            <h2 className={clsx(css.h2)}>How to find us</h2>
            <p className={clsx(css.p)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <address className={clsx(css.address)}>
            <ul className={clsx(css.ul)}>
              {contactData.map(renderContactData)}
            </ul>
          </address>
        </div>
        <Map center={shops[0].coords} markers={shops} />
      </Container>
    </Section>
  );
}
