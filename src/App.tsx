
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Marketplace from "./pages/Marketplace";
import Exchange from "./pages/Exchange";
import Wallet from "./pages/Wallet";
import Account from "./pages/Account";
import RechargePage from "./pages/Recharge";
import WithdrawalForm from "./pages/WithdrawalForm";
import TransactionHistory from "./pages/HistoryPage";
// Initialize framer-motion
import { LazyMotion, domAnimation } from "framer-motion";
import CryptoExchange from "./pages/CtyproExchange";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LazyMotion features={domAnimation}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/account" element={<Account />} />
            <Route path="/Recharge" element={<RechargePage />} />
            <Route path="/Withdrawals" element={<WithdrawalForm />} />
            <Route path="/History" element={<TransactionHistory />} />
            <Route path="/Exchanges" element={<CryptoExchange />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LazyMotion>
  </QueryClientProvider>
);

export default App;
