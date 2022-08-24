type FooterContent = {
  value: string;
  link: string;
  children?: {
    value: string;
    link: string;
  }[];
};
export const FooterContents: FooterContent[][] = [
  [
    { value: "ホーム", link: "/" },
    { value: "特徴", link: "/" },
    { value: "実績", link: "/" },
    { value: "セミナー・イベント", link: "/" },
    { value: "書籍・メディア", link: "/" },
    { value: "お知らせ", link: "/" },
    { value: "資料請求", link: "/" },
    { value: "お問い合わせ", link: "/" },
    { value: "社長ブログ", link: "/" },
  ],
  [
    {
      value: "サービス",
      link: "/service",
      children: [
        { value: "BtoBマーケティング支援", link: "/" },
        { value: "営業支援", link: "/" },
      ],
    },
    {
      value: "メソッド",
      link: "/method",
      children: [
        { value: "BtoBマーケティング", link: "/" },
        { value: "営業", link: "/" },
        { value: "新規事業", link: "/" },
      ],
    },
  ],
  [
    {
      value: "会社紹介",
      link: "/company",
      children: [
        { value: "弊社のミッション", link: "/" },
        { value: "会社情報", link: "/" },
        { value: "スクール事業", link: "/" },
        { value: "コンサルタント紹介", link: "/" },
      ],
    },
  ],
  [
    {
      value: "採用情報",
      link: "/recruit",
      children: [
        { value: "1ページでわかる特徴", link: "/" },
        { value: "働く7つのメリット", link: "/" },
        { value: "仕事", link: "/" },
        { value: "環境", link: "/" },
        { value: "文化と制度", link: "/" },
        { value: "企業理念・代表メッセージ", link: "/" },
        { value: "社員紹介", link: "/" },
        { value: "募集要項", link: "/" },
      ],
    },
  ],
];
