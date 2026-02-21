import css from "./styles.module.css";

interface Props {
  isDisabled?: boolean;
  text?: string;
  style?: React.CSSProperties;
  onClick: () => void;
}

export default function Button({ isDisabled, onClick, style, text }: Props) {
  return (
    <button
      className={css.button}
      type="button"
      style={style}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
