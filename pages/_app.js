import "../styles/globals.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer limit={1} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
