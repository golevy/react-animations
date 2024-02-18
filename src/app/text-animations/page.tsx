"use client"

import { useRouter } from "next/navigation"
import * as React from "react"
import { Button } from "~/components/ui/button"

const textAnimations = [
  {
    id: 1,
    title: "文字连续光影特效",
    href: "/text-animations/num-1",
  },
  {
    id: 2,
    title: "文字加载特效",
    href: "/text-animations/num-2",
  },
]

const textAnimationsPage = () => {
  const router = useRouter()

  return (
    <div className="flex items-center justify-center h-screen gap-6">
      {textAnimations.map((item) => (
        <Button
          key={item.id}
          onClick={() => {
            router.push(item.href)
          }}
        >
          {item.title}
        </Button>
      ))}
    </div>
  )
}

export default textAnimationsPage
