import { Link, useLocation } from "@tanstack/react-location";
import React from "react";
import styles from "./style.module.scss";
import { Categories } from "../../../lib/constants/categories";
import { SideMenuButton } from "../../SideMenu";

type Props = {
  show: boolean;
  onClickHamburger: () => void;
};

export const Header: React.FC<Props> = ({ show, onClickHamburger }) => {
  const { current } = useLocation();

  return (
    <header className={styles.Header}>
      <div className={styles.Header__headerWrapper}>
        <Link className={styles.Header__title}>
          Sample
          <span className={`${styles.Header__subTitle} ${styles.Header__pc}`}>
            (こちらはサンプルサイトです)
          </span>
          <span className={`${styles.Header__subTitle} ${styles.Header__sp}`}>
            (サンプルサイトです)
          </span>
        </Link>
        <div className={styles.Header__links}>
          {Categories.map((category, idx) => {
            return (
              <Link
                key={idx}
                className={styles.Header__link}
                data-selected={current.pathname === category.link}
                to={category.link}
              >
                {category.value}
              </Link>
            );
          })}
        </div>
        <SideMenuButton show={show} onClickHamburger={onClickHamburger} />
      </div>
    </header>
  );
};
