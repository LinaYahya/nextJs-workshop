
// render Note component by note info
function Note() {
  return (
    <div>
      <h1>title</h1>
      <p style={{textAlign: 'center'}}>description</p>
    </div>
  );
}

// get note by Id using getServerSideProps or getStaticProps along with getStaticPaths

export default Note;
