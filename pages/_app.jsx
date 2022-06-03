import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
