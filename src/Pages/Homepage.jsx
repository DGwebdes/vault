import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Components/Spinner";

const Homepage = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const BASE_URL = "my-blog-server-production-35c7.up.railway.app";

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/posts`);
                setPosts(response.data);
            } catch (err) {
                setLoading(true);
                console.log(`Something went Wrong ${err}`);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return loading ? (
        <Spinner />
    ) : (
        <main>
            <section className="hero">
                <h1>Dielan&apos;s Vault.</h1>
                <p>
                    Documenting my adventures as a [insert label], [adjective]
                    and [relatable adjective] person.
                </p>
            </section>
            <section className="content">
                <ul>
                    {posts.map((post) => (
                        <li key={post.sys.id}>
                            <Link to={`/posts/${post.sys.id}`}>
                                <div className="spin"></div>
                                <img
                                    className="post-img"
                                    src={post.fields.postImage.fields.file.url}
                                    alt="post-banner"
                                />
                                <h2 className="text-shadow">
                                    {post.fields.title}
                                </h2>
                            </Link>
                            <p>
                                <small>
                                    Date:{" "}
                                    {new Date(
                                        post.fields.publishDate
                                    ).toLocaleDateString()}
                                </small>
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default Homepage;
