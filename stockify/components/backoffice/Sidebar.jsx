"use client"
import React from 'react'
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className='dark:bg-slate-700 bg-white space-y-6 w-60 h-screen text-slate-800 dark:text-slate-50 p-3 fixed left-0 top-0 shadow-md'>
        <Link className='mb-6' href="#"> Logo</Link>
        <div className='space-y-3 flex flex-col' >
           <Link href="#"> Dashboard</Link>
           <Link href="#"> Catalogue</Link>
           <Link href="#"> Customers</Link>
           <Link href="#"> Markets</Link>
           <Link href="#"> Farmers</Link>
           <Link href="#"> Orders</Link>
           <Link href="#"> Staff</Link>
           <Link href="#"> Setting</Link>
           <Link href="#"> Online Store</Link>

        </div>

    </div>
  )
}
