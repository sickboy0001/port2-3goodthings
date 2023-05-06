import Link from "next/link"
import styles from '/src/styles/Header.module.css';

const NAV_ITEMS = [
  {href:"/",label:"Index"},
  {href:"/about",label:"About"}
]

const Header=()=> {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map(item=>{

        return (
            // <div></div>
        <Link key={item.href} href={item.href} legacyBehavior>
          <a  className={styles.anchor}>{item.label}</a>
        </Link>)

      })}
    </header>
  )
}

export  default Header;

