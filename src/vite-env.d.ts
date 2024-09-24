/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface ImportMeta {
    readonly env: ImportMetaEnv;
    readonly glob: (
        path: string,
        config: object,
    ) => Record<string, () => Promise<{ default: any }>>; // eslint-disable-line @typescript-eslint/no-explicit-any
}

declare module '*.svg' {
    import * as React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}
