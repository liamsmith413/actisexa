
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
            </div>
          </motion.div>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Exchange;
