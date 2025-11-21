function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Moki.Chat — Choice without compromise.</p>
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <a href="#" className="hover:text-pink-300">Privacy</a>
          <a href="#" className="hover:text-pink-300">Terms</a>
          <a href="#newsletter" className="hover:text-pink-300">Newsletter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
