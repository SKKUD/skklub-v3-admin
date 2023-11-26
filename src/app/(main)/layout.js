"use client";
import { MainLayout } from "@/layouts/mainLayout";
import { CookiesProvider } from "react-cookie";

export default function Layout({ children }) {
  return (
    <CookiesProvider>
      <MainLayout children={children} />
    </CookiesProvider>
  );
}
