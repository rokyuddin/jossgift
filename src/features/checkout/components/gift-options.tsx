"use client";

import { Checkbox } from "@/components/atoms/checkbox";
import { Label } from "@/components/atoms/label";
import { Textarea } from "@/components/atoms/textarea";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Gift } from "lucide-react";

export function GiftOptions() {
    const [isGift, setIsGift] = useState(false);

    return (
        <div className="bg-card mt-8 p-6 border border-border rounded-2xl">
            <div className="flex items-start space-x-3">
                <Checkbox
                    id="is-gift"
                    checked={isGift}
                    onCheckedChange={(checked) => setIsGift(checked as boolean)}
                    className="mt-1 rounded-md size-5"
                />
                <div className="gap-1.5 grid leading-none">
                    <Label
                        htmlFor="is-gift"
                        className="flex items-center gap-2 font-semibold text-base cursor-pointer"
                    >
                        <Gift className="size-4 text-primary" />
                        This order is a gift
                    </Label>
                    <p className="mt-1 text-muted-foreground text-sm">
                        Prices will be hidden on the receipt. You can add a gift message below.
                    </p>
                </div>
            </div>

            <AnimatePresence>
                {isGift && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <Label htmlFor="gift-message" className="block mb-2 font-medium text-sm">
                            Gift Message (Optional)
                        </Label>
                        <Textarea
                            id="gift-message"
                            placeholder="Write a heartfelt message..."
                            className="bg-muted/30 border-border rounded-xl focus-visible:ring-primary/20 min-h-[120px] resize-none"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
