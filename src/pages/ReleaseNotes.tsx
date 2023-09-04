import { RELEASE_NOTES } from "../components/releasenotes/ReleaseNote";
import ReleaseNoteList from "../components/releasenotes/ReleaseNoteList";
import PageHeader from "./PageHeader";

const ReleaseNotes = () => {
  return (
    <article>
      <PageHeader header="Release notes"></PageHeader>
      <section className="mb-4">
        <h1>Description</h1>
        <p>For each new release, release notes is posted here.</p>
        <p>
          The release notes will contain information regarding updates, bug
          fixes and new features.
        </p>
      </section>
      <section>
        <ReleaseNoteList releaseNotes={RELEASE_NOTES}></ReleaseNoteList>
      </section>
    </article>
  );
};

export default ReleaseNotes;
