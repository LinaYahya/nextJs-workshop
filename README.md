# Data fetching code along workshop
We’ve explained that Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.Now, we’ll talk in depths about data fetching strategies for each case.

 We'll code the three unique Next.js functions you can use to fetch data for pre-rendering:

- [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) (Static Generation): Fetch data at build time.
- [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation) (Static Generation): Specify dynamic routes to pre-render based on data.
- [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration)
- [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) (Server-side Rendering): Fetch data on each request .


### Now code time
We’d like to create a note App, to view our notes, add new note, and view specific note.
We'll build our pages with nextJs two forms of pre-rendering, First with static generation then with serverSideProps, While we're working in the development mode we'll not notice the difference. So after all is done try to build your app, add new note, check notes at the home page, What can you notice?!

1. Clone this repo
2. check files
3. pgcli then \i path of createDB.sql
4. pgcli DB_URL from .env then \i path of build.sql
5. cd todo && npm i
6. npm run dev
7. start from pages/index.js , You can notice that notes are static data try to fetch it by following comments,
8. When you finished go to pages/[id] , also follow the comments.

##### Have fun time :wink: , Don't forget Documentation is your friend

