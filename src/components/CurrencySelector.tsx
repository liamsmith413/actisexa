import React from "react";
import { cn } from "@/lib/utils";

type Currency = {
    id: string;
    name: string;
    symbol: string;
    color: string;
    icon: React.ReactNode;
};

interface CurrencySelectorProps {
    currencies: Currency[];
    selectedCurrency?: string;
    onSelect: (currency: string) => void;
    className?: string;
}

const CurrencySelector = ({
    currencies,
    selectedCurrency,
    onSelect,
    className,
}: CurrencySelectorProps) => {
    return (
        <div className={cn("flex flex-col items-center space-y-6", className)}>
            <p className="text-base text-gray-500 font-normal">Please select currency</p>
            <div className="flex items-center justify-center space-x-4 w-full">
                {currencies.map((currency) => (
                    <button
                        key={currency.id}
                        onClick={() => onSelect(currency.id)}
                        className={cn(
                            "flex flex-col items-center space-y-2 transition-transform duration-300 ease-in-out transform hover:scale-105",
                            selectedCurrency === currency.id && "scale-105"
                        )}
                    >
                        <div
                            className={cn(
                                "w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-all",
                                currency.color
                            )}
                        >
                            {currency.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{currency.symbol}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CurrencySelector;