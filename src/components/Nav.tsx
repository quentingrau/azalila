import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/logo_azalila.png'

const Nav = () => {
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)

  const links = [
    { text: 'Accueil', to: '/' },
    { text: 'Nos réalisations', to: '/realisations' },
    { text: 'Nos formules', to: '/formules' },
  ]

  const activeClass = 'text-white bg-gray-900'
  const inactiveClass = 'text-[15150A] hover:text-white hover:bg-gray-700'

  return (
    <nav className="bg-[#f0ede5] font-serif">
      <div className="mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex items-center justify-between h-32">
          <div className="flex items-center text-[#15150A] h-full">
            <div className="flex h-full items-center gap-4 pr-4">
              <img src={Logo} className="h-[50%] md:h-[60%] lg:h-[70%]"/>
              <span className="text-4xl lg:text-5xl font-serif">AZALILA</span>
              <span className="hidden md:block border-l border-black h-12 ml-5" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link, i) => (
                  <Link
                    key={link.text}
                    to={link.to}
                    className={`px-3 py-2 rounded-md text-sm lg:text-xl font-medium no-underline text-[#15150A] ${
                      location.pathname === link.to
                        ? activeClass
                        : inactiveClass
                    } ${i > 0 && 'ml-4'}`}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className="hidden h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Menu open: "block", Menu closed: "hidden" */}
      <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {links.map((link, i) => (
            <Link
              key={link.text}
              to={link.to}
              className={`block px-3 py-2 rounded-md text-sm font-medium no-underline text-[#15150A] ${
                location.pathname === link.to ? activeClass : inactiveClass
              } ${i > 0 && 'mt-1'}`}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav
