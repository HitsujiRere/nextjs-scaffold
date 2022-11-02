import Link from 'next/link';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <article className="prose">
        <h1>h1: Welcome to Next.js!</h1>
        <h2>h2: This is a template project.</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <p>p: Hello!</p>
        <Link href="/cat">Link</Link>
        <ul>
          <li>Dog</li>
          <li>Cat</li>
          <ul>
            <li>Dog</li>
            <li>Cat</li>
          </ul>
        </ul>
        <ol>
          <li>A</li>
          <li>B</li>
          <ol>
            <li>A</li>
            <li>B</li>
          </ol>
        </ol>
      </article>
    </div>
  );
};

export default Home;
