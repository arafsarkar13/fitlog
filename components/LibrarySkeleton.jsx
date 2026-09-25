// 12 pulsing placeholder boxes, shown while the real data is loading
export default function LibrarySkeleton() {
  const placeholders = Array.from({ length: 12 });

  return (
    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {placeholders.map((_, index) => (
        <div
          key={index}
          className="border-line bg-card h-64 animate-pulse rounded-xl border"
        />
      ))}
    </div>
  );
}
