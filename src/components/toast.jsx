"use client";

import { Toast } from "flowbite-react";

export default function DefaultToast() {
  return (
    <Toast>
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0 bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
        {/* <HiFire className="w-5 h-5" /> */}
      </div>
      <div className="ml-3 text-sm font-normal">Set yourself free.</div>
      <Toast.Toggle />
    </Toast>
  );
}
