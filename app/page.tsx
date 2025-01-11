'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation";
export default function Home() {
  const rout = useRouter();
  useEffect(()=>{
    rout.push('/home')
  },[rout])
  return null
}
