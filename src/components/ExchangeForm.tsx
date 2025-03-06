
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import MarketPriceOrder from './MarketPriceOrder';
import CoinKind from './CoinKind';
import MarketSwap from './MarketSwap';
import MarketSecond from './MarketSecond';
import Sidebar from './MarketSide'
const ExchangeForm = () => {
  const [tradeType, setTradeType] = useState('market');
  const [buyOrSell, setBuyOrSell] = useState('buy');
  const [side, OnSide] = useState(false)
  return (
    <div className="bg-card rounded-xl p-5 shadow-md">
      <Sidebar side={side} OnSide={OnSide} />
      <Tabs defaultValue="spot" className="w-full">
        <TabsList className="flex">
          <TabsTrigger
            value="spot"
            className={`flex-1 font-medium bg-white ${tradeType === 'spot' ? 'border-b-2 border-[#22a2b3] text-[#22a2b3]' : 'text-gray-500'}`}
            onClick={() => setTradeType('spot')}
          >
            Spot
          </TabsTrigger>
          <TabsTrigger
            value="swap"
            className={`flex-1 font-medium bg-white ${tradeType === 'swap' ? 'border-b-2 border-[#22a2b3] text-[#22a2b3]' : 'text-gray-500'}`}
            onClick={() => setTradeType('swap')}
          >
            Swap
          </TabsTrigger>
          <TabsTrigger
            value="second"
            className={`flex-1 font-medium bg-white ${tradeType === 'second' ? 'border-b-2 border-[#22a2b3] text-[#22a2b3]' : 'text-gray-500'}`}
            onClick={() => setTradeType('second')}
          >
            Second
          </TabsTrigger>
        </TabsList>
        <TabsContent value="spot" className="space-y-4">
          <CoinKind OnSide={OnSide} />
          <MarketPriceOrder />
        </TabsContent>
        <TabsContent value="swap">
          <CoinKind OnSide={OnSide} />
          <MarketSwap />
        </TabsContent>
        <TabsContent value="second">
          <CoinKind OnSide={OnSide} />
          <MarketSecond />

        </TabsContent>
      </Tabs>
    </div >
  );
};

export default ExchangeForm;
