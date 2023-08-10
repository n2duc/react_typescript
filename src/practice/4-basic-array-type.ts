//Add type
const codeMelyMembers = [
	{
		name: "Huy 2019",
		age: 19,
	},
	{
		name: "Huy 2020",
		age: 20,
		isInRelationShip: false
	},
	{
		name: "Huy 2021",
		age: 21,
		isInRelationShip: true
	},
	{
		name: "Huy 2022",
		age: 22,
		isInRelationShip: false
	}
]

const findColeMelyTeen = (members) => {
	return members.find(member => member.age < 20)
}

const codeMelyCreateGroup: (...groupMembers) = {
	return groupMembers;
}