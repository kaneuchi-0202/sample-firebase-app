import React from "react";
import { Button } from "../common/Button";
import styles from "./style.module.scss";

type Props = {
  className?: string;
};

export const ContactButtons: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={
        className
          ? `${className} ${styles.ContactButtons}`
          : styles.ContactButtons
      }
    >
      <Button value="資料請求する" link="/" theme="primary" />
      <Button value="お問い合わせする" link="/" theme="white" />
    </div>
  );
};
