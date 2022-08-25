import React from "react";
import { Button } from "../common/Button";
import styles from "./style.module.scss";

export const Contact: React.FC = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.Contact__block}>
        <span>資料請求</span>
        <p>
          サービス資料をダウンロードいただけます。BtoBマーケティング支援や営業支援のサービスをご検討の方はぜひご一読ください。
        </p>
        <Button
          value="資料請求する"
          link="/"
          theme="primary"
          size="large"
          className={styles.Contact__blockButton}
        />
      </div>
      <div className={styles.Contact__block}>
        <span>お問い合わせ</span>
        <p>
          お客様のBtoBマーケティングや営業活動における課題解決をサポートします。お気軽にご相談ください。
        </p>
        <Button
          value="お問い合わせする"
          link="/"
          theme="primary"
          size="large"
          className={styles.Contact__blockButton}
        />
      </div>
    </div>
  );
};
