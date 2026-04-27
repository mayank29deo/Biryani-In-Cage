import Hero from '@/components/home/Hero';
import MarqueeStrips from '@/components/home/MarqueeStrips';
import Stats from '@/components/home/Stats';
import Story from '@/components/home/Story';
import Signature from '@/components/home/Signature';
import Features from '@/components/home/Features';
import OrderCTA from '@/components/home/OrderCTA';
import Gallery from '@/components/home/Gallery';
import Reviews from '@/components/home/Reviews';
import Locate from '@/components/home/Locate';

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeStrips />
      <Stats />
      <Story />
      <Signature />
      <Features />
      <OrderCTA />
      <Gallery />
      <Reviews />
      <Locate />
    </main>
  );
}
