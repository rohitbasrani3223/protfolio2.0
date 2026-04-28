import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#121212]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          Rohit<span className="text-gray-500 font-normal">Bassrani</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400 tracking-wide">
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
          <Link href="#work" className="hover:text-white transition-colors">Work</Link>
          <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
