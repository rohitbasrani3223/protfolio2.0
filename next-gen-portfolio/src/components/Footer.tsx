export default function Footer() {
  return (
    <footer className="py-12 text-center text-gray-500 bg-[#0a0a0a] border-t border-white/5 relative z-20">
      <p className="font-medium tracking-wide">&copy; {new Date().getFullYear()} Rohit Bassrani. All rights reserved.</p>
      <p className="text-sm mt-2 opacity-50">Built with modern web technologies</p>
    </footer>
  );
}
