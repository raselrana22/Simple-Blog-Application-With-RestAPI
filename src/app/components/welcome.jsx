import React from "react";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className='p-2 bg-slate-200'>
      <div className='container mx-3'>
        <div className='flex justify-center items-center'>
          <h1 className='text-3xl font-bold mb-4'>Welcome to Our Blog</h1>
        </div>

        <p className='text-lg text-justify'>
          Welcome to our Home Blog Page! Explore a diverse range of topics and
          immerse yourself in engaging content from various categories. Whether
          you are interested in history, sports, Bangladesh, international
          affairs, science, lifestyle, or simply seeking to broaden your
          horizons with captivating reads, we have got something for everyone.
          Our curated selection of articles, insights, and stories will keep you
          informed and entertained. Dive into the world of literature, discover
          intriguing historical narratives, stay updated on the latest sports
          events, explore the culture and wonders of Bangladesh, delve into
          global perspectives, delve into scientific wonders, and find
          inspiration for a fulfilling lifestyle. Join us on this journey of
          exploration and enlightenment. Happy reading!
        </p>
        <Link href={"/about"}>
          <p className='py-3 text-lg hover:underline underline-offset-4 hover:text-red-400'>
            Learn more about our blog and what we have to offer to our readers.
          </p>
        </Link>
      </div>
    </section>
  );
}
