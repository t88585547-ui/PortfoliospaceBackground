// --- src/components/ProjectsCard.jsx ---
export default function ProjectsCard({ title, desc, img, link }) {
  return (
    <div className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:bg-white/10 transition-all duration-500">
      {/* --- Image Section --- */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>

      {/* --- Content Section --- */}
      <div className="p-6 flex flex-col justify-between h-48">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white/95 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 text-black font-medium text-sm hover:opacity-90 transition-all duration-300 text-center"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
