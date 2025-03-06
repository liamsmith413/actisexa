import React, { useState } from "react";
import { ArrowLeft, ChevronDown, Eye, EyeOff, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import NavBar from "@/components/NavBar";
interface WithdrawalFormProps {
    className?: string;
    onBack?: () => void;
}

const WithdrawalForm = ({ className, onBack }: WithdrawalFormProps) => {
    const [amount, setAmount] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const { toast } = useToast();

    const fee = 0;
    const arrival = amount ? parseFloat(amount) : 0;
    const balance = 0;
    const minimumAmount = 10;

    const handleWithdraw = () => {
        if (!amount || parseFloat(amount) < minimumAmount) {
            toast({
                title: "Invalid amount",
                description: `Minimum withdrawal amount is ${minimumAmount} USDT`,
                variant: "destructive",
            });
            return;
        }

        if (!address) {
            toast({
                title: "Missing address",
                description: "Please enter a withdrawal address",
                variant: "destructive",
            });
            return;
        }

        if (!password) {
            toast({
                title: "Missing password",
                description: "Please enter your withdrawal password",
                variant: "destructive",
            });
            return;
        }

        toast({
            title: "Withdrawal initiated",
            description: `${amount} USDT will be sent to your wallet`,
        });
    };

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

                {/* Balance Card */}
                <div className="bg-cyan-500 rounded-lg p-4 text-white mb-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm opacity-90">Balance (USDT)</p>
                            <h1 className="text-4xl font-bold mt-1">{balance}</h1>
                            <p className="text-yellow-300 text-sm mt-1">≈ {balance.toFixed(2)} USDT</p>
                        </div>
                        <div>
                            <p className="text-sm mb-1">Token</p>
                            <button className="bg-white text-black rounded px-3 py-1 flex items-center">
                                USDT <ChevronDown size={16} className="ml-1" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Amount Input */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <label className="block text-gray-700 mb-2">Amount (USDT)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <p className="text-gray-400 text-sm text-right mt-1">
                        Minimum Amount {minimumAmount} USDT
                    </p>
                </div>

                {/* Fee and Arrival */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="flex justify-between py-2">
                        <span className="text-gray-600">Fee:</span>
                        <span className="text-gray-800">{fee} USDT</span>
                    </div>
                    <div className="border-t border-gray-200 my-1"></div>
                    <div className="flex justify-between py-2">
                        <span className="text-gray-600">Arrival:</span>
                        <span className="text-cyan-500 font-medium">{arrival.toFixed(2)} USDT</span>
                    </div>
                </div>

                {/* Address Input */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <label className="block text-gray-700 mb-2">Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                {/* Withdraw Password */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <label className="block text-gray-700 mb-2">Withdraw password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded bg-blue-50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">
                        For the safety of your funds, please set a withdrawal password
                        <a href="#" className="text-cyan-500 ml-1 hover:underline">Go to settings</a>
                    </p>
                </div>

                {/* Withdraw Button */}
                <button
                    onClick={handleWithdraw}
                    className="w-full bg-cyan-500 text-white py-3 rounded text-center font-medium hover:bg-cyan-600 transition duration-200"
                >
                    Withdrawals
                </button>
            </div>
        </div>
    );
};

export default WithdrawalForm;
