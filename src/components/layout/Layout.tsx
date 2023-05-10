import { ReactNode } from "react";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
