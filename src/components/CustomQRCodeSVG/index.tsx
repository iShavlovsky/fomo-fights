
import qrUsdtNetworkEth from '@assets/networks/qrUsdtNetworkEth.svg?bg';
import * as qrCode from "@zag-js/qr-code"
import { useMachine, normalizeProps } from "@zag-js/react"
import { useId } from "react"
type CustomQRCodeSVGProps = {
    value: string;
};

export const CustomQRCodeSVG = ({value}: CustomQRCodeSVGProps) => {
    const service = useMachine(qrCode.machine, {
        id: useId(),
        value,
    })
    const api = qrCode.connect(service, normalizeProps)
    return (
        <div {...api.getRootProps()}>
            <svg {...api.getFrameProps()}>
                <path {...api.getPatternProps()} />
            </svg>
            <div {...api.getOverlayProps()}>
                <img
                    src={qrUsdtNetworkEth}
                    alt=""
                />
            </div>
        </div>
    );
};
