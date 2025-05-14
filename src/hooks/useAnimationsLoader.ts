import {useEffect, useState} from 'react';
import useMediaQuery from './useMediaQuery';

type AnimationData = Record<string, unknown>;
type ImportFunction = () => Promise<{ default: AnimationData }>;

function useAnimationsLoader(mediaQuery: string, importFunctions: ImportFunction[]) {
    const [animations, setAnimations] = useState<Array<AnimationData | null>>(
        Array(importFunctions.length).fill(null)
    );
    const [isLoading, setIsLoading] = useState(true);
    const isAboveMobile = useMediaQuery(mediaQuery);

    useEffect(() => {
        let isMounted = true;

        const loadAnimations = async () => {
            try {
                const results = await Promise.allSettled(
                    importFunctions.map((importFunc) => importFunc())
                );

                if (isMounted) {
                    const loadedAnimations = results.map((result) =>
                        result.status === 'fulfilled' ? result.value.default : null
                    );
                    setAnimations(loadedAnimations);
                }
            } catch (error) {
                console.error('Error loading animations:', error);
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        loadAnimations();

        return () => {
            isMounted = false;
        };
    }, [importFunctions]);

    return {
        animations,
        isAboveMobile,
        isLoading
    };
}

export default useAnimationsLoader;