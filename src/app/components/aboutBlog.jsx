import Link from "next/link";

export default function AbutBlog() {
  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-6'>About Our Blog</h1>

      {/* Blog Journey */}
      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Our Blogs Journey</h2>
        <p>
          We embarked on this journey with a simple idea: to create a platform
          where knowledge, creativity, and curiosity converge. Over the years,
          our blog has grown from a humble space to a vibrant community of
          writers, readers, and thinkers. We are committed to sharing stories
          that educate, inspire, and spark conversations.
        </p>
      </section>

      {/* Call to Action */}
      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Join the Conversation</h2>
        <p>
          We invite you to be a part of our community! Whether you are a writer,
          an avid reader, or someone looking to explore new ideas, theres a
          place for you here. Share your thoughts, engage with our content, and
          let your voice be heard. Together, we can shape meaningful discussions
          and enrich our collective knowledge.
        </p>
        <Link href={"/contact"}>
          <p className='text-blue-500 font-semibold hover:underline mt-2 inline-block'>
            Get in touch with us today!
          </p>
        </Link>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className='text-xl font-semibold mb-4'>Connect With Us</h2>
        <p>
          We value your feedback and engagement. Feel free to leave comments,
          share your thoughts, and connect with us through our social media
          channels. Thank you for being a part of our blog community. Happy
          reading!
        </p>
        <div className='mt-4'>
          <p>
            Email:{" "}
            <a
              href='mailto:info@yourblog.com'
              className='text-blue-500 hover:underline'
            >
              info@yourblog.com
            </a>
          </p>
          <p>
            Social Media:
            <a href='#' className='text-blue-500 hover:underline ml-2'>
              Facebook
            </a>
            <a href='#' className='text-blue-500 hover:underline ml-2'>
              Twitter
            </a>
            <a href='#' className='text-blue-500 hover:underline ml-2'>
              Instagram
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
