import { useState, useEffect } from "react";

interface Props {
    src: string;
    alt: string;
    placeholder?: string;
    className?: string;
    loading?: "eager" | "lazy";
}

export const LazyImage = ({ src, alt, placeholder, className, loading }: Props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [uniqueId] = useState(() => `lazy-image-${Math.random().toString(36)}`);

    useEffect(() => {
        const imageObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsLoaded(true);
                        imageObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            },
        );

        const imageElement = document.getElementById(uniqueId);
        if (imageElement) {
            imageObserver.observe(imageElement);
        }

        return () => {
            if (imageElement) {
                imageObserver.unobserve(imageElement);
            }
        };
    }, [uniqueId]);

    return (
        <div className={className} style={{ position: "relative" }}>
            {!isLoaded && placeholder && (
                <img src={placeholder} alt={`Loading ${alt}`} className="loading" />
            )}
            <img
                id={uniqueId}
                src={src}
                alt={alt}
                loading={loading}
                className="image"
                style={{
                    opacity: isLoaded ? 1 : 0,
                    display: isLoaded ? "block" : "none",
                }}
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    );
};
