import {createClient} from 'contentful'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
// import Post from '../Components/Post';

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'un54rechb5on',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
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
                                <h3 className='text-shadow'>{post.fields.title}</h3>
                            </Link>
                            {/* <hr /> */}
                            <p><small>Date: {new Date(post.fields.publishDate).toLocaleDateString()}</small></p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default Homepage;
