import { Button } from '@/components/ui';
import { cn } from '@/utils/cn';
import React, { useState } from 'react';

const LinkText = ({
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a {...props} className={cn(className)}>
    {children}
  </a>
);

const links: { href: string; text: string }[] = [
  {
    href: '#features',
    text: 'Features',
  },
  {
    href: '#pricing',
    text: 'Pricing',
  },
  {
    href: '#resources',
    text: 'Resources',
  },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="lg:py-10 py-7 w-full fixed bg-white z-[99]">
        <div className="mx-auto flex justify-between container items-center px-4 lg:px-0">
          <div className="w-[561px] flex justify-between items-center">
            <span className="text-[2rem] font-semibold leading-normal">Shortly</span>
            <ul className="lg:flex gap-x-9 items-center hidden">
              {links.map((link, idx) => (
                <li key={idx}>
                  <LinkText
                    href={link.href}
                    className="text-gray-500 transition-all duration-100 ease-out hover:text-gray-900 text-xl font-medium"
                  >
                    {link.text}
                  </LinkText>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:flex items-center justify-between w-[233px] hidden">
            <LinkText
              href="#login"
              className="text-gray-500 transition-all duration-100 ease-out hover:text-gray-900 text-xl font-medium"
            >
              Login
            </LinkText>
            <Button>Sign Up</Button>
          </div>

          {/* menu button */}
          <button
            type="button"
            aria-label="menu"
            onClick={handleMenu}
            className="w-8 h-8 lg:hidden flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M30.4 17.6H1.6C1.17565 17.6 0.768688 17.4313 0.468629 17.1313C0.168571 16.8313 0 16.4243 0 16C0 15.5756 0.168571 15.1686 0.468629 14.8686C0.768688 14.5685 1.17565 14.4 1.6 14.4H30.4C30.8243 14.4 31.2314 14.5685 31.5314 14.8686C31.8314 15.1686 32 15.5756 32 16C32 16.4243 31.8314 16.8313 31.5314 17.1313C31.2314 17.4313 30.8243 17.6 30.4 17.6ZM30.4 6.39995H1.6C1.17565 6.39995 0.768688 6.23138 0.468629 5.93133C0.168571 5.63126 0 5.2243 0 4.79995C0 4.3756 0.168571 3.96864 0.468629 3.66858C0.768688 3.36853 1.17565 3.19995 1.6 3.19995H30.4C30.8243 3.19995 31.2314 3.36853 31.5314 3.66858C31.8314 3.96864 32 4.3756 32 4.79995C32 5.2243 31.8314 5.63126 31.5314 5.93133C31.2314 6.23138 30.8243 6.39995 30.4 6.39995ZM30.4 28.8H1.6C1.17565 28.8 0.768688 28.6313 0.468629 28.3313C0.168571 28.0313 0 27.6243 0 27.2C0 26.7756 0.168571 26.3686 0.468629 26.0686C0.768688 25.7686 1.17565 25.6 1.6 25.6H30.4C30.8243 25.6 31.2314 25.7686 31.5314 26.0686C31.8314 26.3686 32 26.7756 32 27.2C32 27.6243 31.8314 28.0313 31.5314 28.3313C31.2314 28.6313 30.8243 28.8 30.4 28.8Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        {/* menu */}
        <div
          className={cn(
            'lg:hidden absolute w-full mt-[11px] px-4 z-[99999]',
            isMenuOpen ? 'flex' : 'hidden',
          )}
        >
          <div className="bg-cool-gray-800 w-full rounded-[9px] text-white py-[42px]">
            <ul className="flex flex-col gap-x-9 items-center gap-y-[29px]">
              {links.map((link, idx) => (
                <li key={idx}>
                  <LinkText href={link.href} className="text-white text-[19px] leading-none">
                    {link.text}
                  </LinkText>
                </li>
              ))}
            </ul>
            <hr className="border-[#4B5563] mt-9 mb-8 border-t-2" />
            <div className="flex flex-col gap-y-8 items-center">
              <LinkText href="#login" className="text-white text-[19px] leading-none">
                Login
              </LinkText>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </nav>
      {/* placeholder */}
      <div className="h-[104px] lg:h-[142px]" />
    </>
  );
};
