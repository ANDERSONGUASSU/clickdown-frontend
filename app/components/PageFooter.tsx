export function PageFooter() {
  return (
    <div className="bottom-0 left-0 z-10 w-full p-6 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500/50 dark:text-gray-400/50 lg:px-6">
      Clikdown © {new Date().getFullYear()}
    </div>
  );
}
