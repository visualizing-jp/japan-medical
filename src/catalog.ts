/**
 * 医療シリーズのカタログ。
 * ローカルは ../japan-medical-{slug}/ 。公開 URL も同じ slug。
 */

export type CategoryId = "checkup";

export type ProjectStatus = "published" | "pending";

export type CatalogEntry = {
  slug: string;
  title: string;
  source: string;
  period: string;
  category: CategoryId;
  status: ProjectStatus;
  url: string | null;
  art: string;
};

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "checkup", label: "健診" },
];

export const CATALOG: CatalogEntry[] = [
  {
    slug: "checkup",
    title: "日本人の健診の数値はどこで違っているか",
    source: "NDBオープンデータ",
    period: "2023",
    category: "checkup",
    status: "published",
    url: "https://japan-medical-checkup.visualizing.jp/",
    art: "/art/checkup.svg",
  },
];
