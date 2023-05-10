import styles from "./PageHeader.module.css";
interface Props {
  header: string;
}

const PageHeader = ({ header }: Props) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>{header}</h1>
    </div>
  );
};

export default PageHeader;
