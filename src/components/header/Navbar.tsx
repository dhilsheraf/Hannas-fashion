import { useState, useEffect } from "react";
import img from '../../assets/110351277_1207661609609045_2514504535730563192_n.jpg'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Left and right navigation items
  const leftNavItems = ["Home", "About"];
  const rightNavItems = ["Blog", "Contact"];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Centered navbar layout */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-2 bg-white shadow-md" 
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Desktop navigation with centered logo */}
          <div className="hidden md:flex items-center justify-between">
            {/* Left navigation items */}
            <div className="flex-1 flex justify-end">
              <div className="flex space-x-1">
                {leftNavItems.map((item) => (
                  <button 
                    key={item} 
                    className="relative px-5 py-2 group overflow-hidden"
                  >
                    <span className="relative z-10 text-neutral-800 font-medium tracking-wider text-base">
                      {item}
                    </span>
                    
                    {/* Unique underline animation */}
                    <span className="absolute bottom-2 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    
                    {/* Border that appears on hover */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-full border-b border-neutral-800 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
                    
                    {/* Background animation */}
                    <span className="absolute inset-0 w-full h-0 bg-neutral-100 transition-all duration-300 ease-out group-hover:h-full opacity-0 group-hover:opacity-10"></span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Centered logo */}
            <div className="flex-shrink-0 flex items-center justify-center px-8">
              <div className="relative">
                {/* Logo circle background */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-700 flex items-center justify-center">
                  {/* Logo image */}
                  <img src={img} alt="Logo" className="rounded-3xl" />
                </div>
                
                {/* Decorative style elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-amber-400 rounded-full"></div>
              </div>
              
              {/* Brand name with stylish typography */}
              <div className="ml-3">
                <h1 className="font-serif italic text-xl tracking-wider text-neutral-800">HANNAS</h1>
                <p className="text-xs tracking-widest uppercase -mt-1 text-neutral-500">FASHION HOUSE</p>
              </div>
            </div>
            
            {/* Right navigation items */}
            <div className="flex-1">
              <div className="flex space-x-1">
                {rightNavItems.map((item) => (
                  <button 
                    key={item} 
                    className="relative px-5 py-2 group overflow-hidden"
                  >
                    <span className="relative z-10 text-neutral-800 font-medium tracking-wider text-base">
                      {item}
                    </span>
                    
                    {/* Unique underline animation */}
                    <span className="absolute bottom-2 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    
                    {/* Border that appears on hover */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-full border-b border-neutral-800 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
                    
                    {/* Background animation */}
                    <span className="absolute inset-0 w-full h-0 bg-neutral-100 transition-all duration-300 ease-out group-hover:h-full opacity-0 group-hover:opacity-10"></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile view with logo and hamburger */}
          <div className="md:hidden flex justify-between items-center">
            {/* Logo area with fashion-forward styling */}
            <div className="flex items-center">
              <div className="relative">
                {/* Logo circle background */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-700 flex items-center justify-center">
                  {/* Placeholder for logo */}
                  <img src={img} alt="Logo" className="rounded-3xl" />
                </div>
                
                {/* Decorative style elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-amber-400 rounded-full"></div>
              </div>
              
              {/* Brand name with stylish typography */}
              <div className="ml-3">
                <h1 className="font-serif italic text-xl tracking-wider text-neutral-800">HANNAS</h1>
                <p className="text-xs tracking-widest uppercase -mt-1 text-neutral-500">FASHION HOUSE</p>
              </div>
            </div>
            
            {/* Mobile menu button - stylish hamburger */}
            <div>
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
        </div>
        
        {/* Mobile menu - fashion catalog inspired */}
        <div 
          className={`absolute top-full left-0 w-full bg-white shadow-lg transform transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {[...leftNavItems, ...rightNavItems].map((item, i) => (
              <div key={item} className="overflow-hidden">
                <button 
                  className={`w-full text-left py-2 border-b border-neutral-100 text-neutral-800 font-light tracking-wider flex justify-between items-center
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
      </nav>
      
    </div>
  );
}