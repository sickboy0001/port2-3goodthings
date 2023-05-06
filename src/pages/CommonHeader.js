import Link from "next/link"
import styles from '/src/styles/Header.module.css';

const NAV_ITEMS = [
  {href:"/",label:"Index"},
  {href:"/about",label:"About"}
]

export function CommonHeader() {
  return (
    // <header className={styles.header}>
    <header >
      {NAV_ITEMS.map(item=>{

        return (
        <Link key={item.href} href={item.href} legacyBehavior>
          <a  className={styles.anchor}>{item.label}</a>
        </Link>
        )

      })}
    </header>
  )
}

export  default CommonHeader;

