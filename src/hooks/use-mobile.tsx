import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile(): boolean {
  // Safe access for SSR: default to `false` on the server
  const getInitial = () => (typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false);
  const [isMobile, setIsMobile] = React.useState<boolean>(getInitial);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      // Modern browsers pass a MediaQueryListEvent with `matches`; older APIs may call with no arg
      if (e && "matches" in e) {
        setIsMobile(e.matches);
      } else {
        setIsMobile(mql.matches);
      }
    };

    // Set initial value based on current match
    setIsMobile(mql.matches);

    // Add listener with compatibility for older browsers
    if (typeof (mql as any).addEventListener === "function") {
      mql.addEventListener("change", handler as EventListener);
      return () => mql.removeEventListener("change", handler as EventListener);
    }

    if (typeof (mql as any).addListener === "function") {
      (mql as any).addListener(handler);
      return () => (mql as any).removeListener(handler);
    }

    return undefined;
  }, []);

  return isMobile;
}
