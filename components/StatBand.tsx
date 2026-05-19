type Stat = { value: string; label: string };

export function StatBand({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid divide-y divide-ivory/15 rounded-2xl border border-ivory/15 bg-charcoal text-ivory sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {stats.map((s) => (
        <div key={s.label} className="p-8">
          <p className="font-serif text-3xl text-ivory sm:text-4xl">{s.value}</p>
          <p className="mt-2 text-sm text-ivory/65">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
