import React, { useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
