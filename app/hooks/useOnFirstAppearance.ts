import { useRef, useEffect, useState } from "react";
import _ from "lodash";

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 */
export default function useOnFirstAppearance<T extends HTMLElement>(
  offset = 0
): [boolean, React.RefObject<T>] {
  const [appeared, setAppeared] = useState(false);
  const elementRef = useRef<T>(null);

  const onScroll = _.throttle(function () {
    if (!appeared && elementRef.current) {
      const top = elementRef.current.getBoundingClientRect().top;
      if (top + offset >= 0 && top - offset <= window.innerHeight) {
        setAppeared(true);
      }
    }
  }, 100);

  useEffect(() => {
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });

  return [appeared, elementRef];
}
