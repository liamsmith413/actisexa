"use client";

import { useState } from "react";

const PositionRecordTabs = () => {
    const [activeTab, setActiveTab] = useState("record");

    return (
        <div className="w-full max-w-sm mx-auto">
            {/* Tabs */}
            <div className="flex border-b">
                <button
                    onClick={() => setActiveTab("position")}
                    className={`flex-1 text-center p-2 ${activeTab === "position" ? "border-b-2 border-teal-500 text-teal-600" : "text-gray-500"
                        }`}
                >
                    Position
                </button>
                <button
                    onClick={() => setActiveTab("record")}
                    className={`flex-1 text-center p-2 ${activeTab === "record" ? "border-b-2 border-teal-500 text-teal-600" : "text-gray-500"
                        }`}
                >
                    Record
                </button>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col items-center justify-center">
                {activeTab === "record" ? (
                    <div className="text-center text-gray-400">
                        <div className="w-24 h-24 mx-auto mb-2">
                            {/* Placeholder Icon (Can be replaced with an actual SVG) */}
                            <svg
                                className="w-full h-full"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 11c2.208 0 4-1.792 4-4s-1.792-4-4-4-4 1.792-4 4 1.792 4 4 4zM12 15c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z"
                                ></path>
                            </svg>
                        </div>
                        <p className="text-sm">Empty</p>
                    </div>
                ) : (
                    <div className="text-gray-500 text-center">No open positions</div>
                )}
            </div>
        </div>
    );
};

export default PositionRecordTabs;
