import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 drop-shadow-sm dark:text-white sm:text-6xl">
            Shop everything you love in one place
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-700/90 dark:text-zinc-200/90">
            BKart brings multiple sellers, exclusive deals and fast delivery to your
            doorstep. Explore trending products, top brands and local merchants.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/catalog"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
            >
              Browse Catalog
            </a>
            <a
              href="/merchant"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
            >
              Open a Store
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white dark:from-zinc-900/80 dark:via-zinc-900/20 dark:to-zinc-900" />
    </section>
  );
}
