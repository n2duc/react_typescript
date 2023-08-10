import Card from "./components/Card";
import { Permission } from "./utils/enums";

const reviews: {
    name: string;
    image: string;
    stars: number;
    premiumUser: boolean;
    date: string | number;
}[] = [
    {
        name: "Evondev",
        image: "",
        stars: 5,
        premiumUser: true,
        date: "05/09/2022",
    },
    {
        name: "CharkaUI",
        image: "",
        stars: 4,
        premiumUser: false,
        date: "03/08/2022",
    },
    {
        name: "React Query",
        image: "",
        stars: 3,
        premiumUser: false,
        date: "04/08/2022",
    },
];
type Age = 18 | 20 | 21;
const user: {
    firstName: string;
    lastName: string;
    age: Age;
    isGirlFriend: boolean;
    favorites: (string | number)[];
    permission: Permission;
} = {
    firstName: "Ngoc",
    lastName: "Duc",
    age: 20,
    isGirlFriend: false,
    favorites: ["game", "soccer", "coding"],
    permission: Permission.ADMIN,
};

const travelItem: {
    image: string;
    name: string;
    totalReview: number;
    rating: number;
    location: string;
    price: number;
    date: string;
    departure: string;
    features: { wifi: boolean; parking: boolean; specialOffer: boolean };
}[] = [
    {
        image: "https://source.unsplash.com/random",
        name: "Ngoc Duc",
        totalReview: 3,
        rating: 5,
        location: "Tan Hao",
        price: 120,
        date: "12/08/2023",
        departure: "none",
        features: {
            wifi: true,
            parking: true,
            specialOffer: false,
        },
    },
];

const App = () => {
    function displayView(totalReview: number, name: string, premium: boolean) {
        return (
            <>
                Review total <strong>{totalReview}</strong> | Last reviewed by{" "}
                <strong>{name}</strong> {premium ? "⭐️" : ""}
            </>
        );
    }

    return (
        <div className="review">
            <div className="review-image">
                <img src="https://source.unsplash.com/random" alt="" />
            </div>
            <div className="review-info">
                {displayView(
                    reviews.length,
                    reviews[0].name,
                    reviews[0].premiumUser
                )}
                {user.firstName}
                {travelItem[0].location}
            </div>
            <Card title="Hello world" description="Dit con me may thang lol" link="#"></Card>
        </div>
    );
};

export default App;
