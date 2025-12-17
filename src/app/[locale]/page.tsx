import NavbarNew from '@/components/home/NavbarNew';
import Hero from '@/components/home/Hero';
import BentoServices from '@/components/home/BentoServices';
import PortfolioShowcase from '@/components/home/PortfolioShowcase';
import SocialProof from '@/components/home/SocialProof';
import BlogPreview from '@/components/home/BlogPreview';
import NewsletterSection from '@/components/home/NewsletterSection';
import Footer from '@/components/home/Footer';

export default function HomePage() {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarNew />

      <main className="bg-background min-h-screen selection:bg-clay selection:text-white pt-20">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Bento Services Grid */}
        <BentoServices />

        {/* 3. Portfolio Showcase */}
        <PortfolioShowcase />

        {/* 4. Social Proof */}
        <SocialProof />

        {/* 5. Blog Preview */}
        <BlogPreview />

        {/* 6. Newsletter + Social Media */}
        <NewsletterSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </>
  );
}
