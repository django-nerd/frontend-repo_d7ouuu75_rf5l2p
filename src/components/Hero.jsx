import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-extrabold tracking-tight text-zinc-900 drop-shadow-sm dark:text-white sm:text-6xl"
          >
            Shop everything you love in one place
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mt-4 max-w-xl text-lg text-zinc-700/90 dark:text-zinc-200/90"
          >
            BKart brings multiple sellers, exclusive deals and fast delivery to your
            doorstep. Explore trending products, top brands and local merchants.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a
              href="/catalog"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:scale-[1.02] hover:bg-zinc-800 active:scale-[0.98] transition dark:bg-white dark:text-zinc-900"
            >
              Browse Catalog
            </a>
            <a
              href="/merchant"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:scale-[1.02] hover:bg-zinc-50 active:scale-[0.98] transition dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
            >
              Open a Store
            </a>
          </motion.div>
        </div>
      </div>

      {/* Soft gradient veil so the text stays readable while keeping Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white dark:from-zinc-900/80 dark:via-zinc-900/20 dark:to-zinc-900" />
    </section>
  );
}
