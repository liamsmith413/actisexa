"use client";

import { useState, useEffect } from "react";
import PositionRecordTabs from "./PositionRecod";
const MarketSecond = () => {
    const [pay, setPay] = useState(0);


    const [orders, setOrders] = useState([
        { price: 91642.3321, amount: 0.9454 },
        { price: 91821.8541, amount: 0.0004 },
        { price: 91671.8742, amount: 0.006 },
        { price: 91736.4339, amount: 3.181 },
        { price: 91852.7912, amount: 0.0244 },
        { price: 91809.4031, amount: 0.145 },
    ]);


    return (
        <div className="bg-white p-4 shadow-lg rounded-lg w-full max-w-sm">
            {/* Pay, Available */}
            <div className="flex justify-between text-gray-600 text-sm">
                <span>Amount: {pay} USDT</span>
                <span>Balance: 0 USDT</span>
                <span>Expected: 0 USDT</span>
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

export default MarketSecond;
