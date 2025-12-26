'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'DEALS', href: '/deals' },
  { name: 'SHOP', href: '/shop' },
  { 
    name: 'PRODUCTS', 
    href: '/products',
    dropdown: [
      { name: 'All Products', href: '/products' },
      { name: 'Cigars', href: '/products/cigars' },
      { name: 'Hookah', href: '/products/hookah' },
      { name: 'Vaporizers & E-Juice', href: '/products/vapes' },
      { name: 'Kratom', href: '/products/kratom' },
      { name: 'Accessories', href: '/products/accessories' },
      { name: 'Hemp & CBD', href: '/products/hemp-cbd' },
    ]
  },
  { name: 'ABOUT US', href: '/about' },
  { name: 'CONTACT US', href: '/contact' },
  { name: 'LOCATION', href: '/location', special: true },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <div className="relative w-16 h-16">
              <Image
                src="/images/cigar-and-smoke-shop-logo.png"
                alt="Cigar and Smoke Shop Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wider">CIGAR AND SMOKE SHOP</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6" aria-hidden="true" />
            ) : (
              <FaBars className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            item.dropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium tracking-wide transition-colors text-gray-900 hover:text-gray-600 flex items-center gap-1"
                >
                  {item.name}
                  <FaChevronDown className="h-3 w-3" />
                </Link>
                {productsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  item.special
                    ? 'bg-black text-white px-6 py-2 hover:bg-gray-800'
                    : 'text-gray-900 hover:text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              item.dropdown ? (
                <div key={item.name}>
                  <div
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  >
                    {item.name}
                    <FaChevronDown className={`h-3 w-3 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {productsDropdownOpen && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    item.special
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

