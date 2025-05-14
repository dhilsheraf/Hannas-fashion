import { useState, useEffect } from "react";
import img from '../../assets/110351277_1207661609609045_2514504535730563192_n.jpg'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [isMobileMenuOpen]);


  const navItems = ["Home", "About", "Contact"];

  return (
    <div className=" bg-black">
      <header className="fixed w-full z-50 flex justify-center py-6">
        {/* Pill-shaped container for navbar */}
        <div className={`rounded-full transition-all duration-300 px-4 py-2 flex items-center 
            ${isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm"}`}
        >
          {/* Left side - Logo */}
          <div className="flex items-center mr-8">
            <div className="relative">
              {/* Logo circle */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-700 flex items-center justify-center">
                <img src={img} alt="Logo" className="rounded-3xl " />
              </div>
            </div>
            
            {/* Brand name */}
            <div className="ml-2">
              <h1 className="font-serif italic text-lg tracking-wider text-neutral-800">HANNAS</h1>
            </div>
          </div>
          
          {/* Center - Navigation Items */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item} 
                className="text-neutral-700 hover:text-neutral-900 transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-7 h-7 focus:outline-none"
            >
              <div className={`absolute left-0 w-7 h-0.5 bg-neutral-800 transform transition-all duration-300 
                ${isMobileMenuOpen ? "top-3 rotate-45" : "top-2"}`}></div>
              <div className={`absolute left-0 w-7 h-0.5 bg-neutral-800 transform transition-all duration-300 opacity-100 
                ${isMobileMenuOpen ? "opacity-0" : "top-3.5"}`}></div>
              <div className={`absolute left-0 w-5 h-0.5 bg-neutral-800 transform transition-all duration-300 
                ${isMobileMenuOpen ? "top-3 -rotate-45 w-7" : "top-5"}`}></div>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile menu dropdown */}
      <div 
        className={`fixed top-20 left-0 w-full bg-white shadow-lg transform transition-all duration-500 ease-in-out overflow-hidden z-40 ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          {navItems.map((item, i) => (
            <div key={item} className="overflow-hidden">
              <button 
                className={`w-full text-left py-2 border-b border-neutral-100 text-neutral-800 font-light flex justify-between items-center
                  transform transition-transform duration-500 delay-${i * 100} 
                  ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-8 opacity-0"}`}
              >
                <span>{item}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        
        </div>
      </div>
      
      {/* Page content area for demonstration */}
    </div>
  );
}