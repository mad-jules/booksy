import Container from "../Container/Container";
import Picture from "../Picture/Picture";
import Section from "../Section/Section";
import css from "./styles.module.css";
import clsx from "clsx";

export default function DesriptionSection() {
  return (
    <Section>
      <Container>
        <div className={clsx(css.wrapper)}>
          <div className={clsx(css.text_wrapper)}>
            <h2 className={clsx(css.title)}>
              Welcome to Booksy - your cozy corner for handpicked reads.
            </h2>
            <p className={clsx(css.text)}>
              We believe books are more than just stories — they're companions,
              doorways, and memories. Whether you're chasing adventures or quiet
              moments, we're here to help you find your next favorite book.
            </p>
          </div>
          <Picture
            desktopPath1x="/assets/img/desktop-webp/layout-desktop.webp"
            desktopPath2x="/assets/img/desktop-webp/layout-desktop@2x.webp"
            mobPath1x="/assets/img/mob-webp/layout-mob.webp"
            mobPath2x="/assets/img/mob-webp/layout-mob@2x.webp"
            tabletPath1x="/assets/img/tablet-webp/layout-tablet.webp"
            tabletPath2x="/assets/img/tablet-webp/layout-tablet@2x.webp"
            alt="A man is reading in a library"
            classNameImg={css.img}
          />
        </div>
      </Container>
    </Section>
  );
}
