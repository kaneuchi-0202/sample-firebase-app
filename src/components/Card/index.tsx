import { Link } from "@tanstack/react-location";
import React, { ReactElement } from "react";
import styles from "./style.module.scss";

type Props = {
  className?: string;
  link?: string;
  children: ReactElement;
};

export const Card: React.FC<Props> = ({ className, link, children }) => {
  return link ? (
    <Link
      className={className ? `${className} ${styles.Card}` : styles.Card}
      to={link}
    >
      {children}
    </Link>
  ) : (
    <div className={className ? `${className} ${styles.Card}` : styles.Card}>
      {children}
    </div>
  );
};
