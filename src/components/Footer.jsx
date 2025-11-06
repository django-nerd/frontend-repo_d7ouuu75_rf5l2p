export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">BKart</h4>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              A modern multi-vendor marketplace for everything you love.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Company</h4>
            <ul className="mt-2 space-y-1 text-sm text-zinc-500 dark:text-zinc-400">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Support</h4>
            <ul className="mt-2 space-y-1 text-sm text-zinc-500 dark:text-zinc-400">
              <li><a href="/help" className="hover:underline">Help Center</a></li>
              <li><a href="/shipping" className="hover:underline">Shipping</a></li>
              <li><a href="/returns" className="hover:underline">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Legal</h4>
            <ul className="mt-2 space-y-1 text-sm text-zinc-500 dark:text-zinc-400">
              <li><a href="/privacy" className="hover:underline">Privacy</a></li>
              <li><a href="/terms" className="hover:underline">Terms</a></li>
              <li><a href="/cookies" className="hover:underline">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} BKart, Inc. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:underline">EN</a>
            <span>•</span>
            <a href="#" className="hover:underline">USD $</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
