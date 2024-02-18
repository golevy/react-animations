"use client"

import { useRouter } from "next/navigation"
import { Button } from "~/components/ui/button"

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        onClick={() => {
          router.push("/text-animations")
        }}
      >
        文字特效
      </Button>
    </main>
  )
}
