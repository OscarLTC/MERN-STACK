import { usePosts } from "../context/postContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";

export const HomePage = () => {
    const { posts } = usePosts();

    if (posts.length === 0)
        return (
            <div className="flex flex-col justify-center text-white items-center">
                <Link to="/new">
                    <VscEmptyWindow className="w-48 h-48 " />
                </Link>
                <h1>There are no posts</h1>
            </div>
        );

    return (
        <div className="text-white mb-10">
            <header className="flex justify-between py-4">
                <h1 className="text-2xl text-gray-300 font-bold">
                    Posts ({posts.length})
                </h1>
                <Link
                    to="/new"
                    className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 rounded text-white"
                >
                    Create New Post
                </Link>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
};
