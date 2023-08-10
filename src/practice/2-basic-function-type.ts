// Add type to the functions below
const twoNumberSum = (a: number, b: number): number => {
    return a + b;
};

const twoNumberSumV1 = (params: {
    first: number, second: number,
}) => {
    return params.first + params.second;
};
type User2 = {
    name: string,
    age: number,
    career: string,
}
const GetUserInfo = async () => {
    const data: User2 = await new Promise((resolve) => {
        const user = {
            name: "code mely",
            age: 22,
            career: "developer",
        };
        resolve(user);
    });
    return data;
};