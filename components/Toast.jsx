"use client";

import { Toaster } from "react-hot-toast";

export default function Toast() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          background: "#131316",
          color: "#ffffff",
          border: "1px solid #26262b",
          fontSize: "14px",
        },
      }}
    />
  );
}
