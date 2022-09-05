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
            SAMPLE
            <br />
            COMPANY
          </p>
          <p className={styles.Index__topBlockText}>
            目に留まるホームページを
            <span className={styles.Index__sp}>
              <br />
            </span>
            作成します
          </p>
          <ContactButtons className={styles.Index__topBlockButtons} />
        </div>
        <div className={`${styles.Index__topBlock} ${styles.Index__pc}`}>
          <p className={styles.Index__topBlockCopy}>HPの特徴</p>
          <ul className={styles.Index__topBlockMethods}>
            {[
              "わかりやすいサイト設計",
              "統一されたデザイン",
              "SPAによる軽快な動作",
            ].map((str, idx) => {
              return (
                <li key={idx}>
                  <Link to={"/service"}>{str}</Link>
                </li>
              );
            })}
          </ul>
          <p className={styles.Index__topBlockMethodsText}>
            全<span>999</span>件のメソッドを公開中
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
              <span>ホームページ作成</span>
              <p>
                サーバ、ドメインの準備不要でサイト作成可能です。
                <br />
                1ページ～複数ページまで見積もりますので、お気軽にお問い合わせください。
              </p>
              <p className={styles.Index__contentCardLink}>詳しく見る　→</p>
            </>
          </Card>
          <Card className={styles.Index__contentCard} link="/service">
            <>
              <span>プログラムアドバイス</span>
              <p>
                Java、Javascript等のコーディングアドバイスを行います。エラー解決、課題解消をお手伝いいたします。
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
            デザインを統一しSPAで作成することで、訪問者にストレスを与えないサイト作成が最大の特徴です。
            <br />
            情報を適切に整理することで修正時の手間も簡略化しています。
          </p>
        </div>
        <div className={styles.Index__features}>
          {[
            "訪問者が迷うことのない<br />サイト設計",
            "統一されたデザインで<br />シンプルに見やすく",
            "ページ遷移を行わず<br />訪問者の滞在確立をUP",
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
