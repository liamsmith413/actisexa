"use client";

import { useState, useEffect } from "react";

const MarketPriceOrder = () => {
    const [marketPrice, setMarketPrice] = useState(108.4874);
    const [amount, setAmount] = useState(0);
    const [activeTab, setActiveTab] = useState("sell");
    const [orderBook, setOrderBook] = useState<{ price: number; amount: number }[]>([]);
    const [rorderBook, setrOrderBook] = useState<{ price: number; amount: number }[]>([]);

    useEffect(() => {
        const fetchOrderBook = () => {
            const updatedOrderBook = [
                { price: 108.7098, amount: 4.4749 },
                { price: 108.4492, amount: 0.4471 },
                { price: 108.3941, amount: 1.4740 },
                { price: 108.8051, amount: 45.7252 },
                { price: 108.9457, amount: 84.1952 },
            ].map((order) => ({
                ...order,
                price: parseFloat((order.price + (Math.random() * 0.05 - 0.025)).toFixed(4)), // Small price variation
            }));
            setOrderBook(updatedOrderBook);
            const updatedrOrderBook = [
                { price: 108.5902, amount: 1.4662 },
                { price: 108.4700, amount: 101.1425 },
                { price: 108.4700, amount: 27.1410 },
                { price: 108.4800, amount: 100.8576 },
                { price: 108.4349, amount: 13.9788 },
            ].map((order) => ({
                ...order,
                price: parseFloat((order.price + (Math.random() * 0.05 - 0.025)).toFixed(4)), // Small price variation
            }));
            setrOrderBook(updatedrOrderBook);
        };

        fetchOrderBook();
        const interval = setInterval(fetchOrderBook, 5000); // Update every 5s
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="w-full max-w-md bg-white p-1 rounded-lg shadow-lg mx-auto">
            {/* Buy/Sell Toggle */}
            <div className="flex">
                <button
                    className={`flex-1 py-1 ${activeTab === "buy" ? "bg-green-500 text-white" : "bg-gray-200"} rounded-l-lg`}
                    onClick={() => setActiveTab("buy")}
                >
                    Buy
                </button>
                <button
                    className={`flex-1 py-1 ${activeTab === "sell" ? "bg-red-500 text-white" : "bg-gray-200"} rounded-r-lg`}
                    onClick={() => setActiveTab("sell")}
                >
                    Sell
                </button>
            </div>

            {/* Input Fields */}
            <div className="mt-3 text-gray-700">
                <p className="text-sm">Market price</p>
                <div className="bg-gray-100 p-2 rounded-md">{marketPrice} USDT</div>

                <p className="mt-2 text-sm">Amount</p>
                <input
                    type="number"
                    value={amount}

                    className="w-full p-2 border rounded-md"
                    placeholder="0.0000 LTC"
                />
            </div>

            {/* Slider */}
            <input type="range" min="0" max="100" onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} className="w-full mt-2" />

            {/* Order Book */}
            <div className="mt-4">
                <div className="flex justify-between text-gray-500 text-sm">
                    <span>Price (USDT)</span>
                    <span>Amount (LTC)</span>
                </div>
                {orderBook.map((order, index) => (
                    <div key={index} className="flex justify-between text-green-600">
                        <span>{order.price.toFixed(4)}</span>
                        <span>{order.amount.toFixed(4)}</span>
                    </div>
                ))}
            </div>
            {/* Order Book */}
            <div className="mt-4">
                <div className="flex justify-between text-gray-500 text-sm">
                    <span>Price (USDT)</span>
                    <span>Amount (LTC)</span>
                </div>
                {rorderBook.map((order, index) => (
                    <div key={index} className="flex justify-between text-red-600">
                        <span>{order.price}</span>
                        <span>{order.amount.toFixed(4)}</span>
                    </div>
                ))}
            </div>

            {/* Action Button */}
            <button className={`w-full mt-3 py-2 rounded-lg ${activeTab === "buy" ? "bg-green-500" : "bg-red-500"} text-white`}>
                {activeTab === "buy" ? "Buy" : "Sell"}
            </button>
            {/* Commissioned Orders */}
            <p className="mt-4 text-black font-semibold">Commissioned orders</p>
        </div>
    );
};

export default MarketPriceOrder;
