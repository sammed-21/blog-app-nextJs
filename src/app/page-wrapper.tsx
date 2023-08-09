"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
interface Props {
  children: ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 35 }}
          transition={{ delay: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
