import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./resources/css/global/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const roboto = Roboto({
  weight: ["100", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Mendes | Front-End",
  description: "Portifólio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body data-theme='dark' className={`${roboto.className} dark-theme`}>{children}</body>
    </html>
  );
}
