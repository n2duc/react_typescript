import { useEffect, useReducer, useRef, useState } from "react";

type HeadingProp = {
    title: string,
}
type ActionType = | { type: "ADD", text: string } | { type: "REMOVE", id: number }
interface Todo {
    id: number;
    text: string;
}

interface Data {
    text: string;
}

const Heading = ({ title }: HeadingProp) => {
    return <h2 className="font-bold text-2xl mb-5">{title}</h2>
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
const initialState: Todo[] = [];

const App = () => {
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
    const [data, setData] = useState<Data | null>(null);
    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then((data) => {
                setData(data);
            })
    }, []);

    const onClickItem = (item: string) => {
        alert(item);
    }
    return (
        <div>
            <Heading title="Todo App"></Heading>
            <div className="max-w-sm">
                <div className="flex items-center gap-x-5">
                    <input ref={inputRef} type="text" className="py-2 px-4 border border-slate-200 rounded-md outline-none" />
                    <button onClick={handleAddTodo} className="py-2 px-4 rounded-md bg-blue-400 text-white text-center">Add todo</button>
                </div>
                {todos.map((todo) => (
                    <div key={todo.id} className="flex items-center gap-x-3 mt-3">
                        <span>{todo.text}</span>
                        <button onClick={() => onRemoveTodo(todo.id)} className="p-2 rounded-md bg-red-500 text-white text-sm font-medium">Remove</button>
                    </div>
                ))}
                {JSON.stringify(data)}
                <List items={['Nguyen', 'Ngoc', 'Duc']} onClickItem={(item: string) => onClickItem(item)}></List>
                <Boxed>
                    <p>Xin chao, tao la chua te cua bau troi</p>
                </Boxed>
            </div>
        </div>
    );
};

const List = ({ items, onClickItem }: { items: string[], onClickItem?: (item: string) => void }) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item} onClick={() => onClickItem?.(item)}>{item}</div>
            ))}
        </div>
    )
}
const Boxed = ({ children } : { children: React.ReactNode }) => {
    return (
        <div>{children}</div>
    )
}

export default App;