const Owner = {
    name: "Ngoc Duc",
    role: "Project Manager",
    colleague: {
        name: "Tha Thu",
        major: "Pedagogy",
    },
    asset: {
        amount: 2000,
        isHaveWife: false,
    }
}
// getDeepValue(Owner, "colleague", "major") => "Pedagogy"

function getDeepValue<T, K extends keyof T, SK extends keyof T[K]>(obj: T, firstKey: K, secondKey: SK) {
    return obj[firstKey][secondKey];
}
getDeepValue(Owner, "colleague", "major")