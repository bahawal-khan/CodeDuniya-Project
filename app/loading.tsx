export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex items-center gap-2 text-sm font-semibold text-ink/50 dark:text-cream/50">
        <span className="h-2 w-2 animate-swirl-spin rounded-full border-2 border-rani border-t-transparent" />
        Load ho raha hai...
      </div>
    </div>
  );
}
