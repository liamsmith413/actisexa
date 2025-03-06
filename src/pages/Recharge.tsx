import React, { useState } from "react";
import BankDeposit from "../components/BandDeposit";
import CurrencySelector from "../components/CurrencySelector";
import { DollarSign, Disc } from "lucide-react";
import NavBar from "@/components/NavBar";
const RechargePage = () => {
    const [selectedCurrency, setSelectedCurrency] = useState<string>("");

    const currencies = [
        {
            id: "usdt",
            name: "Tether",
            symbol: "USDT",
            color: "bg-teal-500",
            icon: <span className="text-white font-bold text-lg">₮</span>,
        },
        {
            id: "usdc",
            name: "USD Coin",
            symbol: "USDC",
            color: "bg-blue-500",
            icon: <DollarSign className="text-white w-6 h-6" />,
        },
        {
            id: "btc",
            name: "Bitcoin",
            symbol: "BTC",
            color: "bg-orange-500",
            icon: <span className="text-white font-bold text-xl">₿</span>,
        },
        {
            id: "eth",
            name: "Ethereum",
            symbol: "ETH",
            color: "bg-indigo-500",
            icon: <Disc className="text-white w-6 h-6 rotate-45" />,
        },
    ];

    const handleCurrencySelect = (currencyId: string) => {
        setSelectedCurrency(currencyId);
        console.log(`Selected currency: ${currencyId}`);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <NavBar />
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
                <BankDeposit className="mb-10 justify-center" />
                <CurrencySelector
                    currencies={currencies}
                    selectedCurrency={selectedCurrency}
                    onSelect={handleCurrencySelect}
                />
            </div>
        </div>
    );
};

export default RechargePage;