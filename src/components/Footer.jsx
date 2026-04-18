export default function Footer() {
  return (
    <footer className="pb-24 pt-10">
      <div className="wrap-sm text-center">
        <p className="text-xs" style={{ color: 'var(--text-3)' }}>
          © {new Date().getFullYear()} Pratik Tawhare · Built with React & Tailwind
        </p>
      </div>
    </footer>
  )
}
