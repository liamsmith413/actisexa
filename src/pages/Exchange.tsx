
import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import BottomNavigation from '../components/BottomNavigation';
import ExchangeForm from '../components/ExchangeForm';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowDown, Clock, BarChart } from "lucide-react";

const Exchange = () => {
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
            <div className="md:col-span-5">
              <ExchangeForm />
              {/* <div className="mt-6 bg-card rounded-xl overflow-hidden">
                <div className="p-4 border-b border-border">
                  <h3 className="font-medium">Order Book</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-3 text-xs text-muted-foreground mb-2">
                    <div>Price (USDT)</div>
                    <div className="text-right">Amount (BTC)</div>
                    <div className="text-right">Total</div>
                  </div>

                  <div className="space-y-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={`sell-${i}`} className="grid grid-cols-3 text-sm">
                        <div className="text-crypto-negative">{(49300 + i * 10).toFixed(2)}</div>
                        <div className="text-right">{(0.15 - i * 0.025).toFixed(3)}</div>
                        <div className="text-right">{((49300 + i * 10) * (0.15 - i * 0.025)).toFixed(2)}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center border-y border-border py-2 mb-4">
                    <div className="text-xl font-bold">49,247.52</div>
                    <div className="text-xs text-crypto-positive">$49,247.52</div>
                  </div>

                  <div className="space-y-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={`buy-${i}`} className="grid grid-cols-3 text-sm">
                        <div className="text-crypto-positive">{(49230 - i * 10).toFixed(2)}</div>
                        <div className="text-right">{(0.18 + i * 0.03).toFixed(3)}</div>
                        <div className="text-right">{((49230 - i * 10) * (0.18 + i * 0.03)).toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="mb-4">
              <h1 className="text-xl font-semibold flex items-center">
                <span className="mr-2">BTC/USDT</span>
                <ArrowDown size={16} className="text-muted-foreground" />
              </h1>
            </div> */}

            {/* <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-7 space-y-6">
                <div className="bg-card rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-border flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BarChart size={18} />
                      <span className="font-medium">Chart</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-xs bg-muted px-2 py-1 rounded">15m</button>
                      <button className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">1h</button>
                      <button className="text-xs bg-muted px-2 py-1 rounded">4h</button>
                      <button className="text-xs bg-muted px-2 py-1 rounded">1d</button>
                    </div>
                  </div>
                  <div className="h-72 p-4 flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">Chart visualization will appear here</div>
                  </div>
                </div>

                <div className="bg-card rounded-xl overflow-hidden">
                  <Tabs defaultValue="orders">
                    <div className="border-b border-border">
                      <TabsList className="w-full justify-start h-auto p-0">
                        <TabsTrigger
                          value="orders"
                          className="rounded-none px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none"
                        >
                          Open Orders
                        </TabsTrigger>
                        <TabsTrigger
                          value="history"
                          className="rounded-none px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none"
                        >
                          Order History
                        </TabsTrigger>
                        <TabsTrigger
                          value="trade"
                          className="rounded-none px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none"
                        >
                          Trade History
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent value="orders" className="p-4">
                      <div className="flex items-center justify-center h-48 text-muted-foreground">
                        <div className="text-center">
                          <Clock className="w-10 h-10 mx-auto mb-2 opacity-40" />
                          <p>No open orders</p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="history" className="p-4">
                      <div className="flex items-center justify-center h-48 text-muted-foreground">
                        <p>No order history available</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="trade" className="p-4">
                      <div className="flex items-center justify-center h-48 text-muted-foreground">
                        <p>No trade history available</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>


            </div> */}
          </motion.div>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Exchange;
