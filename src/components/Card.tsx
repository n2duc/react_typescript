import { useEffect } from "react";
import { ICard } from "../utils/interfaces";

const Card = ({ title, description, link }: ICard) => {
    useEffect(() => {
        const input = document.querySelector("input") as HTMLInputElement;
        console.log(input.value);
    }, []);
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={link}>Link</a>
            <input type="text" />
        </div>
    );
};

export default Card;