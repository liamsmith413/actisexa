"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export default function NoticeModal({ open, onClose }) {
    return (
        <Dialog.Root open={open} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg max-w-md w-full z-50">
                    <div className="flex justify-between items-center">
                        <Dialog.Title className="text-lg font-semibold">Notice</Dialog.Title>
                        <Dialog.Close asChild>
                            <button className="text-gray-500 hover:text-gray-800">
                                <X size={20} />
                            </button>
                        </Dialog.Close>
                    </div>
                    <p className="mt-4 text-sm text-gray-700">
                        Dear customer, welcome to Actisex! Our company, in order to give back to
                        new and old users, has launched a limited-time USDT position-building incentive.
                        Quota is limited, so contact online customer service for participation.
                        First-come, first-served.
                    </p>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
