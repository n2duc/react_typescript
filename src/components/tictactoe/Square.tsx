import React from "react";

interface SquareProps {
    value: string | null;
    onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
    const symbolStyles =
        value === "X" ? "text-red-500" : value === "O" ? "text-blue-500" : "";
    return (
        <button
            className={`w-16 h-16 border border-gray-300 text-3xl font-semibold rounded-md ${symbolStyles}`}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Square;
