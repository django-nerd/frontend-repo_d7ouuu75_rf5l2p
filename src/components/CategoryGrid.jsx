import { motion } from "framer-motion";

const categories = [
  {
    name: "Mobiles",
    color: "from-indigo-500 to-sky-500",
    icon: "📱",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Electronics",
    color: "from-amber-500 to-orange-500",
    icon: "🔌",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Fashion",
    color: "from-pink-500 to-rose-500",
    icon: "👗",
    image:
      "https://images.unsplash.com/photo-1520975922203-b7e1bcd9a428?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Home",
    color: "from-emerald-500 to-teal-500",
    icon: "🏠",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Beauty",
    color: "from-fuchsia-500 to-violet-500",
    icon: "💄",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Sports",
    color: "from-lime-500 to-green-500",
    icon: "🏀",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Grocery",
    color: "from-cyan-500 to-blue-500",
    icon: "🛒",
    image:
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Toys",
    color: "from-purple-500 to-indigo-500",
    icon: "🧸",
    image:
      "https://images.unsplash.com/photo-1601758124099-1a5a1093e9b1?q=80&w=1600&auto=format&fit=crop",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.4 } }),
};

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Shop by Category
        </h2>
        <a
          href="/catalog"
          className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
        >
          View all
        </a>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
      >
        {categories.map((c, idx) => (
          <motion.a
            variants={itemVariants}
            custom={idx}
            key={c.name}
            href={`/catalog?category=${encodeURIComponent(c.name)}`}
            className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={c.image}
                alt={c.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.color} opacity-20 mix-blend-overlay`}
              />
            </div>
            {/* Content */}
            <div className="relative -mt-8 px-4 pb-4">
              <div className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm ring-1 ring-inset ring-black/5 backdrop-blur dark:bg-zinc-900/90 dark:text-white">
                <span className="mr-1 text-base">{c.icon}</span>
                {c.name}
              </div>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Explore the latest
              </p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
