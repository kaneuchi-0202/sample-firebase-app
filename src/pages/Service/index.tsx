import { Link } from "@tanstack/react-location";
import { Button } from "../../components/common/Button";
import styles from "./style.module.scss";

const Service: React.FC = () => {
  return (
    <div className={styles.Service}>
      <section className={styles.Service__section}>
        <div className={styles.Service__service}>
          <div className={styles.Service__serviceTitle}>サービス</div>
          <div className={styles.Service__serviceText}>
            独自に開発した100以上のメソッドを用いて、
            <br />
            高い品質のコンサルティングサービスを確立されたプロセスで提供します。
          </div>
          <div className={styles.Service__serviceButtonWrapper}>
            <Button value="資料請求する" link="/" theme="primary" />
            <Button value="お問い合わせする" link="/" theme="white" />
          </div>
        </div>
      </section>
      <section className={styles.Service__section}>
        <div className={styles.Service__content}>
          <div className={styles.Service__contentCard}>
            <span>BtoBマーケティング支援</span>
            <div>
              BtoBマーケティングのあらゆる悩みを解決します。企業のマーケティング活動を抜本的に見直し、マーケティング戦略の立案から施策の実行、PDCAまでサポートします。
            </div>
            <div className={styles.Service__contentCardLink}>
              <Link>詳しく見る　→</Link>
            </div>
          </div>
          <div className={styles.Service__contentCard}>
            <span>営業支援</span>
            <div>
              営業成果を最大化するための仕組みづくりを支援します。お客様に最適な「営業の型」を見出し、属人的な営業活動から脱却します。
            </div>
            <div className={styles.Service__contentCardLink}>
              <Link>詳しく見る　→</Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.Service__section}>
        <div className={styles.Service__contact}>
          <div className={styles.Service__contactBlock}>
            <span>資料請求</span>
            <p>
              サービス資料をダウンロードいただけます。BtoBマーケティング支援や営業支援のサービスをご検討の方はぜひご一読ください。
            </p>
            <Button
              value="資料請求する"
              link="/"
              theme="primary"
              size="large"
              className={styles.Service__contactBlockButton}
            />
          </div>
          <div className={styles.Service__contactBlock}>
            <span>お問い合わせ</span>
            <p>
              お客様のBtoBマーケティングや営業活動における課題解決をサポートします。お気軽にご相談ください。
            </p>
            <Button
              value="お問い合わせする"
              link="/"
              theme="primary"
              size="large"
              className={styles.Service__contactBlockButton}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
