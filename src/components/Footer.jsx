export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-7">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center justify-between gap-2 text-[13px] text-text-dim sm:flex-row">
        <span>© {new Date().getFullYear()} Hassan Arslan</span>
        <a href="https://hassanarslan.dev" className="font-semibold text-accent">
          hassanarslan.dev
        </a>
      </div>
    </footer>
  );
}
