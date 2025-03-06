import React from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
interface TransactionHistoryProps {
    className?: string;
    onBack?: () => void;
}

type Transaction = {
    id: string;
    date: string;
    beforeAmount: string;
    afterAmount: string;
    amount: string;
    currency: string;
};

const TransactionHistory = ({ className, onBack }: TransactionHistoryProps) => {
    // Sample transaction data
    const transactions: Transaction[] = [
        {
            id: "1",
            date: "2025-03-05 23:53:46",
            beforeAmount: "0",
            afterAmount: "0",
            amount: "0",
            currency: "USDT",
        },
        {
            id: "2",
            date: "2025-03-05 23:53:46",
            beforeAmount: "0",
            afterAmount: "0",
            amount: "0",
            currency: "LTC",
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <NavBar />
            <div className={cn("max-w-md mx-auto bg-white px-4", className)}>
                {/* Header with back button */}
                <div className="flex items-center mb-4">
                    <button
                        onClick={onBack}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <ArrowLeft size={20} />
                    </button>
                </div>

                {/* Tab Navigation */}
                <div className="flex border-b mb-4">
                    <button className="py-2 px-4 text-gray-600 hover:text-cyan-500">
                        Recharge
                    </button>
                    <button className="py-2 px-4 text-gray-600 hover:text-cyan-500">
                        Withdrawal
                    </button>
                    <button className="py-2 px-4 text-gray-600 hover:text-cyan-500">
                        Exchange
                    </button>
                    <button className="py-2 px-4 bg-cyan-500 text-white rounded-t-md">
                        Changes
                    </button>
                </div>

                {/* Transaction List */}
                <div className="space-y-4">
                    {transactions.map((transaction) => (
                        <div key={transaction.id} className="rounded-lg overflow-hidden">
                            {/* Transaction Date Header */}
                            <div className="bg-cyan-500 text-white p-3">
                                {transaction.date}
                            </div>

                            {/* Transaction Details */}
                            <div className="bg-white border border-gray-200 p-4">
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="text-gray-500">Before</div>
                                    <div className="col-span-2 text-right">
                                        {transaction.beforeAmount} {transaction.currency}
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-2 mt-2">
                                    <div className="text-gray-500">After</div>
                                    <div className="col-span-2 text-right">
                                        {transaction.afterAmount} {transaction.currency}
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-2 mt-2">
                                    <div className="text-gray-500">Amount</div>
                                    <div className="col-span-2 text-right">
                                        {transaction.amount} {transaction.currency}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;