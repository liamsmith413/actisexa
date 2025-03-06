import React, { useState } from "react";
import { ChevronDown, ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import NavBar from "@/components/NavBar";
interface CryptoExchangeProps {
    className?: string;
}

type Currency = {
    id: string;
    name: string;
    symbol: string;
    icon: React.ReactNode;
    balance: number;
};

const CryptoExchange = ({ className }: CryptoExchangeProps) => {
    const [amount, setAmount] = useState<string>("");
    const [fromCurrency, setFromCurrency] = useState<string>("btc");
    const [toCurrency, setToCurrency] = useState<string>("usdt");
    const { toast } = useToast();

    const currencies: Currency[] = [
        {
            id: "btc",
            name: "Bitcoin",
            symbol: "BTC",
            icon: <span className="text-white font-bold bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-sm">₿</span>,
            balance: 0.25,
        },
        {
            id: "usdt",
            name: "Tether",
            symbol: "USDT",
            icon: <span className="text-white font-bold bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center text-sm">₮</span>,
            balance: 500,
        },
        {
            id: "usdc",
            name: "USD Coin",
            symbol: "USDC",
            icon: <span className="text-white font-bold bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-sm">$</span>,
            balance: 500,
        },
    ];

    const getSelectedCurrency = (id: string) => {
        return currencies.find(currency => currency.id === id) || currencies[0];
    };

    const handleMaxAmount = () => {
        const currency = getSelectedCurrency(fromCurrency);
        setAmount(currency.balance.toString());
    };

    const handleSwapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    const handleExchange = () => {
        if (!amount || parseFloat(amount) <= 0) {
            toast({
                title: "Invalid amount",
                description: "Please enter a valid amount to exchange",
                variant: "destructive",
            });
            return;
        }

        const fromCurrencyObj = getSelectedCurrency(fromCurrency);
        if (parseFloat(amount) > fromCurrencyObj.balance) {
            toast({
                title: "Insufficient balance",
                description: `You don't have enough ${fromCurrencyObj.symbol}`,
                variant: "destructive",
            });
            return;
        }

        toast({
            title: "Exchange initiated",
            description: `Exchanging ${amount} ${fromCurrencyObj.symbol} to ${getSelectedCurrency(toCurrency).symbol}`,
        });
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <NavBar />
            <div className={cn("max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm px-4", className)}>
                <h2 className="text-xl font-semibold mb-4">Send</h2>

                {/* From Currency Section */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center">
                        <div className="flex-1">
                            <label className="block text-gray-400 text-sm mb-1">Amount</label>
                            <div className="flex items-center">
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="bg-transparent w-full outline-none text-lg"
                                    placeholder="0"
                                />
                                <button
                                    onClick={handleMaxAmount}
                                    className="text-cyan-500 px-2 text-sm font-medium"
                                >
                                    All
                                </button>
                            </div>
                        </div>
                        <div className="flex-none">
                            <div className="relative">
                                <button className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 border">
                                    {getSelectedCurrency(fromCurrency).icon}
                                    <span className="font-medium">{getSelectedCurrency(fromCurrency).symbol}</span>
                                    <ChevronDown className="h-4 w-4 text-gray-500" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                        all: {getSelectedCurrency(fromCurrency).balance} {getSelectedCurrency(fromCurrency).symbol}
                    </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center mb-4">
                    <button
                        onClick={handleSwapCurrencies}
                        className="bg-gray-100 p-2 rounded-full"
                    >
                        <div className="relative">
                            <ArrowDown className="h-6 w-6 text-cyan-500" />
                            <ArrowUp className="h-6 w-6 text-cyan-500 absolute top-0" />
                        </div>
                    </button>
                </div>

                {/* To Currency Section */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center">
                        <div className="flex-1">
                            <input
                                type="text"
                                disabled
                                className="bg-transparent w-full outline-none text-lg"
                                placeholder="0"
                                value={amount ? amount : ""}
                            />
                        </div>
                        <div className="flex-none">
                            <div className="relative">
                                <button className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 border">
                                    {getSelectedCurrency(toCurrency).icon}
                                    <span className="font-medium">{getSelectedCurrency(toCurrency).symbol}</span>
                                    <ChevronDown className="h-4 w-4 text-gray-500" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Exchange Button */}
                <button
                    onClick={handleExchange}
                    className="w-full bg-cyan-500 text-white py-3 rounded-md text-center font-medium hover:bg-cyan-600 transition duration-200"
                >
                    Exchange
                </button>
            </div>
        </div>
    );
};

export default CryptoExchange;
