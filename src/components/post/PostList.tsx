import { useEffect, useState } from "react";
import PostCard from "./PostCard";

export type PostProp = {
    id: number;
    name: string;
    html_url: string;
    language: string;
}

const PostList = () => {
    const [data, setData] = useState<PostProp[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://api.github.com/users/n2duc/repos")
                const repo = await res.json();
                setData(repo);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])
    return (
        <div className="grid grid-cols-2 gap-5">
            {data.map((repo) => (
                <PostCard key={repo.id} {...repo}></PostCard>
            ))}
        </div>
    )
}

export default PostList;