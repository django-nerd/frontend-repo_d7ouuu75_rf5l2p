import { ShoppingBag, Search, User, Store, Shield } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [openRoleMenu, setOpenRoleMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-900/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-md">
            <ShoppingBag className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            BKart
          </span>
        </a>

        <div className="hidden flex-1 items-center justify-center px-6 md:flex">
          <div className="relative w-full max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, brands, and more"
              className="w-full rounded-md border border-zinc-200 bg-white py-2 pl-10 pr-4 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
            {query && (
              <div className="absolute mt-2 w-full overflow-hidden rounded-md border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
                {mockSuggestions
                  .filter((s) => s.toLowerCase().includes(query.toLowerCase()))
                  .slice(0, 6)
                  .map((s) => (
                    <button
                      key={s}
                      onClick={() => setQuery(s)}
                      className="block w-full cursor-pointer px-3 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-700/40"
                    >
                      {s}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <a
            href="/catalog"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800 md:block"
          >
            Catalog
          </a>
          <a
            href="/deals"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800 md:block"
          >
            Deals
          </a>

          <div className="relative">
            <button
              onClick={() => setOpenRoleMenu((v) => !v)}
              className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <User className="h-4 w-4" />
              Sign in
            </button>
            {openRoleMenu && (
              <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-md border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
                <a href="/login" className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-700/40">
                  <User className="h-4 w-4" /> Customer Login
                </a>
                <a href="/merchant/login" className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-700/40">
                  <Store className="h-4 w-4" /> Merchant Login
                </a>
                <a href="/admin/login" className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-700/40">
                  <Shield className="h-4 w-4" /> Admin Login
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

const mockSuggestions = [
  "iPhone 15 Pro",
  "Samsung Galaxy S24",
  "Noise Cancelling Headphones",
  "4K Smart TV",
  "Gaming Laptop",
  "Kitchen Mixer",
  "Running Shoes",
  "Office Chair",
  "Smartwatch",
  "Electric Toothbrush",
];
