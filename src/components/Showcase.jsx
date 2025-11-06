export default function Showcase() {
  const items = [
    {
      title: 'Landing Page',
      tag: 'Marketing',
      img: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Dashboard',
      tag: 'Product',
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Mobile App',
      tag: 'Experience',
      img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <section id="showcase" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Showcase</h2>
          <p className="mt-3 text-slate-600">A small gallery of layouts to spark ideas.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card) => (
            <figure key={card.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img src={card.img} alt={card.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <figcaption className="flex items-center justify-between p-4">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
                  <p className="text-xs text-slate-500">{card.tag}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">Preview</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
