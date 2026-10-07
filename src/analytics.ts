/**
 * Google Analytics 4。
 * 測定 ID は空。医療シリーズ用のプロパティはまだ置かない。
 * 空のあいだはスクリプトを足さない。
 */

const MEASUREMENT_ID: string = "";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function initAnalytics(): void {
  if (MEASUREMENT_ID === "" || window.gtag !== undefined) return;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag() {
    // gtag は arguments オブジェクトをそのまま積む。配列に包むと計測が落ちる。
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}
