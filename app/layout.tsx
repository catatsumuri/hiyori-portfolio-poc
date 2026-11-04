import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "水瀬ひより | PHP / Laravel Developer",
  description: "架空のPHP / Laravelエンジニア、水瀬ひよりのポートフォリオ。AI支援開発ワークフロー検証用のデモサイトです。",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>
}
