"use client"
import { useEffect, useState } from "react"
import AOS from "aos"
import ScreenLoader from "@/app/_components/ScreenLoader"

export default function Template({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
    })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div>
      <ScreenLoader showLoader={showLoader} />
      {children}
    </div>
  )
}
