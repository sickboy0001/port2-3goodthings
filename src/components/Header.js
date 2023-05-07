import Link from "next/link"

const NAV_ITEMS = [
  {href:"/",label:"Index"},
  {href:"/about",label:"About"},
  {href:"/3goodthings",label:"3GoodThings"}
]

export function Header() {
  return (
    <header >
        <div className=" w-full max-w-7xl">
            <div x-data="{ open: false }" 
                className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between lg:justify-start">
                    <a href="./" className="text-lg font-bold tracking-tighter text-teal-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"> 
                        working space
                    </a>
                </div>

                <nav  className="flex-col items-center flex-grow hidden pb-4 border-teal-600 md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2">
                    {NAV_ITEMS.map((item)=>{
                        return (
                        <Link key={item.href} href={item.href} legacyBehavior>
                            <a  
                            className="px-4 py-2 mt-2 text-sm font-bold text-gray-500 md:mt-0 hover:text-teal-600 focus:outline-none focus:shadow-outline"
                            >{item.label}</a>
                        </Link>
                        )
                    })}
                </nav>
            </div>
        </div>
    </header>
  )

}

export  default Header;

