import { useReducer, useRef } from "react";

type ActionType = | { type: "ADD", text: string } | { type: "REMOVE", id: number }
interface Todo {
    id: number;
    text: string;
}
const todoReducer = (state: Todo[], action: ActionType) => {
    switch(action.type) {
        case "ADD":
            return [...state, { id: state.length, text: action.text }]
        case "REMOVE":
            return state.filter((todo: Todo) => todo.id !== action.id);
        default:
            throw new Error("")
    }
}

export default function useTodos(initialState: Todo[]): {
    inputRef: React.LegacyRef<HTMLInputElement> | undefined;
    todos: Todo[];
    handleAddTodo: () => void;
    onRemoveTodo: (todoId: number) => void;
} {
    const inputRef = useRef<HTMLInputElement>(null);
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const onRemoveTodo = (todoId: number) => {
        dispatch({
            type: "REMOVE",
            id: todoId
        })
    }
    const handleAddTodo = () => {
        if (inputRef.current) {
            dispatch({
                type: "ADD",
                text: inputRef.current.value,
            })
            inputRef.current.value = "";
        }
    }

    return {
        inputRef,
        todos,
        handleAddTodo,
        onRemoveTodo,
    }
}