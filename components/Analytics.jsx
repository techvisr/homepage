"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { installInteractions } from "../lib/analytics.mjs";

export default function Analytics() {
  const pathname = usePathname();
  // GA enhanced measurement owns page_view; do not duplicate it here.
  useEffect(() => installInteractions(), [pathname]);
  return null;
}
