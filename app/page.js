"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <div>dingdong</div>
      <button
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        Go to dashboard
      </button>
    </>
  );
}
