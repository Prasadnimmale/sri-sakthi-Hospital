"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { contact } from "@/data/contact";
import CallNowButton from "@/components/CallNowButton";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed right-4 bottom-4 z-40 flex flex-col gap-2.5 sm:right-6 sm:bottom-6"
        >
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Sri Sakthi Hospital on WhatsApp"
            title="WhatsApp Now"
            className="group relative grid size-12 place-items-center rounded-full bg-primary text-white shadow-[0_10px_26px_-8px_rgba(232,117,36,0.7)] transition-transform hover:scale-105"
          >
            <MessageCircle className="size-[22px]" aria-hidden="true" />
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/30 [animation-duration:2.5s]" />
          </a>
          <CallNowButton
            aria-label="Call Sri Sakthi Hospital"
            className="grid size-12 place-items-center rounded-full border border-line bg-white text-primary-dark shadow-[0_10px_26px_-10px_rgba(29,41,57,0.4)] transition-transform hover:scale-105"
            iconClassName="size-5"
            children={null}
          />
          <a
            href="#appointment"
            aria-label="Book an appointment"
            title="Book Appointment"
            className="grid size-12 place-items-center rounded-full border border-line bg-white text-primary-dark shadow-[0_10px_26px_-10px_rgba(29,41,57,0.4)] transition-transform hover:scale-105"
          >
            <CalendarCheck className="size-5" aria-hidden="true" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
