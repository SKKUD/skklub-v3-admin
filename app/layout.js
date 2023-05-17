import { Inter } from "next/font/google";
import Providers from "@/theme/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SKKLUB ADMIN",
  description: "SKKUD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
