import {RefObject, useEffect, useRef, useState} from "react";

export default function useOnScreen(ref: RefObject<HTMLElement | null>) {
    const refObject = useRef<IntersectionObserver | null>(null);
    const [isOnScreen, setIsOnScreen] = useState(false);

    useEffect(() => {
        refObject.current = new IntersectionObserver(([entry]) => {
            setIsOnScreen(entry.isIntersecting);
        }, {threshold: 0.4, rootMargin: '0px'});
    }, [])

    useEffect(() => {
        if (ref.current) refObject.current?.observe(ref.current);

        return () => {
            refObject.current?.disconnect();
        }
    }, [ref.current]);

    return isOnScreen;
}