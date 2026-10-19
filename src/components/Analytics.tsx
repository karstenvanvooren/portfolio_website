"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { GOATCOUNTER_CODE } from "@/lib/site";

declare global {
  interface Window {
    goatcounter?: { count?: (vars: { path: string }) => void };
  }
}

function count(path: string) {
  window.goatcounter?.count?.({ path });
}

// GoatCounter page-view counting: no cookies and no personal data, so no
// cookie banner is needed. Its script normally counts once on page load;
// Next.js navigates without full page loads, so automatic counting is off
// (no_onload) and every route change is counted here instead. GoatCounter
// ignores localhost by itself, so local development isn't counted.
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Before the script has loaded this is a no-op; onLoad below counts
    // the first page.
    if (GOATCOUNTER_CODE) count(pathname);
  }, [pathname]);

  if (!GOATCOUNTER_CODE) return null;

  return (
    <Script
      src="https://gc.zgo.at/count.js"
      data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`}
      data-goatcounter-settings='{"no_onload": true}'
      strategy="afterInteractive"
      onLoad={() => count(window.location.pathname)}
    />
  );
}
