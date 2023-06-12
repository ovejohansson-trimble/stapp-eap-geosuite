import { ReactNode } from "react";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <MainNavigation />
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
