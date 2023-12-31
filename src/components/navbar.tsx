"use client";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
export const Navbar = () => {

  const router = useRouter()
  return(
    <div className=" w-full bg-gray-50">
      <nav className={'container mx-auto py-5 flex flex-row justify-between items-center'}>
        <Link href={"/dashboard"}>
          <div
            className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-gray-800 font-semibold">
            <span>AI JSON Generator</span>
          </div>
        </Link>
        <div className={'hidden lg:flex flex-row gap-5'}>
          <Button variant={'link'} className={'text-gray-800 hover:text-gray-900'} onClick={()=>{}}>Home</Button>
          <Button variant={'link'} className={'text-gray-800 hover:text-gray-900'} onClick={()=>{}}>API</Button>
          <Button variant={'link'} className={'text-gray-800 hover:text-gray-900'} onClick={()=>{}}>Pricing</Button>
          <Button variant={'link'} className={'text-gray-800 hover:text-gray-900'} onClick={()=>{}}>Docs</Button>
        </div>
      </nav>
    </div>
  )
}