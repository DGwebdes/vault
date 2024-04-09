import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import axios from 'axios'
import Spinner from './Spinner';


const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const BASE_URL = 'https://my-blog-server-bn2n.onrender.com'

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/posts/` + postId);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return (
      <Spinner />
    );
  }

  return (
    <div className="post">
    <div className="scroll-watcher"></div>
      <h1>{post.title}</h1>
      {/* Render Rich Text content */}
      <img src={post.postImage} alt="post-img" className='posted-image' />
      <div className="post-body">
        {documentToReactComponents(post.content)}
      </div>
      <hr />
      <div className="info">
        <p>Author: {post.author}</p>
        <p>Publish Date: {new Date(post.publishDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Post;