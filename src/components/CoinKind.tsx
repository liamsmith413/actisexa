
import React from 'react';
import { TrendingUp } from "lucide-react";

const CoinKind = ({ OnSide }) => {

    return (
        <div className="flex items-center justify-between mb-4" style={{ cursor: "pointer" }} onClick={() => { OnSide(true) }}>
            <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">BTC</span>
                </div>
                <span className="text-lg font-semibold">Bitcoin / USDT</span>
            </div>
            <div className="text-right">
                <div className="text-xl font-bold text-white">49,247.52</div>
                <div className="text-crypto-positive text-sm flex items-center">
                    <TrendingUp size={14} className="mr-1" />
                    +2.38%
                </div>
            </div>
        </div>
    );
};

export default CoinKind;
