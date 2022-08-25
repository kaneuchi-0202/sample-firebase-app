import { Link } from "@tanstack/react-location";
import { Card } from "../../components/Card";
import { ContactButtons } from "../../components/ContactButtons";
import styles from "./style.module.scss";

const Index: React.FC = () => {
  return (
    <div>
      <div className={styles.Index__top}>
        <div className={styles.Index__topBlock}>
          <p className={styles.Index__topBlockCopy}>
            THE
            <br />
            METHOD
            <br />
            COMPANY
          </p>
          <p className={styles.Index__topBlockText}>
            成果が実証されているメソッドでコンサルティングします
          </p>
          <ContactButtons className={styles.Index__topBlockButtons} />
        </div>
        <div className={styles.Index__topBlock}>
          <p className={styles.Index__topBlockCopy}>弊社のメソッド</p>
          <ul className={styles.Index__topBlockMethods}>
            <li>BtoBマーケティングのメソッド　→</li>
            <li>営業のメソッド　→</li>
            <li>新規事業のメソッド　→</li>
          </ul>
          <p className={styles.Index__topBlockMethodsText}>
            全<span>213</span>件のメソッドを公開中
          </p>
        </div>
      </div>
      <section className={styles.Index__section}>
        <div className={styles.Index__titleAndText}>
          <h2>サービス</h2>
          <p>
            数多くの実践事例からベストプラクティスを導き、独自のメソッドとして開発しています。
            <br />
            メソッドにもとづいたコンサルティングによって、お客様のビジネス課題を最短距離で解決します。
          </p>
        </div>
        <div className={styles.Index__content}>
          <Card className={styles.Index__contentCard} link="/service">
            <>
              <span>BtoBマーケティング支援</span>
              <p>
                BtoBマーケティングのあらゆる悩みを解決します。企業のマーケティング活動を抜本的に見直し、マーケティング戦略の立案から施策の実行、PDCAまでサポートします。
              </p>
              <p className={styles.Index__contentCardLink}>詳しく見る　→</p>
            </>
          </Card>
          <Card className={styles.Index__contentCard} link="/service">
            <>
              <span>営業支援</span>
              <p>
                営業成果を最大化するための仕組みづくりを支援します。お客様に最適な「営業の型」を見出し、属人的な営業活動から脱却します。
              </p>
              <p className={styles.Index__contentCardLink}>詳しく見る　→</p>
            </>
          </Card>
        </div>
      </section>
      <section className={styles.Index__section}>
        <div className={styles.Index__titleAndText}>
          <h2>特徴</h2>
          <p>
            成果が実証されたメソッドによる確実性の高いコンサルティングが最大の特長です。
            <br />
            提案した施策を速やかに実行できる体制を用意しています。
          </p>
        </div>
        <div className={styles.Index__features}>
          {[
            "150件以上のメソッドで<br />ビジネス課題を解決",
            "幅広い業界での<br />100社以上の成功事例",
            "経験豊富なコンサル<br />タントが徹底サポート",
          ].map((value, idx) => {
            return (
              <div key={idx} className={styles.Index__featuresWrapper}>
                <div className={styles.Index__featuresNumber}>
                  {"0" + (idx + 1)}
                </div>
                <p dangerouslySetInnerHTML={{ __html: value }}></p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Index;
