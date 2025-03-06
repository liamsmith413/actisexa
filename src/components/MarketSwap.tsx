"use client";

import { useState, useEffect } from "react";
import PositionRecordTabs from "./PositionRecod";
const MarketSwap = () => {
    const [price, setPrice] = useState(91744.0217);
    const [amount, setAmount] = useState(0);
    const [pay, setPay] = useState(0);
    const [prices, setPrices] = useState([
        { price: 91653.834, amount: 0.2424 },
        { price: 91719.9495, amount: 0.1476 },
        { price: 91666.234, amount: 0.4256 },
        { price: 91624.4428, amount: 0.1251 },
        { price: 91523.7429, amount: 0.0992 },
        { price: 91804.1329, amount: 0.0197 },
    ]);

    const [orders, setOrders] = useState([
        { price: 91642.3321, amount: 0.9454 },
        { price: 91821.8541, amount: 0.0004 },
        { price: 91671.8742, amount: 0.006 },
        { price: 91736.4339, amount: 3.181 },
        { price: 91852.7912, amount: 0.0244 },
        { price: 91809.4031, amount: 0.145 },
    ]);

    useEffect(() => {
        // Simulated live price update
        const interval = setInterval(() => {
            setPrice((prevPrice) =>
                parseFloat((prevPrice * (1 + (Math.random() - 0.5) * 0.001)).toFixed(4))
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white p-4 shadow-lg rounded-lg w-full max-w-sm">
            {/* Header */}
            <div className="flex justify-between items-center mb-2 w-full">
                <button className="bg-green-500 text-white px-4 py-1 rounded w-full">Open</button>
            </div>

            {/* Market Price */}
            <div className="bg-gray-100 p-2 rounded mb-2 text-center">Market price</div>

            {/* Price Input */}
            <input
                type="text"
                value={price}
                readOnly
                className="w-full border p-2 rounded mb-2 text-center text-lg font-semibold text-red-500"
            />

            {/* Amount Input */}
            <input
                type="text"
                value={amount}
                className="w-full border p-2 rounded mb-2 text-center"
                placeholder="0.0000 Amount"
            />

            {/* Slider */}
            <input type="range" onChange={(e) => setAmount(parseFloat(e.target.value))} className="w-full mb-2" />

            {/* Pay, Available */}
            <div className="flex justify-between text-gray-600 text-sm">
                <span>Pay: {pay} USDT</span>
                <span>Available: 0 USDT</span>
                <span>Amount: 0 USDT</span>
            </div>

            {/* Order Book (Buy) */}
            <div className="mt-1">
                {prices.map((p, index) => (
                    <div key={index} className="flex justify-between text-green-500 text-sm">
                        <span>{p.price}</span>
                        <span>{p.amount}</span>
                    </div>
                ))}
            </div>

            {/* Order Book (Sell) */}
            <div className="mt-1">
                {orders.map((o, index) => (
                    <div key={index} className="flex justify-between text-red-500 text-sm">
                        <span>{o.price}</span>
                        <span>{o.amount}</span>
                    </div>
                ))}
            </div>

            {/* Long & Short Buttons */}
            <div className="flex gap-2 mt-2">
                <button className="flex-1 bg-blue-500 text-white p-2 rounded">Long</button>
                <button className="flex-1 bg-red-500 text-white p-2 rounded">Short</button>
            </div>
            <PositionRecordTabs />
        </div>
    );
};

export default MarketSwap;
