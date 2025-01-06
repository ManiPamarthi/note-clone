import { useEffect, useState } from 'react'

export const useScrollTop = (threshold = 10) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        try {
            if (window.scrollY > threshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }                
            }
        catch(err) {
                console.error("An error occurred while handling scroll:", err);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);
  return scrolled;
}
