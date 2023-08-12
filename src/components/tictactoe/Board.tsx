import React, { useState } from "react";
import Square from "./Square";

const calculateWinner = (squares: Array<string | null>) => {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombos) {
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
};

const Board: React.FC = () => {
    const initialSquares = Array(9).fill(null);
    const [squares, setSquares] = useState<Array<string | null>>(
        Array(9).fill(null)
    );
    const [xIsNext, setXIsNext] = useState<boolean>(true);

    const handleClick = (i: number) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const newSquares = [...squares];
        newSquares[i] = xIsNext ? "X" : "O";
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const handleReset = () => {
        setSquares(initialSquares);
        setXIsNext(true);
    };

    const winner = calculateWinner(squares);
    const isBoardFull = squares.every(square => square !== null);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else if (isBoardFull) {
        status = "It's a draw!";
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <div className="grid grid-cols-3 gap-2 m-4">
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => handleClick(i)} />
            ))}
            <div className="col-span-3 font-semibold text-xl">{status}</div>
            <button
                className="col-span-3 mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleReset}
            >
                Reset Game
            </button>
        </div>
    );
};

export default Board;
