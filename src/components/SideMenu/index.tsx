import { Link } from "@tanstack/react-location";
import React from "react";
import { Categories } from "../../lib/constants/categories";
import { ContactButtons } from "../ContactButtons";
import styles from "./style.module.scss";

export const SideMenuButton: React.FC<SideMenuProps> = ({
  show,
  onClickHamburger,
}) => {
  return (
    <div className={styles.SideMenuButton}>
      <input type="checkbox" id="hamburger-button" onClick={onClickHamburger} />
      <label
        htmlFor="hamburger-button"
        className={styles.SideMenuButton__label}
      >
        <div
          className={`${styles.SideMenuButton__spinner} ${styles.SideMenuButton__diagonalPart1}`}
          data-show={show}
        ></div>
        <div
          className={`${styles.SideMenuButton__spinner} ${styles.SideMenuButton__horizontal}`}
          data-show={show}
        ></div>
        <div
          className={`${styles.SideMenuButton__spinner} ${styles.SideMenuButton__diagonalPart2}`}
          data-show={show}
        ></div>
      </label>
    </div>
  );
};

type SideMenuProps = {
  show: boolean;
  onClickHamburger: () => void;
};

export const SideMenu: React.FC<SideMenuProps> = ({
  show,
  onClickHamburger,
}) => {
  return (
    <>
      {show && (
        <div className={styles.SideMenu__bg} onClick={onClickHamburger}></div>
      )}
      <div
        className={`${styles.SideMenu} ${show ? styles.SideMenu__show : ""}`}
      >
        <div>
          <h2 className={styles.SideMenu__title}>メニュー</h2>
          <ul className={styles.SideMenu__wrapper}>
            {Categories.map((category, idx) => {
              return (
                <li key={idx} className={styles.SideMenu__item}>
                  <Link to={category.link} onClick={onClickHamburger}>
                    <p>{category.value}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.SideMenu__buttons}>
          <ContactButtons />
        </div>
      </div>
    </>
  );
};
