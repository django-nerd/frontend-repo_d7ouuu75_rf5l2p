const categories = [
  { name: "Mobiles", color: "from-indigo-500 to-sky-500", icon: "📱" },
  { name: "Electronics", color: "from-amber-500 to-orange-500", icon: "🔌" },
  { name: "Fashion", color: "from-pink-500 to-rose-500", icon: "👗" },
  { name: "Home", color: "from-emerald-500 to-teal-500", icon: "🏠" },
  { name: "Beauty", color: "from-fuchsia-500 to-violet-500", icon: "💄" },
  { name: "Sports", color: "from-lime-500 to-green-500", icon: "🏀" },
  { name: "Grocery", color: "from-cyan-500 to-blue-500", icon: "🛒" },
  { name: "Toys", color: "from-purple-500 to-indigo-500", icon: "🧸" },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Shop by Category
        </h2>
        <a href="/catalog" className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">
          View all
        </a>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {categories.map((c) => (
          <a
            key={c.name}
            href={`/catalog?category=${encodeURIComponent(c.name)}`}
            className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
          >
            <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${c.color} opacity-20 transition group-hover:scale-110`} />
            <div className="relative">
              <div className="text-3xl">{c.icon}</div>
              <h3 className="mt-3 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {c.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Explore the latest</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
