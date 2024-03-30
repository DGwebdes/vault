import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: 'un54rechb5on',
  accessToken: 'X7bx8hE2UybkmGaclJN2Uj4SmQm9qLHg52BMGP13Bbk',
});

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await client.getEntry(postId);
        setPost(response);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div style={{ fontSize: 30}}>Loading...</div>;
  }

  return (
    <div className="post">
      <h1>{post.fields.title}</h1>
      {/* Render Rich Text content */}
      {/* <img src={post.fields.postImage.fields.file.url} alt="post-img" /> */}
      <div className="post-body">
        {documentToReactComponents(post.fields.content)}
      </div>
      <hr />
      <div className="info">
        <p>Author: {post.fields.author}</p>
        <p>Publish Date: {new Date(post.fields.publishDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Post;