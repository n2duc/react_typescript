import React, { useEffect, useState } from "react";
import useTodos from "./hooks/useTodos";
import TicTacToe from "./components/tictactoe/TicTacToe";

type HeadingProp = {
    title: string,
}

interface Data {
    text: string;
}

const Heading = ({ title }: HeadingProp) => {
    return <h2 className="font-bold text-2xl mb-5">{title}</h2>
}

const App = () => {
    const { inputRef, todos, handleAddTodo, onRemoveTodo } = useTodos([]);
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
            <div className="max-w-2xl p-5">
                <Heading title="Todo App"></Heading>
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
                <RenderList keyExtractor={(todo) => todo.id} items={todos} render={(todo) => (
                    <div key={todo.id} className="flex items-center gap-x-3 mt-3">
                        <span>{todo.text}</span>
                        <button onClick={() => onRemoveTodo(todo.id)} className="p-2 rounded-md bg-red-500 text-white text-sm font-medium">Remove</button>
                    </div>
                )}></RenderList>
                <Button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">See more</Button>
                <Input className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" placeholder="Enter name" />

                <View as="h2" className="text-lg font-semibold">Heading</View>
                <View as="button" type="button" className="px-3 py-2 rounded-md border border-slate-600">Heading</View>
            </div>
            <TicTacToe />
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

const RenderList = <T,>({ items, render, keyExtractor }: {
    items: T[];
    render: (item: T) => React.ReactNode;
    keyExtractor: (item: T) => string | number;
}) => {
    return (
        <li className="flex flex-col gap-y-5 mt-5">
            {items.map((item) => <li key={keyExtractor(item)}>{render(item)}</li>)}
        </li>
    )
}


const Boxed = ({ children } : { children: React.ReactNode }) => {
    return (
        <div>{children}</div>
    )
}

type ButtonProp = {
    children: React.ReactNode;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>;
const Button = ({ children, ...rest }: ButtonProp) => {
    return <button {...rest}>{children}</button>
}

type InputProp = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>;
const Input = ({ ...rest }: InputProp) => {
    return <input {...rest} />
}

type ViewProp<T extends keyof JSX.IntrinsicElements> = {
    children: React.ReactNode;
    as: T;
} & JSX.IntrinsicElements[T];
const View = <T extends keyof JSX.IntrinsicElements>({ children, as, ...rest }: ViewProp<T>) => {
    return React.createElement(as, {...rest}, children)
}

export default App;