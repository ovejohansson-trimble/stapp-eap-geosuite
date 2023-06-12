import ReleaseNote from "./ReleaseNote";
import styles from "./ReleaseNoteList.module.css";

interface Props {
  releaseNote: ReleaseNote;
}

const ReleaseNoteItem = ({ releaseNote }: Props) => {
  return (
    <article className={styles.listItem}>
      <h1>{releaseNote.releaseName}</h1>
      <p>
        <b>{releaseNote.date}</b>
      </p>
      <ul>
        {releaseNote.notes.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
    </article>
  );
};

export default ReleaseNoteItem;
