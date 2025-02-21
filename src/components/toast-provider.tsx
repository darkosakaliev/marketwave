"use client";

import { useTheme } from "next-themes";
import { Toaster } from "sonner";

const ToastProvider = () => {
  const { theme } = useTheme();

  return (
    <Toaster
      theme={theme as "light" | "dark" | "system"}
      position="bottom-right"
      toastOptions={{
        duration: 3000,
        className: "dark:bg-gray-800 dark:text-white dark:border-gray-700",
      }}
    />
  );
};

export default ToastProvider;
