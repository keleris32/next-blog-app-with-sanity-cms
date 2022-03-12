import Link from 'next/link';
import React from 'react';
import { urlFor } from '../../config/sanity';
import { Post } from '../../typings';

interface PostsProps {
  posts: [Post];
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <section className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div className="group cursor-pointer overflow-hidden rounded-lg border">
            <img
              className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
              src={urlFor(post.mainImage).url()!}
              alt="Blog post image"
            />
            <div className="flex items-center justify-between bg-white p-5">
              <div>
                <p className="mb-1 font-bold">{post.title}</p>
                <p className="pr-2 text-xs">
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
