import Link from 'next/link'
import React from 'react'
function Header() {
  return (
    <>
    <header className='p-5 border-b flex gap-4'>
        <Link href="/">About</Link>
        <Link href="/About">Home</Link>
        <Link href="/Contact">Contact</Link>
    </header>
    </>
  )
}

export default Header