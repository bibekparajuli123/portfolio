export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-white/5 mt-10">
      <p className="text-slate-500 text-sm mb-2">
        Designed & Built by <span className="text-slate-300 font-medium">Bibek Parajuli</span>
      </p>
      <p className="text-slate-600 text-xs">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  )
}