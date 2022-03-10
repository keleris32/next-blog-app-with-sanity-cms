import React from 'react';

const Hero = () => {
  return (
    <section className="flex items-center justify-between border-y border-black bg-blue-300 py-16  px-2 sm:px-5 md:py-24 lg:py-32">
      <div className="space-y-5">
        <h1 className="max-w-xl font-serif text-4xl sm:text-5xl">
          <span className="text-violet-900 underline decoration-violet-900 decoration-wavy decoration-2">
            Radium
          </span>{' '}
          is a place to read, write and connect
        </h1>
        <h2>
          It's free and easy to post your thoughts on any topic and connect with
          millions of readers
        </h2>
      </div>
      <div>
        <img
          className="hidden h-32 md:inline-flex lg:h-full lg:pr-20"
          src="/favicon.png"
          alt="Hero section logo"
        />
      </div>
    </section>
  );
};

export default Hero;
