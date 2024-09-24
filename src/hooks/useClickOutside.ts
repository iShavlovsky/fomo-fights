import React, { useEffect } from 'react';

export default function useClickOutside(
    ref: React.RefObject<HTMLElement>,
    callback: ((event: Event) => void) | undefined
) {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (callback && ref.current && !ref.current.contains(event.target as Node)) {
                callback(event);
            }
        };

        if (typeof window !== 'undefined') {
            document.addEventListener('click', handleClickOutside);
            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
        }
    }, [ref, callback]);
}
