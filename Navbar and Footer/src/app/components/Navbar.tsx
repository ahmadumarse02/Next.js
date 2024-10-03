'use client';
import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <>
    <header>
        <nav>
          <ul>
          <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
          </ul>
        </nav>
      </header>
      </>
  )
}

export default Navbar