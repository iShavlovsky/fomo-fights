import type { MouseEventHandler } from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { createContainer } from '@/utils/portal.ts';

import styles from './index.module.css';

import HeadModelStyle from '@styles/baseBlock.module.css';
import Index from '@components/common/Button';
import Portal from '@components/common/Portal';
import ClosedIcon from '@icon/closed-16.svg';

const MODAL_CONTAINER_ID = 'modal-container-id';

type Props = {
    title: React.ReactNode;
    onClose?: () => void;
    children?: React.ReactNode | React.ReactNode[];
};

const Modal = (props: Props) => {
    const { title, onClose, children } = props;

    const rootRef = useRef<HTMLDivElement>(null);
    const [isMounted, setMounted] = useState(false);

    const toggleBodyScroll = (disable: boolean) => {
        document.body.style.overflow = disable ? 'hidden' : 'auto';
    };

    const toggleFocusTrap = (trap: boolean) => {
        const focusableElements = Array.from(
            document.querySelectorAll(
                'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
            )
        );

        focusableElements.forEach((el: Element) => {
            if (trap) {
                el.setAttribute('tabindex', '-1');
            }
            else {
                el.removeAttribute('tabindex');
            }
        });
    };

    useEffect(() => {
        createContainer({ id: MODAL_CONTAINER_ID });
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleWrapperClick = (event: MouseEvent) => {
            const { target } = event;

            if (target instanceof Node && rootRef.current === target) {
                onClose?.();
            }
        };
        const handleEscapePress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose?.();
            }
        };

        window.addEventListener('click', handleWrapperClick);
        window.addEventListener('keydown', handleEscapePress);

        if (isMounted) {
            toggleFocusTrap(true);
            toggleBodyScroll(true);
        }

        return () => {
            window.removeEventListener('click', handleWrapperClick);
            window.removeEventListener('keydown', handleEscapePress);
            toggleFocusTrap(false);
            toggleBodyScroll(false);
        };
    }, [isMounted, onClose]);

    const handleClose: MouseEventHandler<
        HTMLDivElement | HTMLButtonElement
    > = useCallback(() => {
        onClose?.();
    }, [onClose]);

    return isMounted
        ? (
                <Portal id={MODAL_CONTAINER_ID}>
                    <div className={styles.modal_wrap} ref={rootRef}>
                        <div>
                            <header className={`${HeadModelStyle.head}`}>
                                {title}
                                <Index
                                    type="default"
                                    onClick={handleClose}
                                >
                                    <ClosedIcon />
                                </Index>
                            </header>
                            <div className={styles.modal_content}>
                                {children}
                            </div>
                        </div>
                    </div>
                </Portal>
            )
        : null;
};

export default Modal;
