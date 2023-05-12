import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="flex items-center justify-center w-full text-lg font-semibold text-white border">
      <div className="fixed w-11/12 py-6 px-8 bg-primary flex items-center justify-between rounded-md top-8">
        <div className="w-3/12">
          <Link href="/">HOS, NIGER STATE</Link>
        </div>
        <div className="flex items-center justify-center w-5/12 gap-x-7">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/media">Media</Link>
          <Link href="/mda">MDA</Link>
        </div>
        <div className="w-3/12 text-right">
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
