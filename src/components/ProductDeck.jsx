import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Noise Cancelling Headphones",
    price: 129.99,
    store: "SoundCore",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1518443952241-04e2a1d99a4b?q=80&w=1600&auto=format&fit=crop",
    badge: "Deal of the day",
  },
  {
    id: 2,
    title: "Smartwatch Series X",
    price: 179.0,
    store: "TimeLabs",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1517414204284-8e4385a4a185?q=80&w=1600&auto=format&fit=crop",
    badge: "Trending",
  },
  {
    id: 3,
    title: "Ergonomic Office Chair",
    price: 249.0,
    store: "Chairly",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1592078615290-033f4f8cfb20?q=80&w=1600&auto=format&fit=crop",
    badge: "Bestseller",
  },
  {
    id: 4,
    title: "4K UHD Smart TV 55\"",
    price: 599.0,
    store: "VisionPro",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1593359677879-4f74f4a9a002?q=80&w=1600&auto=format&fit=crop",
    badge: "Hot",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.45 } }),
};

export default function ProductDeck() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Today’s top picks
        </h2>
        <a
          href="/deals"
          className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
        >
          All deals
        </a>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
      >
        {products.map((p, i) => (
          <motion.a
            key={p.id}
            variants={fadeIn}
            custom={i}
            href={`/product/${p.id}`}
            className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-zinc-900 shadow-sm ring-1 ring-black/5 backdrop-blur dark:bg-zinc-900/90 dark:text-white">
                {p.badge}
              </div>
            </div>
            <div className="p-3">
              <h3 className="line-clamp-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {p.title}
              </h3>
              <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <span>{p.store}</span>
                <span>•</span>
                <span>{p.rating}★</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-base font-bold text-zinc-900 dark:text-zinc-100">${p.price}</span>
                <button className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white shadow transition hover:scale-[1.02] hover:bg-zinc-800 active:scale-[0.98] dark:bg-white dark:text-zinc-900">
                  Add to cart
                </button>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
