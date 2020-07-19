import Head from "next/head";


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
            <div key={note.id}>
              <a className="card">
                <h3>{note.title} &rarr;</h3>
                <p>{note.description}</p>
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// use getStaticProps to fetch notes from api/todo Be careful how to return props as notes

// export async function getStaticProps() {
//   // your code here
// }

export default Home;
