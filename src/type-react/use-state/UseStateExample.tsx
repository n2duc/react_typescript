import { useState } from "react";

type UserType = {
    sessionId: number;
    name: string;
};

const UseStateExample = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState<UserType | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUser({
            name: username,
            sessionId: Math.random(),
        });
    };

    return (
        <div className="mt-5">
            {user ? (
                `${user.name} logged in`
            ) : (
                <form className="flex flex-col w-[300px]">
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={handleChange}
                        className="w-full p-2 border border-slate-300"
                    />
                    <button
                        onClick={handleClick}
                        className="w-full p-2 text-white bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            )}
        </div>
    );
};

export default UseStateExample;
