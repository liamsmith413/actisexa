import { useState } from 'react'
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import FeaturesGrid from '../components/FeaturesGrid';
import MarketOverview from '../components/MarketOverview';
import BottomNavigation from '../components/BottomNavigation';
import NoticeModal from '@/modals/Notic';
import TopMarket from '@/components/TopMarket';
const Index = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="min-h-screen text-foreground">
      <NavBar />
      <NoticeModal open={isOpen} onClose={setIsOpen} />
      <main>
        <HeroSection />
        <TopMarket />
        <FeaturesGrid />
        <MarketOverview />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Index;
