"use client";

import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Sidebar = ({ side, OnSide }) => {
    const [cryptoPrices, setCryptoPrices] = useState([
        { name: "BTC", price: 91650.2, change: 4.85 },
        { name: "ETH", price: 2294.57, change: 4.71 },
        { name: "LTC", price: 107.7, change: 5.27 },
        { name: "BNB", price: 606.86, change: 2.38 },
        { name: "TRX", price: 0.2452, change: 1.49 },
        { name: "EOS", price: 0.5606, change: 4.79 },
        { name: "DOGE", price: 0.2116, change: 6.15 },
        { name: "BCH", price: 406.1, change: 14.69 },
        { name: "PAM", price: 58.4982, change: 5.23 },
    ]);

    useEffect(() => {
        // Simulate live updates every 5 seconds (Replace this with API call)
        const interval = setInterval(() => {
            setCryptoPrices((prevPrices) =>
                prevPrices.map((crypto) => ({
                    ...crypto,
                    price: parseFloat((crypto.price * (1 + (Math.random() - 0.5) * 0.01)).toFixed(4)),
                    change: parseFloat((crypto.change * (1 + (Math.random() - 0.5) * 0.02)).toFixed(2)),
                }))
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`fixed top-0 overflow-y-auto left-0 bg-white shadow-md transition-all duration-300`} style={{ width: side ? '50%' : '-100px', top: ' 73px', height: 'calc(77vh)', zIndex: 1000, display: side ? "block" : "none" }}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
                <span className="font-bold text-black">{side ? "Market Prices" : ""}</span>
                <button onClick={() => OnSide(!side)} className="text-gray-400">
                    {side ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
                </button>
            </div>

            <div className="p-2">
                {cryptoPrices.map((crypto, index) => (
                    <div key={index} className="flex justify-between py-2 px-2 border-b border-gray-300 text-black" style={{ cursor: "pointer" }}>
                        <span>{crypto.name}</span>
                        {side && (
                            <div className="text-right">
                                <p className="font-semibold">{crypto.price}</p>
                                <p className={`text-sm ${crypto.change > 0 ? "text-green-500" : "text-red-500"}`}>
                                    {crypto.change > 0 ? `+${crypto.change}%` : `${crypto.change}%`}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Sidebar;
