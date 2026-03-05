'use client';

import socials from '@/data/socials';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';
import {
  PiCaretRightLight,
  PiEnvelopeSimpleOpen,
  PiMapPinLine,
} from 'react-icons/pi';
import AppLogo from '../header/AppLogo';

const QUICK_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Partners', href: '/partners' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About Us', href: '/about-us' },
];

const DECORATIVE_LABELS = [
  { text: 'Automation', position: 'top-8 left-8', arrow: 'up-right' },
  { text: 'Cost Effective', position: 'bottom-8 left-8', arrow: 'up-right' },
  { text: 'Security', position: 'top-8 right-8', arrow: 'up-left' },
  { text: 'Self-Service', position: 'bottom-8 right-8', arrow: 'up-left' },
] as const;

type TProps = {
  classes?: string;
};

const Footer: FC<TProps> = (props) => {
  const { classes } = props;

  const renderQuickLinks = () => {
    return QUICK_LINKS.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className="font-sans hover:text-primary transition-colors flex items-center gap-1 font-light"
        >
          <PiCaretRightLight size={16} />
          {link.label}
        </Link>
      </li>
    ));
  };

  const renderSocials = () => {
    return socials.map((social) => (
      <a
        key={social.name}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-11 h-11 rounded-full border flex items-center justify-center text-primary border-primary transition-colors hover:bg-primary hover:text-white"
        aria-label={social.name}
      >
        {social.icon(23)}
      </a>
    ));
  };

  return (
    <footer
      className={cn(
        'w-full bg-cover bg-center bg-no-repeat bg-[url("/footer-bg.png")]',
        classes
      )}
    >
      <div className="relative container py-28">
        {/* {DECORATIVE_LABELS.map((item) => (
          <div
            key={item.text}
            className={cn(
              'absolute hidden lg:flex items-center gap-1.5',
              item.position
            )}
          >
            {item.arrow === 'up-right' ? (
              <ArrowUpRight className="w-4 h-4 text-primary-500 shrink-0" />
            ) : (
              <ArrowUpLeft className="w-4 h-4 text-primary-500 shrink-0" />
            )}
            <span className="bg-primary-500 text-white text-xs font-medium px-2.5 py-1 rounded">
              {item.text}
            </span>
          </div>
        ))} */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 relative z-10 prose">
          <div className="flex flex-col gap-6">
            <AppLogo size="small" />
            <p className="text-xl font-sans max-w-md font-light">
              Low-Ops is an Internal Developer Platform (IDP) designed to
              streamline the deployment and management of applications for
              private clouds and on-premises environments.
            </p>
            <div className="flex gap-3">{renderSocials()}</div>
          </div>

          <div className="flex flex-col gap-4 justify-self-center">
            <h4>Quick Link</h4>
            <ul className="flex flex-col gap-2">{renderQuickLinks()}</ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4>Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 font-sans">
                <span className="w-10 h-10 rounded-full bg-primary/5 border border-primary/50 flex items-center justify-center text-primary shrink-0">
                  <PiEnvelopeSimpleOpen size={22} />
                </span>
                <span>low-ops@cinaq.com</span>
              </div>
              <div className="flex items-center gap-3 font-sans">
                <span className="w-10 h-10 rounded-full bg-primary/5 border border-primary/50 flex items-center justify-center text-primary shrink-0">
                  <PiMapPinLine size={22} />
                </span>
                <span>
                  Bajonetstraat 50, 3014 ZK, Rotterdam, The Netherlands
                  (Appointment only)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 border-t border-primary/25">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-sans">
            Copyright ©2026 LowOps All Rights Reserved.
          </span>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-sans">
            <Link
              href="/contact-us"
              className="hover:text-primary transition-colors"
            >
              Help & Support
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy policy
            </Link>
            <Link
              href="/license-agreement"
              className="hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
