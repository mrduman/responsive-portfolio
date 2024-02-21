import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatsches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatsches(media.matches);
    }
    const listener = () => setMatsches(media.matches);
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
