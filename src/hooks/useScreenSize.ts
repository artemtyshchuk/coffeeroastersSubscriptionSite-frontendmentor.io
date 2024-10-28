import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [smallScreen, setSmallScreen] = useState({
    hugeMobileScreen: window.matchMedia("(max-width: 768px)").matches,
    mobileScreen: window.matchMedia("(max-width: 576px)").matches,
  });

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen({
        hugeMobileScreen: window.matchMedia("(max-width: 768px)").matches,
        mobileScreen: window.matchMedia("(max-width: 576px)").matches,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { smallScreen };
};
