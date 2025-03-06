import React from "react";
import { ArrowRight, Building2, Smartphone, Banknote } from "lucide-react";
import { cn } from "@/lib/utils";

interface BankDepositProps {
    className?: string;
    onClick?: () => void;
}

const BankDeposit = ({ className, onClick }: BankDepositProps) => {
    return (
        <div
            className={cn("flex items-center space-x-3 cursor-pointer", className)}
            onClick={onClick}
        >
            <div className="flex items-center space-x-2">
                <div className="relative flex items-center">
                    <div className="bg-blue-100 rounded-md p-1.5">
                        <Smartphone className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="absolute left-3 top-3 bg-green-100 rounded-md p-1.5 z-10">
                        <Banknote className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="absolute left-6 top-0 bg-blue-50 rounded-md p-1.5 z-20">
                        <Building2 className="w-5 h-5 text-blue-400" />
                    </div>
                </div>
                <h2 className="ml-6 text-xl font-medium text-blue-500">Bank Deposit</h2>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-500" />
        </div>
    );
};

export default BankDeposit;