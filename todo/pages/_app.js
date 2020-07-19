import Layout from "../components/layout";
import '../css/style.css';


const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
