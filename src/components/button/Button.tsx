type AllOrNothing<T> = T | Partial<Record<keyof T, undefined>>;
type Button = AllOrNothing<{
    onChange: () => void;
    value: string;
}>

type ButtonProp = {
    children: React.ReactNode;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProp) => {
    return <button {...rest}>{children}</button>
}
export default Button;