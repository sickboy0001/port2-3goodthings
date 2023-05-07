import Link from "next/link"
// import styles from '/src/styles/Header.module.css';

const NAV_ITEMS = [
  {href:"/",label:"Index"},
  {href:"/about",label:"About"},
  {href:"/3goodthings",label:"3goodthings"},
]

export function Header() {
  return (
    <header >
        <div class=" w-full max-w-7xl">
            <div x-data="{ open: false }" class="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div class="flex flex-row items-center justify-between lg:justify-start">
                    <a href="./" class="text-lg font-bold tracking-tighter 
                        text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"> wokingspace </a>
                    <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" >
                    </button>
                </div>
                <nav  class="flex-col items-center flex-grow hidden pb-4 border-blue-600 md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2">
                    {NAV_ITEMS.map(item=>{

                        return (
                          <Link key={item.href} href={item.href} legacyBehavior>
                          <a  className="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">{item.label}</a>
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

