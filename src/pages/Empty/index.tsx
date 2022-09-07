import { Link } from "@tanstack/react-location";
import styles from "./style.module.scss";

const Empty: React.FC = () => {
  return (
    <div className={styles.Empty}>
      <h2>空のページ</h2>
      <p>
        ヘッダー、フッターのサンプル用のページのため内容は存在しません
        <br />
        ページのサンプルを確認したい場合は以下ページをご覧ください
      </p>
      <ul>
        <li>
          <Link to={"/"}>ホーム</Link>
        </li>
        <li>
          <Link to={"/service"}>サービス</Link>
        </li>
      </ul>
    </div>
  );
};

export default Empty;
