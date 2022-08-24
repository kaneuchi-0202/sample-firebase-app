import { Link } from "@tanstack/react-location";
import React from "react";
import styles from "./style.module.scss";

type Props = {
  theme: "primary" | "white";
  size?: "normal" | "large";
  value: string;
  link: string;
  className?: string;
};

export const Button: React.FC<Props> = ({
  theme,
  size = "normal",
  value,
  link,
  className,
}) => {
  return (
    <div
      className={className ? `${className} ${styles.Button}` : styles.Button}
      data-theme={theme}
      data-size={size}
    >
      <Link to={link}>{value}　→</Link>
    </div>
  );
};
