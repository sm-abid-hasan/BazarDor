"use client";

import { useEffect, useState } from "react";
import { banglaDate } from "@/lib/format";

export default function BanglaDate({ className = "" }) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(banglaDate());
  }, []);

  return <span className={className}>{text || "\u00A0"}</span>;
}
