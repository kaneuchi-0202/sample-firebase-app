import { Link } from "@tanstack/react-location";
import { Card } from "../../components/Card";
import { Button } from "../../components/common/Button";
import { Contact } from "../../components/Contact";
import { ContactButtons } from "../../components/ContactButtons";
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
          <ContactButtons />
        </div>
      </section>
      <section className={styles.Service__section}>
        <div className={styles.Service__content}>
          <Card className={styles.Service__contentCard} link="/service">
            <>
              <span>BtoBマーケティング支援</span>
              <p>
                BtoBマーケティングのあらゆる悩みを解決します。企業のマーケティング活動を抜本的に見直し、マーケティング戦略の立案から施策の実行、PDCAまでサポートします。
              </p>
              <p className={styles.Service__contentCardLink}>詳しく見る　→</p>
            </>
          </Card>
          <Card className={styles.Service__contentCard} link="/service">
            <>
              <span>営業支援</span>
              <p>
                営業成果を最大化するための仕組みづくりを支援します。お客様に最適な「営業の型」を見出し、属人的な営業活動から脱却します。
              </p>
              <p className={styles.Service__contentCardLink}>詳しく見る　→</p>
            </>
          </Card>
        </div>
      </section>
      <section className={styles.Service__section}>
        <Contact />
      </section>
    </div>
  );
};

export default Service;
