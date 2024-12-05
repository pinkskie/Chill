interface Props {
    error: Error;
    resetErrorBoundary: () => void;
}

export const ErrorBoundary = ({ error, resetErrorBoundary }: Props) => {
    return (
        <div role="alert" style={{ padding: "20px", textAlign: "center" }}>
            <h2>Произошла ошибка!</h2>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Попробовать снова</button>
        </div>
    );
};
