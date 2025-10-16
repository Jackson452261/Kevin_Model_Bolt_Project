import { Camera, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Enhanced smooth scroll function
  const smoothScrollTo = (targetId: string, event: React.MouseEvent) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId.replace('#', ''));
    
    if (targetElement) {
      const navbarHeight = 80; // Height of fixed navbar
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Add visual feedback
      targetElement.style.transform = 'scale(1.02)';
      targetElement.style.transition = 'transform 0.3s ease-out';
      
      setTimeout(() => {
        targetElement.style.transform = 'scale(1)';
      }, 300);
    }
  };

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'model', 'travel', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首頁', href: '#home' },
    { name: '人像拍攝', href: '#model' },
    { name: '風景拍攝', href: '#travel' },
    { name: '關於我', href: '#about' },
    { name: '聯絡我', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a 
            href="#home" 
            onClick={(e) => smoothScrollTo('#home', e)}
            className="flex items-center gap-3 group"
          >
            <Camera className="w-8 h-8 text-gray-900 group-hover:text-gray-700 transition-colors" />
            <span className="text-2xl font-light tracking-wide text-gray-900">
              Kevin<span className="font-normal">攝影</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => smoothScrollTo(link.href, e)}
                className={`text-gray-700 hover:text-gray-900 font-light transition-all duration-300 relative group ${
                  activeSection === link.href.replace('#', '') ? 'text-gray-900' : ''
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                  activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  smoothScrollTo(link.href, e);
                  setIsOpen(false);
                }}
                className={`block py-2 text-gray-700 hover:text-gray-900 transition-colors ${
                  activeSection === link.href.replace('#', '') ? 'text-gray-900 font-medium' : ''
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
