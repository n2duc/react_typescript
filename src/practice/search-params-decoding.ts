import { String, Union } from "ts-toolbelt";
const query = `/home?name=n2duc&age=21`;
// =>
// const objSearchParams = {
//     name: "n2duc",
//     age: 21,
// }

type QueryPath = typeof query; // "/home?name=n2duc&age=21"
type SecondQueryPath = String.Split<QueryPath, "?">[1]; // "name=n2duc&age=21"
type QueryElements = String.Split<SecondQueryPath, "&">; // ["name=n2duc", "age=21"]

// Q: name=n2duc
type QueryPathParams = {
    [Q in QueryElements[number]]: {
        [K in String.Split<Q, "=">[0]]: String.Split<Q, "=">[1];
    };
}[QueryElements[number]]
const QueryPathResult: Union.Merge<QueryPathParams> = {
    name: "n2duc",
    age: "21"
}
console.log(QueryPathResult);
