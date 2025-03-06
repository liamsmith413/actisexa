
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import BottomNavigation from '../components/BottomNavigation';
import { Search, ArrowUp, ArrowDown, Star } from 'lucide-react';

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState('digital');
  const [favoriteOnly, setFavoriteOnly] = useState(false);

  const categories = [
    { id: 'digital', name: 'Digital currency' },
    { id: 'forex', name: 'Forex' },
    { id: 'precious', name: 'Precious metals' },
    { id: 'index', name: 'Index' },
    { id: 'futures', name: 'Futures' }
  ];

  const markets = [
    {
      id: 'btc',
      name: 'BTC',
      price: '49,247.52',
      change: '+2.38%',
      positive: true,
      favorite: true,
      img: '💰'
    },
    {
      id: 'eth',
      name: 'ETH',
      price: '2,354.21',
      change: '+1.15%',
      positive: true,
      favorite: true,
      img: '🪙'
    },
    {
      id: 'sol',
      name: 'SOL',
      price: '102.85',
      change: '+4.63%',
      positive: true,
      favorite: false,
      img: '💎'
    },
    {
      id: 'ada',
      name: 'ADA',
      price: '0.4582',
      change: '-0.23%',
      positive: false,
      favorite: false,
      img: '🔹'
    },
    {
      id: 'dot',
      name: 'DOT',
      price: '6.2451',
      change: '-1.78%',
      positive: false,
      favorite: false,
      img: '🔷'
    },
    {
      id: 'link',
      name: 'LINK',
      price: '15.241',
      change: '+0.87%',
      positive: true,
      favorite: false,
      img: '🔗'
    },
    {
      id: 'xlm',
      name: 'XLM',
      price: '0.1203',
      change: '-0.42%',
      positive: false,
      favorite: false,
      img: '⭐'
    },
  ];

  const filteredMarkets = favoriteOnly
    ? markets.filter(market => market.favorite)
    : markets;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />

      <main className="pt-16 pb-20">
        <div className="container px-4 py-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-xl font-semibold">Markets</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search markets"
                  className="pl-9 pr-4 py-2 rounded-lg bg-card border border-border text-sm w-full md:w-64"
                />
              </div>
            </div>

            <div className="flex justify-center flex-wrap gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
              
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`flex-shrink-0 rounded-full px-3 py-1 text-xs font-medium h-10 ${activeCategory === category.id && !favoriteOnly
                    ? 'bg-crypto-accent text-white'
                    : 'bg-muted border border-border text-foreground/80'
                    }`}
                  style={{
                    width: '100px',
                    fontSize: '0.875rem',
                    margin: '0 0.25rem'
                  }}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setFavoriteOnly(false);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="bg-card rounded-xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 p-4 border-b text-sm font-medium text-muted-foreground">
                <div className="text-center">Market</div>
                <div className="text-center">Price</div>
                <div className="text-center">Change</div>
              </div>
              <div className="divide-y divide-y-0">
                {filteredMarkets.map((market) => (
                  <div
                    key={market.id}
                    className="grid grid-cols-3 p-4 text-sm hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center">
                      <button
                        className="mr-2 text-muted-foreground hover:text-yellow-400"
                        onClick={() => {
                          market.favorite = !market.favorite;
                          setFavoriteOnly(favoriteOnly); // Trigger re-render
                        }}
                      >
                        <Star
                          className="h-4 w-4"
                          fill={market.favorite ? "currentColor" : "none"}
                          color={market.favorite ? "#EAB308" : "currentColor"}
                        />
                      </button>
                      <span className="mr-2">{market.img}</span>
                      <span className="font-medium">{market.name}</span>
                    </div>
                    <div className="text-center font-medium">${market.price}</div>
                    <div
                      className={`text-center flex items-center justify-center font-medium rounded-full px-2 py-1 ${market.positive ? "bg-green-500 text-white" : "bg-red-500 text-white"
                        }`}
                    >
                      {market.positive ? (
                        <ArrowUp className="h-3 w-3 mr-1" />
                      ) : (
                        <ArrowDown className="h-3 w-3 mr-1" />
                      )}
                      {market.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Marketplace;
