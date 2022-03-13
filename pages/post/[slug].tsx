import { GetStaticProps } from 'next';
import { Header } from '../../components';
import { sanityClient, urlFor } from '../../config/sanity';
import { Post } from '../../typings';

interface Props {
  post: Post;
}

function Post({ post }: Props) {
  console.log(post);
  return (
    <main>
      <div className="mx-auto max-w-7xl">
        <Header />
      </div>

      <img
        className="h-40 w-full object-cover"
        src={urlFor(post.mainImage).url()!}
        alt="post banner"
      />

      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
        <h2 className="mb-2 text-xl font-light text-gray-500">
          {post.description}
        </h2>

        <div className="flex items-center space-x-2">
          <img
            className="1-10 h-10 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt="Author"
          />
          <p className="text-sm font-extralight">
            Blog post by{' '}
            <span className="text-violet-900">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
      </article>
    </main>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const query = `
        *[_type == 'post'] {
            _id,
            slug {
                current
            },
        }
    `;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
        *[_type == "post" && slug.current == $slug][0] {
            _id,
            _createdAt,
            title,
            author -> {
                name,
                image
            },
            description,
            mainImage,
            slug,
            body
        }
    `;

  const post: Post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // Update cache every 60 seconds
  };
};
