"use client";
import { MainLayout } from "@/layouts/mainLayout";
import { useEffect } from "react";
import { useUserLoginApi } from "@/hooks/use-user";

export default function Layout({ children }) {
  const { refresh } = useUserLoginApi();
  useEffect(() => {
    refresh();
  }, []);
  return <MainLayout children={children} />;
}
