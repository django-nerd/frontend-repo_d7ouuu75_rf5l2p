import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <section id="get-started" className="py-20 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Get started in seconds</h2>
            <p className="mt-3 text-slate-600">Copy the structure, tweak the copy, and ship. Everything is organized and easy to remix.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3 text-left">
              <div className="rounded-xl border border-slate-200 p-4">
                <h3 className="text-sm font-semibold">1. Plan</h3>
                <p className="mt-1 text-sm text-slate-600">Outline your sections and content first.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <h3 className="text-sm font-semibold">2. Design</h3>
                <p className="mt-1 text-sm text-slate-600">Use the ready components and adjust styles.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <h3 className="text-sm font-semibold">3. Launch</h3>
                <p className="mt-1 text-sm text-slate-600">Publish and iterate with feedback.</p>
              </div>
            </div>
          </div>
        </section>
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
