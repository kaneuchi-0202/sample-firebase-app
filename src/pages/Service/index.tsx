import { Card } from "../../components/Card";
import { Button } from "../../components/common/Button";
import { ContactButtons } from "../../components/ContactButtons";
import styles from "./style.module.scss";

const Service: React.FC = () => {
  return (
    <div className={styles.Service}>
      <section className={styles.Service__section}>
        <div className={styles.Service__service}>
          <div className={styles.Service__serviceTitle}>サービス</div>
          <div className={styles.Service__serviceText}>
            独自に構築したHP作成用テンプレートを使用して、
            <br />
            高品質、高可用性のWebページを構築して提供します。
          </div>
          <ContactButtons />
        </div>
      </section>
      <section className={styles.Service__section}>
        <div className={styles.Service__content}>
          <Card className={styles.Service__contentCard} link="/service">
            <>
              <span>ホームページ作成</span>
              <p>
                サーバ、ドメインの準備不要でサイト作成可能です。
                <br />
                1ページ～複数ページまで見積もりますので、お気軽にお問い合わせください。
              </p>
              <p className={styles.Service__contentCardLink}>詳しく見る　→</p>
            </>
          </Card>
          <Card className={styles.Service__contentCard} link="/service">
            <>
              <span>プログラムアドバイス</span>
              <p>
                Java、Javascript等のコーディングアドバイスを行います。エラー解決、課題解消をお手伝いいたします。
              </p>
              <p className={styles.Service__contentCardLink}>詳しく見る　→</p>
            </>
          </Card>
        </div>
      </section>
      <section className={styles.Service__section}>
        <div className={styles.Service__contact}>
          <div className={styles.Service__contactBlock}>
            <span>資料請求</span>
            <p>
              こちらサンプルであるため資料等用意しておりませんが、以下リンクのLancersよりお気軽にお問い合わせください。
            </p>
            <Button
              value="資料請求する"
              link="https://www.lancers.jp/profile/kaneuchi_0202"
              pageTransition={true}
              theme="primary"
              size="large"
              className={styles.Service__contactBlockButton}
            />
          </div>
          <div className={styles.Service__contactBlock}>
            <span>お問い合わせ</span>
            <p>
              少しでも気になることがあれば、まずはお問い合わせください。
              内容に応じて見積もりやその他対応をさせていただきます。
            </p>
            <Button
              value="お問い合わせする"
              link="https://www.lancers.jp/profile/kaneuchi_0202"
              pageTransition={true}
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
