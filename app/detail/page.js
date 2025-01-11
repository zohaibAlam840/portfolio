"use client"
import appImage from "../assets/app.jpg"
// import { useSearchParams } from "next/navigation"
// import Image from "next/image"

export default function deatil(){
    const searchParams = useSearchParams()
    const title = searchParams.get("title")
    const image = searchParams.get("image")
    return(
        <div>
            {/* <h1 className="text-2xl pl-40 m-5">{title}</h1>
        <div className="flex flex-col justify-center items-center w-screen h-auto">
            
            <Image src = {appImage} alt ="image" className="rounded-2xl" />
        </div> */}
        <h1>working on details</h1>
        </div>
    )
}