export default function Footer() {
  return (
    <footer className="pb-20 sm:pb-24 pt-8 sm:pt-10">
      <div className="wrap-sm text-center">
        <p className="text-[11px] sm:text-xs" style={{ color: 'var(--text-3)' }}>
          © {new Date().getFullYear()} Pratik Tawhare · Built with React & Tailwind
        </p>
      </div>
    </footer>
  )
}
