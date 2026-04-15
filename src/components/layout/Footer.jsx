import React from "react";
import { NAV_LINKS } from "../../data/siteData";
import Logo from "../ui/Logo";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="bg-brand-dark py-8">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <Logo className="brightness-0 invert" />
          <nav>
            <ul className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white text-sm uppercase tracking-[0.15em] hover:text-brand-red transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-10">
          <a href="#">
            <img src="/images/icon-facebook.svg" alt="Facebook" className="hover:filter-red" />
          </a>
          <a href="#">
            <img src="/images/icon-twitter.svg" alt="Twitter" className="hover:filter-red" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
