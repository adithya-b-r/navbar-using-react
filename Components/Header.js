"use client"
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex align-middle bg-black py-4 px-4 text-white font-bold text-2xl gap-4 justify-between mb-3'>
      <h3>Logo</h3>
      <div className='flex gap-4'>
        <Link href="/About">About</Link>
        <Link href="/Product">Product</Link>
        <Link href="/Courses">Courses</Link>
      </div>
    </div>
  )
}

export default Header