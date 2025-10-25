

export default function Footer() {
  return (
    <footer className="relative w-full mt-20">
      {/* glass background */}
      <div className="backdrop-blur-xl bg-white/5 border-t border-white/10 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-6 text-white/80 text-sm select-none">
          {/* Left: Brand name */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nameless3143
            </span>
            <span className="text-white/50">© {new Date().getFullYear()}</span>
          </div>

    

          {/* Right: Tagline */}
          <p className="mt-4 md:mt-0 text-white/50 text-center md:text-right">
            Crafted with 💻 & ❤️ by Nameless3143
          </p>
        </div>
      </div>
    </footer>
  );
}
