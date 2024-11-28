"use client";
import debounce from "debounce";
import { useEffect, useState } from "react";

function useScrollDirection() {
  const [scrollingDown, setScrollingDown] = useState<boolean>(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      lastScrollY = currentScrollY;
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollingDown;
}

export default useScrollDirection;
