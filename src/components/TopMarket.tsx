"use client";

import { useEffect, useState } from "react";

const TopMarket = () => {
    const [prices, setPrices] = useState([
        { symbol: "XAU", price: 0, change: -12, btcValue: 0 },
        { symbol: "XPD", price: 0, change: +10, btcValue: 0 },
        { symbol: "XAG", price: 0, change: 0, btcValue: 0 },
    ]);

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const response = await fetch("/api/metal-prices"); // Replace with actual API
                const data = await response.json();
                setPrices(data);
            } catch (error) {
                console.error("Error fetching prices:", error);
            }
        };

        fetchPrices();
        const interval = setInterval(fetchPrices, 10000); // Refresh every 10s
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center bg-white p-4 rounded-lg shadow-lg overflow-x-auto">
            {prices.map((metal) => (
            <div
                key={metal.symbol}
                className="text-center flex-shrink-0"
                style={{
                minWidth: "100px",
                maxWidth: "150px",
                margin: `${metal.price / 100}px`,
                }}
            >
                <p className="text-gray-600 font-semibold">
                {metal.symbol}{" "}
                <span className={`text-sm ${metal.change < 0 ? "text-red-500" : "text-green-500"}`}>
                    {metal.change.toFixed(2)}%
                </span>
                </p>
                <p className="text-2xl font-bold" style={{ fontSize: `${16 + metal.price / 100}px` }}>
                {metal.price.toFixed(4)}
                </p>
                <p className="text-gray-500 text-sm">≈₿{metal.btcValue.toFixed(4)}</p>
            </div>
            ))}
        </div>
    );
};

export default TopMarket;
