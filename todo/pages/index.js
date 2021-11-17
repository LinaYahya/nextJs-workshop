import Head from "next/head";
import Link from "next/link";

// once you get notes from getStatic props comment this
const notes = [
  { id: 1, title: "meeting", description: "meeting with client" },
  { id: 2, title: "study", description: "styding nextJS" },
  { id: 3, title: "have a dinner", description: "with freinds" },
];

// receive notes as props
function Home() {
  return (
    <div className="container">
      <Head>
        <title>TODO App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">YOUR TODO</h1>

        <div className="grid">
          {notes?.map((note) => (
            <div className="card" key={note.id}>
              <Link href={`/${note.id}`}>
                <a>
                  <h3>{note.title} &rarr;</h3>
                </a>
              </Link>
              <p>{note.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// we'll build our pages with getStaticProps and getServerSideProps, What is the difference?!
// Once all work is done, build your app and run start, then add new note, try to figure out what is happening

// use getStaticProps to fetch notes from query(check queries in database/queries) Be careful how to return props as notes then comment notes above


// export async function getStaticProps() {
//   // your code here
// }

export default Home;
