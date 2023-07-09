import Link from "next/link";

export const Navbar = () => {

  return(
    <div className=" w-full bg-gray-100">
      <nav className={'container mx-auto p-2 flex flex-row justify-between'}>
        <Link href={"/dashboard"}>
          <div
            className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-gray-800 font-semibold">
            <span>AI JSON</span>
          </div>
        </Link>
        <div>
          
        </div>
      </nav>
    </div>
  )
}