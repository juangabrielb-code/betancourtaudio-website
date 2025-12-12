import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
