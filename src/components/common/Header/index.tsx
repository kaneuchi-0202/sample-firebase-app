import { Link, useLocation } from "@tanstack/react-location";
import React from "react";
import styles from "./style.module.scss";
import { Categories } from "../../../lib/constants/categories";

export const Header: React.FC = () => {
  const { current } = useLocation();

  return (
    <header className={styles.Header}>
      <div className={styles.Header__headerWrapper}>
        <div className={styles.Header__title}>Sample</div>
        <div className={styles.Header__links}>
          {Categories.map((category, idx) => {
            return (
              <Link
                key={idx}
                className={
                  current.pathname === category.link
                    ? `${styles.Header__selected} ${styles.Header__link}`
                    : styles.Header__link
                }
                to={category.link}
              >
                {category.value}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};
