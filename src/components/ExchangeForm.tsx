
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

<<<<<<< HEAD
=======
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label className="text-muted-foreground">Amount</label>
                    <div className="flex items-center">
                      <span className="text-muted-foreground">Available:</span>
                      <span className="text-foreground ml-1">23,245.43 USDT</span>
                    </div>
                  </div>
                  <div className="flex items-center border border-input rounded-md overflow-hidden">
                    <input
                      type="text"
                      placeholder="0.00"
                      className="flex-1 bg-transparent border-0 focus:ring-0 py-3 px-4"
                    />
                  </div>
                </div>

                <div className="py-2">
                  <div className="grid grid-cols-4 gap-2">
                    <button className="text-xs bg-muted rounded py-1">25%</button>
                    <button className="text-xs bg-muted rounded py-1">50%</button>
                    <button className="text-xs bg-muted rounded py-1">75%</button>
                    <button className="text-xs bg-muted rounded py-1">100%</button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground py-2 border-t border-border">
                  <span>Total</span>
                  <span>0.00 USDT</span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <Button
                    variant={buyOrSell === 'buy' ? 'default' : 'outline'}
                    className={`font-semibold ${buyOrSell === 'buy' ? 'bg-crypto-positive hover:bg-crypto-positive/90' : ''}`}
                  >
                    Long
                  </Button>
                  <Button
                    variant={buyOrSell === 'buy' ? 'default' : 'outline'}
                    className={`font-semibold ${buyOrSell === 'buy' ? 'bg-crypto-positive hover:bg-crypto-positive/90' : ''}`}
                  >
                    Short
                  </Button>
                </div>
              </div>
            </>
          )}
>>>>>>> 0e790bab1f02f037beaee6508beb3c60b488f580
        </TabsContent>
      </Tabs>
    </div >
  );
};

export default ExchangeForm;
