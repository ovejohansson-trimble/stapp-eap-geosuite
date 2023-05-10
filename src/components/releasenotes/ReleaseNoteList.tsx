import ReleaseNoteItem from "./ReleaseNoteItem";
import ReleaseNote from "./ReleaseNote";

interface Props {
  releaseNotes: ReleaseNote[];
}

const ReleaseNoteList = ({ releaseNotes }: Props) => {
  return (
    <div>
      {releaseNotes.map((releaseNote, i) => (
        <ReleaseNoteItem key={i} releaseNote={releaseNote}></ReleaseNoteItem>
      ))}
    </div>
  );
};

export default ReleaseNoteList;
