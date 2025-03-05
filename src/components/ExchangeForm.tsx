
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import CoinKind from './CoinKind';
const ExchangeForm = () => {
  const [tradeType, setTradeType] = useState('market');
  const [buyOrSell, setBuyOrSell] = useState('buy');

  return (
    <div className="bg-card rounded-xl p-5 shadow-md">
      <Tabs defaultValue="spot" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="spot" className="font-medium">Spot</TabsTrigger>
          <TabsTrigger value="swap" className="font-medium">Swap</TabsTrigger>
          <TabsTrigger value="second" className="font-medium">Second</TabsTrigger>
        </TabsList>

        <TabsContent value="spot" className="space-y-4">
          <CoinKind />
          <div className="grid grid-cols-2 gap-2 mb-4">
            <Button
              variant={buyOrSell === 'buy' ? 'default' : 'outline'}
              className={`font-semibold ${buyOrSell === 'buy' ? 'bg-crypto-positive hover:bg-crypto-positive/90' : ''}`}
              onClick={() => setBuyOrSell('buy')}
            >
              Buy
            </Button>
            <Button
              variant={buyOrSell === 'sell' ? 'default' : 'outline'}
              className={`font-semibold ${buyOrSell === 'sell' ? 'bg-crypto-negative hover:bg-crypto-negative/90' : ''}`}
              onClick={() => setBuyOrSell('sell')}
            >
              Sell
            </Button>
          </div>

          {/* <div className="flex bg-muted rounded-lg p-1 mb-4">
            <button
              className={`flex-1 py-2 text-center rounded ${tradeType === 'market' ? 'bg-card shadow-sm' : ''}`}
              onClick={() => setTradeType('market')}
            >
              Market
            </button>
            <button
              className={`flex-1 py-2 text-center rounded ${tradeType === 'limit' ? 'bg-card shadow-sm' : ''}`}
              onClick={() => setTradeType('limit')}
            >
              Limit
            </button>
            <button
              className={`flex-1 py-2 text-center rounded ${tradeType === 'stop' ? 'bg-card shadow-sm' : ''}`}
              onClick={() => setTradeType('stop')}
            >
              Stop
            </button>
          </div> */}

          {tradeType === 'market' && (
            <>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label className="text-muted-foreground">Price</label>
                    <div className="flex items-center">
                      <span className="text-foreground mr-1">Market</span>
                      <span className="text-muted-foreground">USDT</span>
                    </div>
                  </div>
                </div>

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

                <Button
                  className={`w-full py-6 text-base font-semibold ${buyOrSell === 'buy'
                    ? 'bg-crypto-positive hover:bg-crypto-positive/90'
                    : 'bg-crypto-negative hover:bg-crypto-negative/90'
                    }`}
                >
                  {buyOrSell === 'buy' ? 'Buy BTC' : 'Sell BTC'}
                </Button>
              </div>
            </>
          )}
        </TabsContent>

        <TabsContent value="swap">
          <CoinKind />
          <div className="grid grid-cols-1 gap-2 mb-4">
            <Button
              variant={buyOrSell === 'buy' ? 'default' : 'outline'}
              className={`font-semibold ${buyOrSell === 'buy' ? 'bg-crypto-positive hover:bg-crypto-positive/90' : ''}`}
            >
              Open
            </Button>
          </div>
          {tradeType === 'market' && (
            <>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label className="text-muted-foreground">Price</label>
                    <div className="flex items-center">
                      <span className="text-foreground mr-1">Market</span>
                      <span className="text-muted-foreground">USDT</span>
                    </div>
                  </div>
                </div>

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
                    Logn
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
        </TabsContent>
        <TabsContent value="second">
          <CoinKind />
          {tradeType === 'market' && (
            <>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label className="text-muted-foreground">Price</label>
                    <div className="flex items-center">
                      <span className="text-foreground mr-1">Market</span>
                      <span className="text-muted-foreground">USDT</span>
                    </div>
                  </div>
                </div>

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
                    Logn
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExchangeForm;
