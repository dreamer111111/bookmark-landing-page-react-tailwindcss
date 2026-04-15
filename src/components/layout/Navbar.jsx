import { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Logo from '../ui/Logo'

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <header className="relative py-8 md:py-12 z-50">
        <Container className="flex items-center justify-between">
            <Logo />
            <nav className='hidden md:flex items-center gap-10'>
               {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-sm uppercase tracking-widest text-brand-dark hover:text-brand-red transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <Button variant="danger" className="px-8 py-2 uppercase text-sm shadow-none ">
            Login
          </Button>
            </nav>
                <button onClick={toggleMenu} className="md:hidden z-50">
                    <img 
            src={isOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"} 
            alt="Menu" 
          />
                </button>
         
         {isOpen && (
          <div className="fixed inset-0 bg-brand-dark/95 z-40 md:hidden flex flex-col p-8 pt-32">
            <ul className="flex flex-col items-center border-t border-white/20">
              {NAV_LINKS.map((link) => (
                <li key={link.label} className="w-full border-b border-white/20 text-center">
                  <a 
                    href={link.href} 
                    className="block py-5 text-xl uppercase tracking-[0.2em] text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="primary" className="mt-8 bg-transparent border-2 border-white text-white uppercase tracking-widest">
              Login
            </Button>
            <div className='flex items-center justify-center gap-8 mt-30'>
              <a href="#"><img src="images/icon-facebook.svg" alt="Facebook" /></a>
              <a href="#"><img src="images/icon-twitter.svg" alt="Twitter" /></a>
            </div>
          </div>
        )}
        </Container>
    </header>
  )
}

export default Navbar