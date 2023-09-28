import { PostProp } from "./PostList";

const PostCard = ({ name, html_url, language }: PostProp) => {
    return <div>
        <h2>{name}</h2>
        <a href={html_url} target="_blank">{html_url}</a>
        <p>{language}</p>
    </div>;
};

export default PostCard;