import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}
