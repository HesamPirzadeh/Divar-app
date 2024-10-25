import Header from "Layout/Header";
import Footer from "Layout/Footer";

import styles from "css/Layout.module.css"

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
