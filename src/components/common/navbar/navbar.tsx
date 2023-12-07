import { CloseSvg, MenuSvg } from '@/assets/svg/icon';
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
            {isMenuOpen ? <CloseSvg className="w-8 h-8" /> : <MenuSvg />}
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
