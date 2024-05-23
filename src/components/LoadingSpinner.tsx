"use client";
import { LoadingContext, useLoading } from "@/Context/LoadingSpinnerProvider";
import { cn } from "@/lib/utils";
import { useContext } from "react";

export const LoadingSpinner = ({ className }: { className?: string } = {}) => {
  const { loading } = useLoading();
  return (
    loading && (
      <div className="fixed left-0 right-0 bottom-0 top-0 text-4xl z-[49] flex justify-center items-center pointer-events-auto bg-black bg-opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("animate-spin w-[20vw] h-[20vh] ", className)}
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </div>
    )
  );
};
