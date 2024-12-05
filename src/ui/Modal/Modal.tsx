import { FC } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    withPortal?: boolean;
}

export const Modal: FC<Props> = ({ isOpen, onClose, title, children, withPortal }) => {
    if (!isOpen) return;

    const modalContent = (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {title && <div className={styles.header}>{title}</div>}
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>
                <div className={styles.body}>{children}</div>
            </div>
        </div>
    );

    if (withPortal) {
        return createPortal(modalContent, document.body);
    }

    return modalContent;
};
