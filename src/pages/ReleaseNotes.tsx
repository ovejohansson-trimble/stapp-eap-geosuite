import ReleaseNoteList from "../components/releasenotes/ReleaseNoteList";
import PageHeader from "./PageHeader";

const ReleaseNotes = () => {
  return (
    <article>
      <PageHeader header="Release notes"></PageHeader>
      <section className="mb-4">
        <h1>Description</h1>
        <p>For each new release, release notes will be posted here.</p>
        <p>
          The release notes will contain information regarding updates, bug
          fixes and new features.
        </p>
      </section>
      <section>
        <ReleaseNoteList releaseNotes={[]}></ReleaseNoteList>
      </section>
    </article>
  );
};

export default ReleaseNotes;
