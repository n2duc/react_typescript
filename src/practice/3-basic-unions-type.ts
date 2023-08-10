// Ex-1. Add type for user with gender is one of "male", "female", "unknown"
type Gender = "male" | "female" | "unknown";
type User3 = {
	name: string,
	age: number,
	gender: Gender,
}
const user3: User3 = {
	name: "Huy dep chai",
	age: 18,
	gender: "female",
}

// Ex-2. Update Ex-1 to make gender accept value of "male", "female", "unknown" or any string
type StringGender = "male" | "female" | "unknown" | Omit<string, Gender>;
type User4 = {
	name: string,
	age: number,
	gender: StringGender,
}
const user4: User4 = {
	name: "Huy dep chai",
	age: 18,
	gender: "unknown"
}