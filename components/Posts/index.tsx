import Link from 'next/link';
import React from 'react';
import { urlFor } from '../../config/sanity';
import { Post } from '../../typings';

interface PostsProps {
  posts: [Post];
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <section>
      {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div>
            <img
              className="h-auto w-auto"
              src={urlFor(post.mainImage).url()!}
              alt="Blog post image"
            />
            <div className="flex justify-between bg-white p-5">
              <div>
                <p>{post.title}</p>
                <p>
                  {post.description} by {post.author.name}
                </p>
              </div>

              <img
                className="h-14 w-14 rounded-full"
                src={urlFor(post.author.image).url()!}
                alt="Author waving"
              />
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Posts;
