'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)

  const { data: session } = useSession()

  useEffect(() => {
    ;(async () => {
      const res = await getProviders()
      setProviders(res)
    })()
  }, [])

  return (
    <nav className="flex justify-between w-full mb-16 pt-3">
      {/* logo */}
      <Link href="/">
        <h3 className="text-2xl font-bold">Tasky</h3>
      </Link>

      {/* desktop navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-task" className="black_btn">
              Create Task
            </Link>
            <button
              type="button"
              onClick={() => {
                signOut
              }}
              className="outline_btn"
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                alt="profile picture"
                height={32}
                width={32}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <div>
            {providers &&
              Object.values(providers).map(provider => (
                <button
                  key={provider.name}
                  type="button"
                  onClick={() => {
                    signIn(provider.id)
                  }}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </div>
        )}
      </div>

      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Link href="/profile">
              <Image
                src={session?.user.image}
                alt="profile picture"
                height={32}
                width={32}
                className="rounded-full"
                onClick={() => setToggleDropdown(!toggleDropdown)}
              />
            </Link>

            {/* dropdown */}
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-task"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Task
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false)
                    signOut()
                  }}
                  className="mt-5 black_btn w-full"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            {providers &&
              Object.values(providers).map(provider => (
                <button
                  key={provider.name}
                  type="button"
                  onClick={() => {
                    signIn(provider.id)
                  }}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </div>
        )}
      </div>
    </nav>
  )
}
export default Nav
