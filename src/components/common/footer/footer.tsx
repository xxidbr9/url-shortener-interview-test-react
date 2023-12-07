import {
  IconFacebookSvg,
  IconInstagramSvg,
  IconPinterstSvg,
  IconTwitterSvg,
} from '@/assets/svg/icon';

const socialLinks = [IconInstagramSvg, IconPinterstSvg, IconTwitterSvg, IconFacebookSvg];
const SocialLink = () => (
  <div className="flex gap-x-[31px] lg:gap-x-6">
    {socialLinks.map((Comp, idx) => (
      <Comp key={`social-${idx}`} className="lg:h-6 lg:w-6" />
    ))}
  </div>
);

type FooterLinksProps = {
  title: string;
  links: { href: string; title: string }[];
};
const FooterLinks = ({ links, title }: FooterLinksProps) => (
  <div className="flex flex-col items-center lg:items-start gap-y-4">
    <span className="font-semibold text-gray-100 text-center lg:text-left">{title}</span>
    <ul className="flex flex-col items-center lg:items-start gap-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} className="text-sm text-gray-400 text-center lg:text-left">
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const featureLinks: FooterLinksProps = {
  title: 'Feautres',
  links: [
    {
      href: '#link-shortening',
      title: 'Link Shortening',
    },
    {
      title: 'Branded Links',
      href: '#branded-links',
    },
    {
      title: 'Analytics',
      href: '#analytics',
    },
  ],
};

const resourceLinks: FooterLinksProps = {
  title: 'Resources',
  links: [
    {
      href: '#blog',
      title: 'Blog',
    },
    {
      href: '#developer',
      title: 'Developer',
    },
    {
      href: '#support',
      title: 'Support',
    },
  ],
};

const companyLinks: FooterLinksProps = {
  title: 'Company',
  links: [
    {
      href: '#about',
      title: 'About',
    },
    {
      href: '#our-team',
      title: 'Our Team',
    },
    {
      href: '#careers',
      title: 'Careers',
    },
    {
      href: '#contacts',
      title: 'Contacts',
    },
  ],
};

const footerLinks: FooterLinksProps[] = [featureLinks, resourceLinks, companyLinks];

export const Footer = () => (
  <footer className="bg-[#262626] pt-10 py-12 lg:pt-12 lg:pb-9">
    <div className="container mx-auto flex lg:justify-between flex-col lg:flex-row lg:items-start items-center">
      <span className="text-[28px] font-semibold leading-normal text-gray-100">Shortly</span>
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-[82px] mt-9 mb-12 lg:my-0">
        {footerLinks.map((link) => (
          <FooterLinks key={link.title} {...link} />
        ))}
      </div>
      <SocialLink />
    </div>
  </footer>
);
