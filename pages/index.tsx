import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Hero, Posts } from '../components';
import Header from '../components/Header';
import { sanityClient } from '../config/sanity';
import { Post } from '../typings';

const Home = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Radium</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Posts posts={posts} />
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `
    *[_type == 'post']{
      _id,
      title,
      slug,
      description,
      author -> {
        name,
        image,
      },
      mainImage,
      body
    }
  `;

  const posts: [Post] = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
