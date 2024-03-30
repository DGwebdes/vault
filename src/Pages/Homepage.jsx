import {createClient} from 'contentful'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const client = createClient({
  //This key is restricted to read-only, have fun!
  space: 'un54rechb5on',
  accessToken: 'X7bx8hE2UybkmGaclJN2Uj4SmQm9qLHg52BMGP13Bbk',
})


const Homepage = () => {  
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await client.getEntries();
                setPosts(response.items);
                console.log(response.items)
            } catch (err) {
                console.log(`Something went Wrong ${err}`)
            }
        };

        fetchPosts();
    }, [])

    return (
        <main>
            <section className="hero">
                <h1>Dielan&apos;s Vault.</h1>
                <p>
                    Documenting my adventures as a developer, enthusiast and curious person.
                </p>
            </section>
            <section className="content">
                <ul>
                    {posts.map((post) => (
                        <li key={post.sys.id}>
                            
                            <Link to={`/post/${post.sys.id}`}>
                                <div className="spin"></div>
                                <img className='post-img' src={post.fields.postImage.fields.file.url} alt="post-banner" />
                                <h2 className='text-shadow'>{post.fields.title}</h2>
                            </Link>
                            <p><small>Date: {new Date(post.fields.publishDate).toLocaleDateString()}</small></p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default Homepage;
