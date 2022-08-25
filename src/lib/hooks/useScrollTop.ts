import { useEffect } from "react";
import { useLocation } from "@tanstack/react-location";

export const useScrollTop = () => {
  // ページ遷移が発生するたびにページ上部にスクロールする
  const { current } = useLocation();

  useEffect(() => {
    window.scroll({ top: 0 });
  }, [current]);
};
