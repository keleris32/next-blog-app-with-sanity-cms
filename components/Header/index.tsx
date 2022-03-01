import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-2 py-5 sm:p-5">
      <div className="flex items-center space-x-10">
        <Link href="/">
          <img
            className="w-36 cursor-pointer object-contain sm:w-44"
            src="/radium-logo.svg"
            alt="Site logo"
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3 className="cursor-pointer">About</h3>
          <h3 className="cursor-pointer">Contact</h3>
          <h3 className="cursor-pointer rounded-full bg-violet-900 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-3 text-xs text-violet-900 sm:space-x-5 sm:text-base">
        <h3 className="cursor-pointer">Sign In</h3>
        <h3 className="cursor-pointer rounded-full border border-solid border-violet-900 px-2 py-1 sm:px-4">
          Get started
        </h3>
      </div>
    </header>
  )
}

export default Header
