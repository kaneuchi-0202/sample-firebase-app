import { Link } from "@tanstack/react-location";
import React from "react";
import styles from "./style.module.scss";

type Props = {
  theme: "primary" | "white";
  size?: "normal" | "large";
  value: string;
  link: string;
  pageTransition?: boolean;
  className?: string;
};

export const Button: React.FC<Props> = ({
  theme,
  size = "normal",
  value,
  link,
  pageTransition = false,
  className,
}) => {
  return (
    <div
      className={className ? `${className} ${styles.Button}` : styles.Button}
      data-theme={theme}
      data-size={size}
    >
      {pageTransition ? (
        <a href={link} target="_blank" rel="noreferrer">
          {value}　→
        </a>
      ) : (
        <Link to={link}>{value}　→</Link>
      )}
    </div>
  );
};
