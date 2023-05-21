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
    <nav>
      {/* logo */}
      <Link href="/">
        <h3>Tasky</h3>
      </Link>

      {/* desktop navigation */}
      <div>
        {session?.user ? (
          <div>
            <Link href="/create-task">Create Task</Link>
            <button type="button" onClick={signOut}>
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                alt="profile picture"
                height={32}
                width={32}
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
                >
                  Sign In
                </button>
              ))}
          </div>
        )}
      </div>

      {/* mobile navigation */}
    </nav>
  )
}
export default Nav
