import { Link } from "@tanstack/react-location";
import React from "react";
import styles from "./style.module.scss";
import { FooterContents } from "../../../lib/constants/footer";

export const Footer: React.FC = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__footerWrapper}>
        <div className={styles.Footer__company}>
          <div>
            <p className={styles.Footer__companyName}>Sample</p>
            <p>株式会社 サンプル</p>
          </div>
          <div className={styles.Footer__companyAddress}>
            <p>〒100-0000</p>
            <p>東京都千代田区1-1-1</p>
          </div>
        </div>
        <div className={styles.Footer__links}>
          {FooterContents.map((contents, idx) => {
            return (
              <div key={idx} className={styles.Footer__linkColumn}>
                {contents.map((content, idx1) => {
                  return (
                    <>
                      <Link
                        key={idx1}
                        className={styles.Footer__linkParent}
                        to={content.link}
                      >
                        {content.value}
                      </Link>
                      {content.children &&
                        content.children.map((child, idx2) => {
                          return (
                            <Link
                              key={idx2}
                              className={styles.Footer__linkChild}
                              to={child.link}
                            >
                              {child.value}
                            </Link>
                          );
                        })}
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
