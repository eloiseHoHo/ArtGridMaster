"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-gray-600">
          We use cookies for analytics and advertising. By continuing to use this site, you agree to our{" "}
          <Link href="/privacy" className="text-gray-900 dark:text-gray-100 underline">Privacy Policy</Link>.
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button onClick={decline} className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Decline
          </button>
          <button onClick={accept} className="px-4 py-1.5 text-sm bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
