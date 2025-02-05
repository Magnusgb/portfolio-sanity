"use client"; // Gør det til en client-komponent

import { useEffect, useState } from "react";

export default function AnnouncementBar({ text1, text2, interval }: { text1: string; text2: string; interval: number }) {
  const [currentText, setCurrentText] = useState(text1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText((prev) => (prev === text1 ? text2 : text1));
    }, (interval || 3) * 1000);

    return () => clearInterval(timer);
  }, [text1, text2, interval]);

  return (
    <div className="bg-blue-500 text-white p-2 text-center">
      {currentText}
    </div>
  );
}
