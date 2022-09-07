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
    { value: "", link: "/" },
  ],
  [
    {
      value: "サービス",
      link: "/service",
      children: [
        { value: "ホームページ作成", link: "/" },
        { value: "プログラムアドバイス", link: "/" },
      ],
    },
    {
      value: "メソッド",
      link: "/method",
      children: [
        { value: "わかりやすいサイト設計", link: "/" },
        { value: "統一されたデザイン", link: "/" },
        { value: "SPAによる軽快な動作", link: "/" },
      ],
    },
  ],
  [
    {
      value: "会社紹介",
      link: "/company",
      children: [
        { value: "概要", link: "/" },
        { value: "会社情報", link: "/" },
      ],
    },
  ],
  [
    {
      value: "採用情報",
      link: "/recruit",
      children: [
        { value: "メリット", link: "/" },
        { value: "仕事", link: "/" },
        { value: "環境", link: "/" },
        { value: "募集要項", link: "/" },
      ],
    },
  ],
];
