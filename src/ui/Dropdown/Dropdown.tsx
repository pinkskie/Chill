import { FC, useEffect, useRef, useState } from "react";

import styles from "./Dropdown.module.scss";

export interface DropdownProps {
    trigger: React.ReactNode;
    items: Array<{ label: string; onClick: () => void }>;
}

export const Dropdown: FC<DropdownProps> = ({ trigger, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    const handleItemClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleItemClick);

        return () => {
            document.removeEventListener("mousedown", handleItemClick);
        };
    }, []);

    return (
        <div className={styles.dropdown} ref={ref}>
            <div className={styles.trigger} onClick={toggleDropdown}>
                {trigger}
            </div>
            {isOpen && (
                <div className={styles.menu}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={styles.menuItem}
                            onClick={() => {
                                item.onClick();
                                setIsOpen(false);
                            }}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
