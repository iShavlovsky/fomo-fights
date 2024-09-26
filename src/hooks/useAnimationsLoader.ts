import { useEffect, useState } from 'react';

import useMediaQuery from './useMediaQuery';

type AnimationData = Record<string, unknown>;
type ImportFunction = () => Promise<{ default: AnimationData }>;

function useAnimationsLoader(mediaQuery: string, importFunctions: ImportFunction[]) {
    const [animations, setAnimations] = useState<Array<AnimationData | null>>([]);
    const isAboveMobile = useMediaQuery(mediaQuery);

    useEffect(() => {
        if (isAboveMobile) {
            Promise.allSettled(importFunctions.map((importFunc) => importFunc()))
                .then((results) => {
                    const loadedAnimations = results.map((result) =>
                        result.status === 'fulfilled' ? result.value.default : null
                    );
                    setAnimations(loadedAnimations);
                    return true;
                })
                .catch((error) => console.error('Error loading animations:', error));
        }
    }, [isAboveMobile, importFunctions]);

    return {
        animations,
        isAboveMobile
    };
}

export default useAnimationsLoader;
