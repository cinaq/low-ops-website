'use client';

import { DECORATIVE_LABELS, QUICK_LINKS } from '@/data/footer';
import socials from '@/data/socials';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';
import {
  PiCaretRightLight,
  PiEnvelopeSimpleOpen,
  PiMapPinLine,
} from 'react-icons/pi';
import DecorativeLabel from '../DecorativeLabel';
import AppLogo from '../header/AppLogo';

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
          className="font-sans hover:text-primary transition-colors flex items-center gap-1 font-light no-underline"
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
      id="footer"
      className={cn(
        'w-full bg-cover bg-center bg-no-repeat bg-[url("/footer-bg.png")]',
        classes
      )}
    >
      <div className="relative container py-14 lg:py-28">
        {DECORATIVE_LABELS.map((item) => (
          <DecorativeLabel
            text={item.text}
            planePosition={item.planePosition}
            classes={item.classes}
            key={item.text}
          />
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10 w-full">
          <div className="flex flex-col gap-4 lg:gap-6 prose md:prose-md">
            <AppLogo size="small" />
            <p className="text-md lg:text-xl font-sans max-w-md font-light">
              Low-Ops is an Internal Developer Platform (IDP) designed to
              streamline the deployment and management of applications for
              private clouds and on-premises environments.
            </p>
            <div className="flex gap-3">{renderSocials()}</div>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 justify-self-start md:justify-self-center prose md:prose-md">
            <h4>Quick Link</h4>
            <ul className="flex flex-col gap-1 md:gap-2 p-0">
              {renderQuickLinks()}
            </ul>
          </div>

          <div className="flex flex-col gap-4 prose md:prose-md">
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
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-4">
          <span className="font-sans">
            Copyright ©2026 LowOps All Rights Reserved. A product of <a href="https://cinaq.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">CINAQ</a>
          </span>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-sans">
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
