import Link from 'next/link'
import React from 'react'
function Header() {
  return (
    <>
    <header>
        <Link href="/">About</Link>
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
    </header>
    </>
  )
}

export default Header