
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BottomNavigation from '../components/BottomNavigation';
import { Button } from '@/components/ui/button';

const Account = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="pt-20 pb-16">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-3">
              <div className="relative">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center border-2 border-background">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-medium">jame****.com</h1>
                <div className="flex items-center text-sm text-foreground/60">
                  <span>UID:6535967</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-sm mr-2">Credit score:</span>
                  <span className="text-crypto-accent font-medium">100</span>
                </div>
              </div>
            </div>
            <div className="bg-crypto-accent text-white rounded-lg p-4 mb-3 flex justify-between items-center">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Improve account security</span>
              </div>
              <Button size="sm" variant="outline" className="text-white border-white bg-white/15 hover:bg-white/20">
                View
              </Button>
            </div>

            <div className="grid grid-cols-4 mb-6 gap-4">
              <div className="flex flex-col items-center" style={{ cursor: "pointer" }}>
                <div className="w-12 h-12 bg-crypto-accent/10 rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-crypto-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <span className="text-xs">Security</span>
              </div>
              <div className="flex flex-col items-center" style={{ cursor: "pointer" }}>
                <div className="w-12 h-12 bg-crypto-accent/10 rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-crypto-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <path d="M3 10h18" />
                  </svg>
                </div>
                <span className="text-xs">KYC</span>
              </div>
              <div className="flex flex-col items-center" style={{ cursor: "pointer" }}>
                <div className="w-12 h-12 bg-crypto-accent/10 rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-crypto-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span className="text-xs">Verify</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-crypto-accent/10 rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-crypto-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="text-xs">Adviser</span>
              </div>
            </div>

            <div className="space-y-px">
              <div className="bg-gray-100/5 rounded-t-lg">
                <div className="flex justify-between items-center px-2 py-2 border-b border-gray-700/10">
                  <div className="font-medium">VIP Level</div>
                  <div className="flex items-center text-foreground/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100/5">
                <div className="flex justify-between items-center px-2 py-2 border-b border-gray-700/10">
                  <div className="font-medium">Language</div>
                  <div className="flex items-center text-foreground/70">
                    <span>English</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100/5">
                <div className="flex justify-between items-center px-2 py-2 border-b border-gray-700/10">
                  <div className="font-medium">Billing</div>
                  <div className="flex items-center text-foreground/70">
                    <span>USD</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100/5">
                <div className="flex justify-between items-center px-2 py-2 border-b border-gray-700/10">
                  <div className="font-medium">Audit report</div>
                  <div className="flex items-center text-foreground/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100/5">
                <div className="flex justify-between items-center px-2 py-2 border-b border-gray-700/10">
                  <div className="font-medium">MSB</div>
                  <div className="flex items-center text-foreground/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100/5">
                <div className="flex justify-between items-center px-2 py-2 border-b border-gray-700/10">
                  <div className="font-medium">White Paper</div>
                  <div className="flex items-center text-foreground/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100/5 rounded-b-lg">
                <div className="flex justify-between items-center px-2 py-2">
                  <div className="font-medium">APP Version</div>
                  <div className="flex items-center text-foreground/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Account;
