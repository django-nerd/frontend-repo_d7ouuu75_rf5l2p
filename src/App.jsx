import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import ProductDeck from "./components/ProductDeck";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid />
        <ProductDeck />
      </main>
      <Footer />
    </div>
  );
}

export default App;
